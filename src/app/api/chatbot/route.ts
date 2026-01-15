import { GoogleGenerativeAI } from '@google/generative-ai';
import { siteContent, serviceDescriptions, portfolioInfo, aboutUs } from '@/lib/chatbotKnowledge';

// System prompt with website knowledge
const systemPrompt = `You are an AI assistant for Virtuo Edge, a full-service digital agency specializing in web development, UI/UX design, branding, marketing strategy, and digital transformation. Virtuo Edge is particularly strong in digital marketing, SEO, social media strategy, and content creation.

VIRTUO EDGE Information:
${siteContent}

Available Services:
${serviceDescriptions}

Portfolio & Projects:
${portfolioInfo}

About the Company:
${aboutUs}

Key Marketing Expertise:
- SEO and search engine optimization
- Social media strategy and paid ads management
- Content marketing and copywriting
- Conversion rate optimization
- Brand strategy and positioning
- Digital marketing strategy and analytics

Guidelines:
1. Only provide information based on the knowledge provided above
2. Be helpful, professional, and conversational
3. Highlight Virtuo Edge's marketing expertise when relevant - this is a core specialization
4. When discussing digital transformation, emphasize the strategic and marketing components
5. If asked about marketing, SEO, social media, or content - provide detailed insights since this is our specialty
6. If asked about something not in your knowledge base, politely explain that and offer to redirect them to contact Virtuo Edge
7. Encourage users to reach out for consultations or more details
8. Be enthusiastic about Virtuo Edge's services and capabilities
9. When appropriate, mention relevant services that might help the user achieve their business goals
10. Always maintain a professional and friendly tone
11. Position Virtuo Edge as a strategic partner, not just a vendor`;

// Initialize Generative AI with API key
const initializeGenAI = () => {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  
  if (!apiKey) {
    throw new Error('GOOGLE_AI_API_KEY environment variable is required. Get it from https://aistudio.google.com/app/apikey');
  }

  return new GoogleGenerativeAI(apiKey);
};

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No messages provided' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Generative AI
    const genAI = initializeGenAI();
    
    // Get the generative model
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash-lite-preview-09-2025',
      systemInstruction: systemPrompt,
    });

    // Convert messages to Generative AI format
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    // Create the chat session
    const chat = model.startChat({
      history: formattedMessages.slice(0, -1),
    });

    // Send the last message and get streaming response
    const lastMessage = formattedMessages[formattedMessages.length - 1].parts[0].text;
    const response = await chat.sendMessageStream(lastMessage);

    // Create a proper ReadableStream for the response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          // response.stream is an async iterable
          for await (const chunk of response.stream) {
            // Get text from the chunk - it might be a method or property
            const text = typeof chunk.text === 'function' ? chunk.text() : chunk.text;
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process your request. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
