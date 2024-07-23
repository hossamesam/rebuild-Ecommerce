import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/[locale]/(components)/header';
import Popover from './(components)/Popover';
import { useTranslations } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const t = useTranslations('Navigation');
  const c = useTranslations('catogry');
  const [Mens, womens] = [String(c('Mens')), String(c('womens'))]
  return (
    <html lang={locale} dir='rtl'>
      <body className={inter.className} >
        <Header
          signIn={t('signIn')}
          ShoppingCar={t('ShoppingCar')}
          mens={String(c('Mens'))}
          women={String(c('womens'))}
          baby={String(c('Mens'))}
          shoes={String(c('shoes'))}
        />
        <Popover
          menu={String(t('menu'))}
          mens={String(c('Mens'))}
          women={String(c('womens'))}
          baby={String(c('Mens'))}
          shoes={String(c('shoes'))}
        />
        {children}
      </body>
    </html>
  );
}