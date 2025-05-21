'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/#home', label: t('nav.home') },
    { href: '/products', label: t('nav.products') },
    { href: '/services', label: t('nav.services') },
    { href: '/#contact', label: t('nav.contact') },
    { href: '/about', label: (<>{t('nav.about')} <span className="text-mint">NATIX</span></>)},
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    } else {
      router.push(href);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-black/70 backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2" onClick={(e) => handleNavigation(e, '/#home')}>
            <span className={cn(
              "text-xl lg:text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-mint" : "text-mint"
            )}>NATIX</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu.Root className="hidden lg:flex items-center">
            <NavigationMenu.List className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  <NavigationMenu.Link
                    asChild
                    className={cn(
                      'text-xs lg:text-sm font-medium transition-colors duration-300 hover:text-mint',
                      'text-white'
                    )}
                  >
                    <Link href={item.href} onClick={(e) => handleNavigation(e, item.href)}>
                      {item.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
            <div className="ml-8">
              <LanguageSwitcher />
            </div>
          </NavigationMenu.Root>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn(
              "lg:hidden absolute top-20 left-0 right-0 transition-all duration-500",
              isScrolled
                ? 'bg-black/70 backdrop-blur-sm'
                : 'bg-black/70 backdrop-blur-sm'
            )}
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-white text-sm hover:text-mint transition-colors duration-300"
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