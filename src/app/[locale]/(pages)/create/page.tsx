import React from 'react'
import Createpage from "./Createpage";
import { useTranslations } from 'next-intl';

export default function page() {
  const e = useTranslations('createpage');
  const c = useTranslations('catogry');

  return (
    < >
      <Createpage
        mens={c('Mens')}
        women={c('womens')}
        baby={c('babys')}
        shoes={c('shoes')}
        dir={e('dir')}
        ProductType={e('ProductType')}
        ProductDetails={e('ProductDetails')}
        nameAr={e('nameAr')}
        nameEn={e('nameEn')}
        barcode={e('barcode')}
        price={e('price')}
        descriptionAr={e('descriptionAr')}
        descriptionEn={e('descriptionEn')}
        sizes={e('sizes')}
        cloros={e('cloros')}
        files={e('files')}
      />
    </>
  )
}
