import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Headers from "./header";
export default function Hero() {
  const t = useTranslations('Navigation');

  return (
    <header className='p-4 bg-blue-700 h-24'>
      <Link href='/'>{t('signIn')}</Link>
    </header>
  );
}