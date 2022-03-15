import { useState } from 'react';

import { motion } from 'framer-motion';

import { MenuIcon, ShareFileIcon } from '../icons';
import { Navigation } from '../Navigation';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between w-[min(1300px,100%-20px)] mx-auto">
      <button onClick={() => setIsOpen(true)} className="group">
        <MenuIcon className="w-10 group-hover:stroke-gray-700" />
      </button>
      <motion.div
        initial={false}
        animate={{
          position: 'fixed',
          top: isOpen ? '-0%' : '100%',
          transition: { type: 'tween' },
        }}
        className="z-50 fixed inset-0 h-screen bg-white"
      >
        <Navigation setIsOpen={setIsOpen} />
      </motion.div>
      <motion.button
        transition={{
          type: 'keyframes',
        }}
        whileHover={{
          scale: '0.95',
        }}
        whileTap={{
          scale: 1,
        }}
        className="flex items-center gap-1 text-white px-3 rounded-full bg-teal-400"
      >
        <span className="text-sm">Share Page</span>
        <ShareFileIcon className="w-4 stroke-white stroke-2" />
      </motion.button>
    </header>
  );
};
