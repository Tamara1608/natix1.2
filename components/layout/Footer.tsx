'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, FacebookIcon, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-mint mb-6">NATIX</h3>
            <p className="mb-6 text-gray-400">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mint transition-colors">
                <FacebookIcon size={20} />
              </Link>
              <Link href="https://www.instagram.com/natix_doo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mint transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mint transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-mint transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-mint transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-mint transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-mint transition-colors">
                  {t('nav.about')} <span className="text-mint">NATIX</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-mint transition-colors">
                  {t('footer.installation')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-mint transition-colors">
                  {t('footer.consultation')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-mint transition-colors">
                  {t('footer.maintenance')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-mint transition-colors">
                  {t('footer.support')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-mint" />
                <span>+382 69 010 162</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-mint" />
                <span>natixoffice@gmail.com </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin size={20} className="text-mint" />
                <span>Podgorica, MONTENEGRO</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {currentYear} NATIX. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 