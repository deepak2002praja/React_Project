import React from 'react';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './extend.css'; // Ensure this file exists and is correctly linked
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.js';
import AboutPage from './AboutPage.jsx';  // 👈 Make sure these are imported
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Careers from './Careers.jsx';
import Stream from './Stream.jsx';
import Industrylayout from './Industrylayout';
import Home from './App.js'; // You need a Home component
import Signup from './Signup';
import AdminPage from './AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <Router>
            <div></div>
            <ScrollToTop />
            <div className="App">
                <header className="App-header">
                    <Header />
                    <Navbar />

                    <Routes>
                        <Route path="/App" element={<Home />} />
                        <Route path="/AboutPage" element={<AboutPage />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Careers" element={<Careers />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>

                    <img src={logo} className="App-logo" alt="logo" />
                    <h3 className="industry-heading">
                        <b>Adapting & Accelerating with Industry 4.0</b>
                    </h3>
                    <p className="edge">
                        Harnessing cutting-edge technologies and innovative approaches, we cater to the dynamic demands of modern industries and have consistently remained at the forefront of technological advancement...
                        Harnessing cutting-edge technologies and innovative approaches, we cater to the dynamic demands of modern industries and have consistently remained at the forefront of technological advancement...
                        Harnessing cutting-edge technologies and innovative approaches, we cater to the dynamic demands of modern industries and have consistently remained at the forefront of technological advancement...
                        Harnessing cutting-edge technologies and innovative approaches, we cater to the dynamic demands of modern industries and have consistently remained at the forefront of technological advancement...
                        Harnessing cutting-edge technologies and innovative approaches, we cater to the dynamic demands of modern industries and have consistently remained at the forefront of technological advancement...Harnessing cutting-edge technologies and innovative approaches, we cater to the dynamic demands of modern industries and have consistently remained at the forefront of technological advancement...
                    </p>
                    <div>
                        <Stream />
                    </div>


                    <Industrylayout />
                    <Footer />
                </header>
            </div>
        </Router>
    );
}

export default App;
