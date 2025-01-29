import './open-trading-account-footnotes.scss';

import { Tx } from '@react-features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

const bem = buildBem('open-trading-account-footnotes');

export default function OpenTradingAccountFootnotes(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <p>
          *
          <Tx>footnotes_page_forexOpenAccount2</Tx>
        </p>
        <p>
          **
          <Tx>footnotes_page_forexOpenAccount3</Tx>
        </p>
      </div>
    </section>
  );
}
