import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const demoResponses: Record<string, string> = {
  default: "Hi there! 👋 I'm Tengri AI assistant. I can help you learn about our cart recovery solution. Try asking about pricing, how it works, or our results!",
  pricing: "We have 3 plans:\n\n• **Starter** — $49/mo (up to 500 carts)\n• **Growth** — $149/mo (up to 5,000 carts) ⭐ Most popular\n• **Enterprise** — Custom pricing\n\nAll plans include a **30-day free trial**. Want me to help you pick the right one?",
  how: "It's super simple — just 3 steps:\n\n1️⃣ **Connect** your Shopify store (1-click, <60 sec)\n2️⃣ **AI learns** your products, policies & brand voice\n3️⃣ **Start recovering** revenue automatically 24/7\n\nNo developers needed!",
  results: "Our merchants see amazing results:\n\n📈 **+15% average revenue increase**\n⏰ **24/7 automated** operation\n⚡ **<5 min** setup time\n💰 **$47K recovered** in first month (top case)\n\nWant to calculate your potential ROI?",
  roi: "Great question! On average, **70% of carts are abandoned**. With Tengri, we recover about **15% of those lost sales**.\n\nFor a store doing $50K/mo, that's roughly **$5,250/mo** or **$63K/year** in recovered revenue! 🚀\n\nTry our ROI calculator on the page above ☝️",
  security: "Your data security is our top priority:\n\n🔒 **AES-256 encryption** at rest & in transit\n✅ **SOC 2 Type II** compliant\n🚫 Data is **never shared** with third parties\n🇪🇺 **GDPR** compliant\n\nWe take security seriously!",
  languages: "Tengri supports **40+ languages** and automatically detects your customer's preferred language.\n\nTop supported: English, Spanish, French, German, Chinese, Japanese, Arabic, Portuguese, and many more! 🌍",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('pric') || lower.includes('cost') || lower.includes('plan')) return demoResponses.pricing;
  if (lower.includes('how') || lower.includes('work') || lower.includes('setup') || lower.includes('start')) return demoResponses.how;
  if (lower.includes('result') || lower.includes('case') || lower.includes('proof')) return demoResponses.results;
  if (lower.includes('roi') || lower.includes('calculator') || lower.includes('revenue') || lower.includes('money')) return demoResponses.roi;
  if (lower.includes('secur') || lower.includes('safe') || lower.includes('data') || lower.includes('privacy')) return demoResponses.security;
  if (lower.includes('language') || lower.includes('lang')) return demoResponses.languages;
  return "That's a great question! I'd love to help you with that. For detailed info, our team can give you a personalized demo — just fill out the form in the Pricing section above! 😊\n\nOr ask me about **pricing**, **how it works**, **results**, **ROI**, **security**, or **languages**.";
}

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: demoResponses.default },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: getResponse(userMsg) }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-20 z-50 w-14 h-14 rounded-full gradient-bg text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform glow-primary"
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-success animate-pulse-glow" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] glass-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border bg-card/80">
              <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary-foreground">AI</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-foreground">Tengri AI Assistant</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  Online — Demo Mode
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === 'ai'
                        ? 'bg-secondary text-secondary-foreground rounded-bl-sm'
                        : 'gradient-bg text-primary-foreground rounded-br-sm'
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br/>')
                    }}
                  />
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick actions */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {['Pricing', 'How it works', 'Results', 'ROI'].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                    setTimeout(() => {
                      setMessages((prev) => [...prev, { role: 'user', text: q }]);
                      setTyping(true);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, { role: 'ai', text: getResponse(q) }]);
                        setTyping(false);
                      }, 800);
                    }, 50);
                    setInput('');
                  }}
                  className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <form
                onSubmit={(e) => { e.preventDefault(); send(); }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Tengri..."
                  className="flex-1 bg-secondary text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary border border-border"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl gradient-bg text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
