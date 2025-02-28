'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/#home', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/#contact', label: 'Contact' },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      // If we're not on the home page, navigate to home first
      if (pathname !== '/') {
        router.push('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're already on the home page, just scroll
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For non-hash routes, just navigate normally
      router.push(href);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2" onClick={(e) => handleNavigation(e, '/#home')}>
            <span className={cn(
              "text-2xl font-bold transition-colors",
              isScrolled ? "text-black" : "text-mint"
            )}>NATIX</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu.Root className="hidden lg:flex">
            <NavigationMenu.List className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  <NavigationMenu.Link
                    asChild
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-mint',
                      isScrolled ? 'text-gray-700' : 'text-white'
                    )}
                  >
                    <Link href={item.href} onClick={(e) => handleNavigation(e, item.href)}>
                      {item.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-mint transition-colors"
                      onClick={(e) => handleNavigation(e, item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header; 