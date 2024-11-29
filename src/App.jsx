import {Route,Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './Components/Login/LoginPage.jsx';
import TestPage from './Components/TestPage/TestPage.jsx';
import HomePage from './Components/HomePage/HomePage.jsx'
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/TestPage" element={<TestPage />} />
          <Route path="/HomePage" element={<HomePage />} />
      </Routes>
  );
}

export default App
