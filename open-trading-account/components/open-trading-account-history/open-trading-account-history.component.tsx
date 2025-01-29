import './open-trading-account-history.scss';

import { Tx } from '@react-features/translation/tx.component';
import { UiAnimateTextReveal } from '@react-root/ui/animation/ui-animate-text-reveal.component';
import UiTimeline from '@react-root/ui/ui-timeline/ui-timeline.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleText } from '@fx-project-shared/features/style/style-text/style-text.util';


const bem = buildBem('open-trading-account-history');

export default function OpenTradingAccountHistory(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <div className={bem('title-wrapper')}>
          <UiAnimateTextReveal config={{ dotPosition: 'right' }}>
            <h2 className={styleText({
              size: '4xl',
              fontWeight: '600',
              lineHeight: '120',
            })}
            >
              <Tx>page_forexOpenAccount_sectionSolutions_title</Tx>
            </h2>
          </UiAnimateTextReveal>
        </div>
      </div>
      <UiTimeline />
    </section>
  );
}
