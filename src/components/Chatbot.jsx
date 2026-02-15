import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import avatarImage from '../assets/ayisha-wave.webp';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm Ayisha. What is your name?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [step, setStep] = useState(0); // 0: Name, 1: Requirement, 2: Contact, 3: End
    const [userData, setUserData] = useState({ name: '', requirement: '', contact: '' });
    const [isSending, setIsSending] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasOpened) {
                setIsOpen(true);
                setHasOpened(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [hasOpened]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);

        const currentInput = input;
        setInput('');

        // Immediate actions for specific steps
        if (step === 2) {
            const finalData = { ...userData, contact: currentInput };
            setUserData(finalData); // Ensure state is updated, though we use finalData directly below
            setIsSending(true);

            // EmailJS Configuration
            const serviceID = 'service_n8ylyms';
            const templateID = 'template_u1ax831';
            const publicKey = 'b96CywPUSDN7lyG46';

            const templateParams = {
                from_name: finalData.name,
                message: `Requirement: ${finalData.requirement} | Contact: ${currentInput}`,
                requirement: finalData.requirement,
                contact_number: currentInput,
                to_email: 'ayishamuneer4342@gmail.com'
            };

            try {
                await emailjs.send(serviceID, templateID, templateParams, publicKey);

                // Success feedback embedded in bot conversation
                setTimeout(() => {
                    setMessages(prev => [...prev, { text: "Details sent successfully to my email!", sender: 'bot' }]);
                }, 500);

            } catch (error) {
                console.error('FAILED...', error);
                const errorMessage = error.text || JSON.stringify(error) || "Unknown Error";
                setTimeout(() => {
                    setMessages(prev => [...prev, { text: `Error sending email: ${errorMessage}. Please check your keys or template.`, sender: 'bot' }]);
                }, 500);
            } finally {
                setIsSending(false);
            }
        }

        // Process logic based on current step
        setTimeout(() => {
            let botReply = { text: '', sender: 'bot' };
            let nextStep = step;

            if (step === 0) {
                setUserData(prev => ({ ...prev, name: currentInput }));
                botReply.text = `Nice to meet you, ${currentInput}! What specific services or requirements are you looking for?`;
                nextStep = 1;
            } else if (step === 1) {
                setUserData(prev => ({ ...prev, requirement: currentInput }));
                botReply.text = "Got it. And how can I contact you? (Email or Phone Number)";
                nextStep = 2;
            } else if (step === 2) {
                // Determine reply based on sending status is handled above or generically here
                botReply.text = "Thank you! I'm sending these details to my inbox...";

                // Add follow-up messages after a slight delay for better UX
                setTimeout(() => {
                    setMessages(prev => [
                        ...prev,
                        { text: "In the meantime, you can reach me at:", sender: 'bot' },
                        { text: "WhatsApp: +971 54 349 1544", sender: 'bot' },
                        { text: "Email: marketing@ayishamuneer.com", sender: 'bot' },
                        { text: "Is there anything else I can help you with?", sender: 'bot' }
                    ]);
                }, 1500);

                nextStep = 3; // Keep input open
            } else {
                // Generic response for subsequent messages
                botReply.text = "Thanks! I'll get back to you as soon as possible via the contact details you provided.";
            }

            // Avoid duplicating messages if we handled them in the async block, 
            // but here we want to show the immediate flow confirmation
            if (step < 2 || step >= 3) {
                setMessages(prev => [...prev, botReply]);
            } else if (step === 2) {
                // For step 2, we let the async handler communicate success/fail, 
                // but we show the immediate "Thank you" confirmation.
                setMessages(prev => [...prev, botReply]);
            }

            setStep(nextStep);
        }, 500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl w-[450px] mb-6 overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out transform origin-bottom-right flex flex-col max-h-[600px]">
                    {/* Header */}
                    <div className="bg-[#effae6] p-4 flex items-center justify-between border-b border-[#3f6212]/10 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <img src={avatarImage} alt="Ayishu" width="56" height="56" className="w-full h-full object-cover" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#3f6212]">Ayisha</h3>
                                <p className="text-xs text-green-600">Online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="h-[450px] p-5 overflow-y-auto bg-gray-50 flex flex-col gap-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                {msg.sender === 'bot' && (
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 shrink-0 self-start">
                                        <img src={avatarImage} alt="Ayisha Avatar" width="40" height="40" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className={`p-3 rounded-xl max-w-[85%] shadow-sm border border-gray-100 text-sm ${msg.sender === 'user'
                                    ? 'bg-[#3f6212] text-white rounded-tr-none'
                                    : 'bg-white text-gray-800 rounded-tl-none'
                                    }`}>
                                    <p>{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-[#3f6212] transition-colors">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button
                                onClick={handleSend}
                                className="text-[#3f6212] transition-colors hover:text-[#2d460d]"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className="group relative flex items-center justify-center w-20 h-20 bg-[#3f6212] text-white rounded-full shadow-lg hover:bg-[#2d460d] transition-all duration-300 hover:scale-105"
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                        <img src={avatarImage} alt="Chat" width="80" height="80" className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Notification Badge - visible when closed and hasn't been engaged */}
                {!hasOpened && !isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
