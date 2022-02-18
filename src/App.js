import { Routes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((r) => (
          <Route key={r.name} {...r.props} />
        ))}
      </Routes>
    </>
  );
};

export default App;
