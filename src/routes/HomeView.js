const HomeView = () => <h1>this is home</h1>;

const route = {
  name: 'HomeView',
  props: {
    path: '/',
    element: <HomeView />,
  },
};

export default route;
