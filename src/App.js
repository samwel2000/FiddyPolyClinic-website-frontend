import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import News from './pages/News';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import { BiArrowToTop } from 'react-icons/bi';
import { BackTop } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>

        <main>
          <Switch>

            <Route exact path='/contact-us/' component={ContactUs} />
            <Route exact path='/news/' component={News} />
            <Route exact path='/noticeboard/' component={Jobs} />
            <Route exact path='/about-us/' component={About} />
            <Route exact path="/" component={Home} />
            <Route path="*">
              <Redirect to="/" />
            </Route>

          </Switch>
        </main>

        <BackTop>
          <div className="backtop">
            <p><BiArrowToTop /></p>
          </div>
        </BackTop>

        <footer>
          <Footer />
        </footer>

      </Router>
    </>
  );
}

export default App;
