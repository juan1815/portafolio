import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

interface AIChatbotProps {
  language: Language;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: language === 'en' 
        ? "Hello! I am Viernes, Sebastian's AI Assistant. Ask me anything about his projects, skills, or experience." 
        : "¡Hola! Soy Viernes, el asistente IA de Sebastian. Pregúntame sobre sus proyectos, habilidades o experiencia.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Prepare history for Gemini
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(userMsg.text, history);

      const botMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        role: 'model',
        text: "System Error: Connection disrupted.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-cyber-primary rounded-full shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:bg-white transition-all duration-300 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageSquare className="h-6 w-6 text-cyber-black" />
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-[500px] glass-panel rounded-2xl border border-cyber-primary/30 flex flex-col shadow-2xl overflow-hidden animate-pulse-slow-border">
          {/* Header */}
          <div className="p-4 bg-cyber-primary/10 border-b border-cyber-primary/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-cyber-primary" />
              <span className="font-bold text-white tracking-wider">NEXUS AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-cyber-secondary/20 text-white border border-cyber-secondary/50 rounded-br-none' 
                      : 'bg-cyber-dark text-gray-200 border border-gray-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-cyber-dark p-3 rounded-lg border border-gray-700 rounded-bl-none flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-cyber-primary" />
                    <span className="text-xs text-gray-400">Processing...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-cyber-black/80 border-t border-cyber-primary/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={language === 'en' ? "Ask about my skills..." : "Pregunta sobre mis habilidades..."}
                className="flex-1 bg-gray-900 border border-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-cyber-primary"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-cyber-primary rounded-lg text-cyber-black hover:bg-white transition-colors disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;