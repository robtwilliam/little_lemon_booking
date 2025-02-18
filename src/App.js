import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Nav from './components/layout/Nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
