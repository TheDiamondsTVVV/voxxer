'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">Voxxer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition">
              Özellikler
            </Link>
            <Link href="#community" className="text-gray-300 hover:text-white transition">
              Topluluk
            </Link>
            <Link href="#updates" className="text-gray-300 hover:text-white transition">
              Güncellemeler
            </Link>
            <Link href="#support" className="text-gray-300 hover:text-white transition">
              Destek
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Giriş Yap</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Kayıt Ol</Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                Özellikler
              </Link>
              <Link
                href="#community"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                Topluluk
              </Link>
              <Link
                href="#updates"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                Güncellemeler
              </Link>
              <Link
                href="#support"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                Destek
              </Link>
              <div className="pt-4 flex flex-col space-y-2">
                <Button variant="ghost" className="w-full">
                  Giriş Yap
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Kayıt Ol
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}