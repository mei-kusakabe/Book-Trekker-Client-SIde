import React from 'react';
import { Link } from 'react-router-dom';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Categories from '../Categories/Categories';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;