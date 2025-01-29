import './open-trading-account.scss';

import { Main } from '@react-features/main/main.component';
import UiLiveSupportBanners from '@react-root/ui/live-support-banners/ui-live-support-banners.component';
import UiAchievements from '@react-root/ui/ui-achievements/ui-achievements.component';
import UiContact from '@react-root/ui/ui-contact/ui-contact.component';
import UiNews from '@react-root/ui/ui-news/ui-news.component';

import UiHero from '../../ui/hero/ui-hero.component';

import OpenTradingAccountAwards from './components/open-trading-account-awards/open-trading-account-awards.component';
import OpenTradingAccountFootnotes from './components/open-trading-account-footnotes/open-trading-account-footnotes.component';
import OpenTradingAccountHistory from './components/open-trading-account-history/open-trading-account-history.component';
import OpenTradingAccountInfo from './components/open-trading-account-info/open-trading-account-info.component';
import OpenTradingAccountMobile from './components/open-trading-account-mobile/open-trading-account-mobile.component';
import OpenTradingAccountSolution from './components/open-trading-account-solution/open-trading-account-solution.component';
import OpenTradingAccountWhy from './components/open-trading-account-why/open-trading-account-why.component';


export default function OpenTradingAccountPage(): JSX.Element {
  return (
    <Main>

      <UiHero
        descriptionKey="page_forexOpenAccount_hero_descr"
        modifier="open-trading-account"
        titleKey="page_forexOpenAccount_hero_title"
      />
      <OpenTradingAccountWhy />
      <OpenTradingAccountMobile />
      <UiNews />
      <OpenTradingAccountSolution />
      <UiAchievements />
      <OpenTradingAccountHistory />
      <OpenTradingAccountAwards />
      <OpenTradingAccountInfo />
      <UiContact />
      <UiLiveSupportBanners />
      <OpenTradingAccountFootnotes />
    </Main>
  );
}
