let chatbotReadyPromise = null;

export function ensureChatbotInit() {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }
  if (typeof window.openAIChat === 'function') {
    return Promise.resolve();
  }
  if (!chatbotReadyPromise) {
    chatbotReadyPromise = Promise.all([
      import('./chatbot.css'),
      import('./chatbot.js')
    ]).then(([, mod]) => {
      if (typeof mod.initChatbot === 'function' && typeof window.openAIChat !== 'function') {
        mod.initChatbot();
      }
    });
  }
  return chatbotReadyPromise;
}

