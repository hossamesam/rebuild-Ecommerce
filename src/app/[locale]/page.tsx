import { useTranslations } from "next-intl";
import Loginui from "./(components)/Loginui";
import Popover2 from "./(components)/popover2";

export default function Home() {
  const x = useTranslations("IndexPage");
  const t = useTranslations('Navigation');
  const c = useTranslations('catogry');
  return <>
    <Popover2 menu={String(t('menu'))}
      mens={String(c('Mens'))}
      women={String(c('womens'))}
      baby={String(c('babys'))}
      shoes={String(c('shoes'))} home={''} signIn={''} ShoppingCar={''} local={''} signup={''} descriptionsignUp={''} Login={''} descriptionLogin={''} />
  </>
}
