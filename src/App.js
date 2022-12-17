import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Headers from './Components/Header';
import Footer from './Components/Footer.js';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import ContactUs from './Views/ContactUs';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>

      <Router>
        <Headers />

        <div className='p-3'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/about'>
              <About />
            </Route>

            <Route exact path='/contact-us'>
              <ContactUs />
            </Route>

            <Route exact path='/products/:id'>
              <Product />
            </Route>
          </Switch>
        </div>


        <Footer />
      </Router>



    </div>
  );
}

export default App;
