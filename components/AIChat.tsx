
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { getShoppingAdvice } from '../geminiService';
import { PRODUCTS } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Namaste! I am your Singh Mart assistant. How can I help you find something special today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const context = JSON.stringify(PRODUCTS.map(p => ({ title: p.title, price: p.price, cat: p.category })));
    const botResponse = await getShoppingAdvice(userMsg, context);
    
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || "I'm sorry, I couldn't process that." }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col h-[500px] border border-gray-200 overflow-hidden">
          <div className="bg-orange-800 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <span className="font-semibold">Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-orange-100 text-orange-900' : 'bg-gray-100 text-gray-800'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400 italic">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-800"
            />
            <button 
              onClick={handleSend}
              className="bg-orange-800 text-white p-2 rounded-full hover:bg-orange-900"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-orange-800 text-white p-4 rounded-full shadow-lg hover:bg-orange-900 transition-all flex items-center space-x-2"
        >
          <MessageSquare size={24} />
          <span className="font-medium hidden md:inline">Ask AI</span>
        </button>
      )}
    </div>
  );
};

export default AIChat;
