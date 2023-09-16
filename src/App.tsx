import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<>404 - Not Found </>} />
    </Routes>
  );
};

export default App;
