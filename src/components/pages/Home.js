import React from 'react';
import Header from './homePagesComponents/Header';
import FeatureItem from './homePagesComponents/FeatureItem';
import './Home.css';

const Home = () => {
  return (
    <div id="main-home-page">
      <Header />
      <section className="header-bottom-content-aria">
        <div className="container">
          <div className="row pr-4 mr-4">
            <FeatureItem
              icon="query_builder"
              title="Opening Hours"
              extraClass="home-primary"
              subTitle="Lorem ipsum dolor sit amet consectetur adipisicing." />
            <FeatureItem
              extraClass="home-location"
              icon="location_on"
              title="Visit Our Location"
              subTitle="Lorem ipsum dolor sit amet consectetur adipisicing." />
            <FeatureItem
              extraClass="home-primary"
              icon="add_ic_call"
              title="Contact Us Now"
              subTitle="Lorem ipsum dolor sit amet consectetur adipisicing." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;