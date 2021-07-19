import React from 'react';
import StillIn from '../components/StillIn';
import TopHeader from '../components/TopHeader';
import HeaderBackground from '../assets/images/background3.jpg';

function News() {
    return (
        <>
            <TopHeader content="News and Events" image={HeaderBackground}  />

            <StillIn />
        </>
    )
}

export default News
