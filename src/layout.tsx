import Header from '@/(components)/header';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import './globals.css'

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

 
  return (
    <html lang={locale}>
      <body>
          <Header/>
          {children}

      </body>
    </html>
  );
}