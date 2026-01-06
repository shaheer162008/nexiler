'use client';

import { useState } from 'react';
import AIChat from '@/components/AIChat';

export default function ChatbotWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      <AIChat 
        isOpen={isChatOpen} 
        onClose={handleCloseChat}
        onOpen={handleOpenChat}
      />
    </>
  );
}
