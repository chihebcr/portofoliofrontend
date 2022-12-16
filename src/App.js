
import './App.css';
import About from './components/about';
import Contact1 from './components/contact';
import Footer1 from './components/footer';
import Home from './components/home';
import Navbar1 from './components/nav';
import Service from './components/service';
import './responsive.css';

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Home/>
      <About/>
      <Service/>
      <Contact1/>
      <Footer1/>
      
    </div>
  );
}

export default App;
