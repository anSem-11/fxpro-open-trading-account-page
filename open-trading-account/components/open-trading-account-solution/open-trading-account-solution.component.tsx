import './open-trading-account-solution.scss';

import { Tx } from '@react-features/translation/tx.component';
import { UiAnimateTextReveal } from '@react-root/ui/animation/ui-animate-text-reveal.component';
import { UiButton } from '@react-root/ui/button/ui-button.component';
import UiDirectLink from '@react-root/ui/ui-direct-link/ui-direct-link.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleSpacing } from '@fx-project-shared/features/style/style-spacing/style-spacing.util';
import { styleText } from '@fx-project-shared/features/style/style-text/style-text.util';


const bem = buildBem('open-trading-account-solution');

type CardInfo = {
  title: string;
  description: string;
  listItems: string[];
  button: string;
};

const CARDS: CardInfo[] = [
  {
    title: 'page_getStarted_solutionsSlider_title1',
    description: 'page_getStarted_solutionsSlider_panel1_subTitle',
    listItems: [
      'page_getStarted_solutionsSlider_panel1_listItem1',
      'page_getStarted_solutionsSlider_panel1_listItem2',
      'page_getStarted_solutionsSlider_panel1_listItem3',
    ],
    button: 'global_buttonRegisterNow',
  },
  {
    title: 'page_getStarted_solutionsSlider_title2',
    description: 'page_getStarted_solutionsSlider_description2',
    listItems: [
      'page_VIP_sectionAccounts_itemTitle1New',
      'page_VIP_sectionAccounts_itemTitle2New',
      'page_VIP_sectionAccounts_itemTitle3New',
    ],
    button: 'page_getStarted_openVVIPAccount',
  },
];

const renderCard = ({
  title,
  description,
  listItems,
  button,
}: CardInfo, key: number) => (
  <div
    key={key}
    className={bem('card')}
  >
    <div>
      <h3 className={`${styleText({
        size: '3xl',
        fontWeight: '600',
      })} ${styleSpacing({ mb: '2xl' })}`}
      >
        <Tx>{title}</Tx>
      </h3>
      <p className={`${styleText({ size: 'm' })} ${styleSpacing({ mb: '2xl' })}`}>
        <Tx>{description}</Tx>
      </p>
      <ul className={bem('list')}>
        {listItems.map((item, index) => (
          <li key={index}><Tx>{item}</Tx></li>
        ))}
      </ul>
    </div>
    <UiDirectLink
      className={bem('button')}
      dataTestId="about-achievements"
      mode="register"
    >
      <UiButton size="l"><Tx>{button}</Tx></UiButton>
    </UiDirectLink>
  </div>
);

export default function OpenTradingAccountSolution(): JSX.Element {
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
        <div className={bem('cards-wrapper')}>
          {CARDS.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
