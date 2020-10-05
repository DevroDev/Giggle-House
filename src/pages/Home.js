import React from 'react';
import {Link} from 'react-router-dom'
//components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
const Home = () => {
    return (
      <React.Fragment>
        <Hero>
          <Banner title="Hannah housing" subtitle="deluxe room starting at $299">
            <Link to="/rooms" className="btn-primary">
              Browse Rooms
            </Link>
          </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
      </React.Fragment>
    );
}

export default Home;
