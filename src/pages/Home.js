import React from 'react';
import {Link} from 'react-router-dom'
//components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Footer from '../components/Footer'
const Home = () => {
    return (
      <React.Fragment>
        <Hero>
          <Banner title="Giggle Sneaks" subtitle="Best Sneaker website in Myanmar">
            <Link to="/sneakers" className="btn-primary">
              Search Sneakers
            </Link>
          </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        <Footer/>
      </React.Fragment>
    );
}

export default Home;
