import bgImgDesktop from '../assets/home/background-home-desktop.jpg';
import bgImgTablet from '../assets/home/background-home-tablet.jpg';
import bgImgMobile from '../assets/home/background-home-mobile.jpg';

import { ViewWrapper } from '../components';

const HomeView = () => (
  <ViewWrapper
    bgImg={{ laptop: bgImgDesktop, mobile: bgImgMobile, tablet: bgImgTablet }}
  >
    I'm home
  </ViewWrapper>
);

const route = {
  name: 'HomeView',
  props: {
    path: '/',
    element: <HomeView />,
  },
};

export default route;
