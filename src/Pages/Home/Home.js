import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;