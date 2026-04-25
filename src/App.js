// import the css file for styling
import './App.css';

// import navigation bar component
import NavBar from './components/NavBar';

//import the pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

//import the scroll to section component
import ScrollToSection from './components/ScrollToSection';

// You will need to import the following for react-router to work
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function SinglePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <NavBar />
      <ScrollToSection />
      <Home />
      <About />
      <Contact />

      <button className='back-to-top' onClick={scrollToTop}>
        ↑ Top
      </button>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/** Routes will be your canvas to display different elements
           * path ->  URL address to match
           * element -> the react component to show
           */}
          <Route path='/' element={<SinglePage />} />
          <Route path='/about' element={<SinglePage />} />
          <Route path='/contact' element={<SinglePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
