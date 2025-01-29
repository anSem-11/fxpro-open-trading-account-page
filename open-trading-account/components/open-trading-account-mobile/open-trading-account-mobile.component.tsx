import './open-trading-account-mobile.scss';

import { Tx } from '@react-features/translation/tx.component';
import UiRatingSection from '@react-root/ui/ui-rating-section/ui-rating-section.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('open-trading-account-mobile');

export default function OpenTradingAccountMobile(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <div className={bem('img')} />
        <div className={bem('wrapper')}>
          <UiRatingSection
            downloadInfoText="trading-tools-app-trusted-info"
            rating={4.7}
            ratingText="trading-tools-app-trusted-rating"
            showQrCode={false}
            text="page_forexOpenAccount_sectionRegister_text"
            title="page_forexOpenAccount_sectionRegister_title"
            totalDownloads="15M"
          />
          <p className={bem('description')}><Tx>page_forexOpenAccount_sectionRegister_descr</Tx></p>
        </div>
      </div>
    </section>
  );
}
