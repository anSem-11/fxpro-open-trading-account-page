import './open-trading-account-awards.scss';

import { Tx } from '@react-features/translation/tx.component';
import { Awards } from '@react-root/shared/form/services/awards.constant';
import UiAnimatedInfoBox from '@react-root/ui/animated-info-box/ui-animated-info-box.component';
import UiAwards from '@react-root/ui/ui-awards/ui-awards.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('open-trading-account-awards');

const selectedAwards = [
  Awards.find(award => award.title === 'page_awards_sectionAwards_awardTitle_5StarApp' && award.year === 2024),
  Awards.find(award => award.title === 'page_aboutAwards_sectionAwards_awardTabContentTitle28' && award.year === 2023),
  Awards.find(award => award.title === 'page_aboutAwards_sectionAwards_awardTabContentTitle29' && award.year === 2022),
].filter(Boolean).map(award => ({
  ...award,
  sizes: award?.title === 'page_awards_sectionAwards_awardTitle41'
    ? '98px'
    : award?.title === 'page_aboutAwards_sectionAwards_awardTabContentTitle28'
      ? '106px'
      : '98px',
}));

export default function OpenTradingAccountAwards(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <p className={bem('description')}>
          <Tx>aboutUs_historyTitle2</Tx>
        </p>
        <UiAnimatedInfoBox
          descriptionKey="page_forexOpenAccount_sectionAwards_text"
          titleKey="aboutUs_platformsTitle"
        />
        <UiAwards awards={selectedAwards} />
      </div>
    </section>
  );
}
