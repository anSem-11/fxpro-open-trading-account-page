import './open-trading-account-why.scss';

import { Tx } from '@react-features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('open-trading-account-why');

const LIST_ITEMS = [
  'page_forexOpenAccount_sectionBroker_option1',
  'page_forexOpenAccount_sectionBroker_option2',
  'page_forexOpenAccount_sectionBroker_option6',
  'page_forexOpenAccount_sectionBroker_option4',
  'page_forexOpenAccount_sectionBroker_option5',
  'page_forexOpenAccount_sectionBroker_option3',
];

export default function OpenTradingAccountWhy(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <div className={bem('wrapper')}>
          <div className={bem('img-wrapper')}>
            <div className={bem('img-container')}>
              <img
                alt=""
                className={bem('circle-label')}
                src="https://direct-website.azureedge.net/assets/img/pages/open-trading-account/why/circle-vector.svg"
              />
            </div>
          </div>
          <div className={bem('text-blocks')}>
            <h2 className={bem('subtitle')}><Tx>forex-open-account-broker-title</Tx></h2>
            <p className={bem('description')}><Tx>forex-open-account-broker-text02</Tx></p>
            <p className={bem('info')}><Tx>forex-open-account-broker-text01</Tx></p>
          </div>
        </div>
        <ul className={bem('list')}>
          {LIST_ITEMS.map((item, index) => (
            <li
              key={index}
              className={bem('item')}
            >
              <p><Tx>{item}</Tx></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
