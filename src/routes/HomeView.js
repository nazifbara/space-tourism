import backgroundImg from '../assets/home/background-home-desktop.jpg';
import { ViewWrapper } from '../components';

const HomeView = () => (
  <ViewWrapper bgImg={backgroundImg}>I'm home</ViewWrapper>
);

const route = {
  name: 'HomeView',
  props: {
    path: '/',
    element: <HomeView />,
  },
};

export default route;
