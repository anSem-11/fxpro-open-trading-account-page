import './open-trading-account-info.scss';

import { Tx } from '@react-features/translation/tx.component';
import { UiButton } from '@react-root/ui/button/ui-button.component';
import UiDirectLink from '@react-root/ui/ui-direct-link/ui-direct-link.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

const bem = buildBem('open-trading-account-info');

type FaqItem = {
  href: string;
  text: string;
};

const FAQ_ITEMS: FaqItem[][] = [
  [
    {
      href: '/help-section/faq/accounts/how-do-i-open-a-live-trading-account',
      text: 'faq_sectionFeaturedArticles_question1',
    },
    {
      href: '/help-section/faq/accounts/can-i-open-more-than-one-account-with-fxpro',
      text: 'page_forexOpenAccount_sectionFaq_item4',
    },
  ],
  [
    {
      href: '/help-section/faq/verification/what-documents-do-you-require',
      text: 'page_forexOpenAccount_sectionFaq_item2',
    },
    {
      href: '/help-section/faq/accounts/what-currencies-can-i-open-an-account-in',
      text: 'page_forexOpenAccount_sectionFaq_item5',
    },
  ],
  [
    {
      href: '/help-section/faq/verification/how-to-verify-your-profile',
      text: 'page_forexOpenAccount_sectionFaq_item3',
    },
    {
      href: '/help-section/faq/accounts/what-account-types-do-you-offer',
      text: 'page_forexOpenAccount_sectionFaq_item6',
    },
  ],
];

export default function OpenTradingAccountInfo(): JSX.Element {
  return (
    <section className={bem()}>
      <ul className={bem('list')}>
        {FAQ_ITEMS.map((group, index) => (
          <li
            key={index}
            className={bem('item')}
          >
            {group.map((item, idx) => (
              <div
                key={idx}
                className={bem('link-wrapper')}
              >
                <a href={item.href}><Tx>{item.text}</Tx></a>
              </div>
            ))}
          </li>
        ))}
      </ul>

      <div className={bem('container')}>
        <h2 className={bem('title')}><Tx>page_forexOpenAccount_sectionOpen_title</Tx></h2>
        <UiDirectLink
          className={bem('button')}
          dataTestId="about-achievements"
          mode="register"
        >
          <UiButton size="l"><Tx>page_promo-forex_cta_button</Tx></UiButton>
        </UiDirectLink>
      </div>
    </section>
  );
}
