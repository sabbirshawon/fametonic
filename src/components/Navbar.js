'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50 relative">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Fametonic Logo"
            width={130}
            height={40}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <Link href="#">About us</Link>
          <Link href="#">Contact</Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black px-6 py-6 flex flex-col space-y-4 text-white text-base shadow-lg z-40">
          <Link href="#">About us</Link>
          <Link href="#">Contact</Link>
        </div>
      )}
    </header>
  );
}
