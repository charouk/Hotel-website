import React from 'react';
import AboutUs from '../About/AboutUs';
import Hero from '../HomeSection/Hero'
import MostPopular from '../MostPopular/MostPopular';
import Destination from '../Destinations/Destination';
import Gallery from '../Gallery/Gallery';

export default function Home(){


    return(
        <>
          <Hero />
          <AboutUs />
          <MostPopular/>
          <Destination />
          <Gallery />

        </>
    )
}