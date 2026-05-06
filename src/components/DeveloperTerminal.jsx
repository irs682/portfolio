import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const DeveloperTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to IrshadOS v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';

      switch (cmd) {
        case 'help':
          response = 'Available commands: whoami, skills, projects, contact, clear';
          break;
        case 'whoami':
          response = portfolioData.personal.bio;
          break;
        case 'skills':
          response = portfolioData.skills.map(s => s.name).join(', ');
          break;
        case 'projects':
          response = portfolioData.projects.map(p => p.title).join(' | ');
          break;
        case 'contact':
          response = `Email: ${portfolioData.personal.contact.email} | GitHub: ${portfolioData.personal.contact.github}`;
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          break;
        default:
          response = `Command not found: ${cmd}. Type "help" for a list of commands.`;
      }

      const newHistory = [...history, { type: 'user', text: `visitor@irshad.ai:~$ ${input}` }];
      if (response) {
        newHistory.push({ type: 'system', text: response });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto mt-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117] font-mono text-sm"
    >
      {/* Terminal Header */}
      <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2 text-gray-400">
          <TerminalIcon size={16} />
          <span>visitor@irshad.ai</span>
        </div>
        <div className="flex items-center gap-3">
          <Minus size={14} className="text-gray-500 hover:text-white cursor-pointer" />
          <Square size={12} className="text-gray-500 hover:text-white cursor-pointer" />
          <X size={16} className="text-gray-500 hover:text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto text-gray-300 custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className={`mb-2 ${line.type === 'user' ? 'text-primary-400' : 'text-gray-300'}`}>
            {line.text}
          </div>
        ))}
        
        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-400">visitor@irshad.ai:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
};

export default DeveloperTerminal;
