import { NextRequest, NextResponse } from 'next/server';
import { admindb } from '../../../../firebase/firebase-admin';

/**
 * API Endpoint: /api/setup-sample-data
 * 
 * Purpose: Initialize Firebase with sample data for testing
 * 
 * Usage:
 * 1. Go to: http://localhost:3000/api/setup-sample-data?password=YOUR_PASSWORD
 * 2. Replace YOUR_PASSWORD with your actual password (for security)
 * 3. Check Firebase Console to verify data was created
 * 
 * This endpoint:
 * ✓ Creates a sample blog post
 * ✓ Adds admin@virtuoedge.tech to newsletter subscribers
 * ✓ Includes timestamp and proper structure
 */

const SETUP_PASSWORD = 'virtuo-edge-setup-2026'; // Change this to your password

export async function GET(request: NextRequest) {
  try {
    // Extract password from query params
    const { searchParams } = new URL(request.url);
    const password = searchParams.get('password');

    // Security check
    if (!password || password !== SETUP_PASSWORD) {
      return NextResponse.json(
        { 
          error: 'Unauthorized - Invalid password',
          message: 'Usage: /api/setup-sample-data?password=YOUR_PASSWORD'
        },
        { status: 401 }
      );
    }

    console.log('🔧 Starting sample data setup...');

    // 1. Add sample blog post
    const blogData = {
      title: 'AI Automation: The Future of Business Efficiency',
      excerpt: 'Discover how AI automation is transforming modern businesses. From workflow optimization to predictive analytics, learn why companies like yours need automation to stay competitive in 2026.',
      content: `<div class="blog-content">
        <h2>AI Automation: The Future of Business Efficiency</h2>
        <p>In 2026, businesses face unprecedented competition. The companies winning are those that leverage artificial intelligence and automation to work smarter, not harder.</p>
        <h3>Why AI Automation Matters</h3>
        <p>Every day, your team spends hours on repetitive tasks like processing invoices, managing emails, updating spreadsheets, and data entry. These are exactly the tasks AI excels at.</p>
        <h3>Real-World Results</h3>
        <p>One e-commerce client automated their order processing with AI. Result? 85% reduction in manual data entry and processing time cut from 2 hours to 15 minutes per day.</p>
        <h3>Getting Started</h3>
        <p>The automation journey typically follows: Audit → Design → Build → Train → Optimize</p>
      </div>`,
      category: 'AI Automation',
      date: new Date().toISOString().split('T')[0],
      featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800',
      status: 'published',
      createdAt: new Date().toISOString(),
    };

    const blogRef = await admindb.collection('blogs').add(blogData);
    console.log('✅ Blog created:', blogRef.id);

    // 2. Add admin email to newsletter
    const newsletterData = {
      email: 'admin@virtuoedge.tech',
      subscribedAt: new Date(),
      source: 'setup-script',
    };

    const newsletterRef = await admindb.collection('newsletterEmails').add(newsletterData);
    console.log('✅ Newsletter subscription added:', newsletterRef.id);

    // 3. Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Sample data created successfully! ✅',
        data: {
          blog: {
            id: blogRef.id,
            title: blogData.title,
            category: blogData.category,
            status: blogData.status,
          },
          newsletter: {
            id: newsletterRef.id,
            email: newsletterData.email,
            subscribedAt: newsletterData.subscribedAt,
          },
        },
        next_steps: [
          '1. Check Firebase Console → Firestore → blogs collection',
          '2. Check Firebase Console → Firestore → newsletterEmails collection',
          '3. Visit http://localhost:3000/blogs to see the sample blog',
          '4. Test newsletter with different email at http://localhost:3000 (bottom newsletter form)',
        ],
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Setup error:', error);
    return NextResponse.json(
      {
        error: 'Setup failed',
        message: error.message || 'Unknown error occurred',
        details: error,
      },
      { status: 500 }
    );
  }
}

/**
 * POST method for additional setup if needed
 * Currently same as GET, but kept for flexibility
 */
export async function POST(request: NextRequest) {
  return GET(request);
}
