import React from 'react';
import StillIn from '../components/StillIn';
import TopHeader from '../components/TopHeader';
import HeaderBackground from '../assets/images/background3.jpg';

function Jobs() {
    return (
        <>
            <TopHeader content="Jobs and Vacancies" image={HeaderBackground} />

            <StillIn />
        </>
    )
}

export default Jobs
