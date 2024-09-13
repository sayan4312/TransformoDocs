import './App.css';
import { SmoothScroll, LayoutProvider } from './components/common/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form, Login, MainPage,Upload } from './pages/index';

function App() {
  return (
    <SmoothScroll>
      <Router>
        <LayoutProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/form' element={<Form />} />
            <Route path='/upload' element={<Upload />} />
            
          </Routes>
        </LayoutProvider>
      </Router>
    </SmoothScroll>
  );
}

export default App;
