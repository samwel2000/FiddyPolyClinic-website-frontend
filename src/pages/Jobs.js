import React from 'react';
import TopHeader from '../components/TopHeader';
import HeaderBackground from '../assets/images/background3.jpg';
import './Jobs.css';
import { JobsAndVacancies } from '../Data';
import { Link } from 'react-router-dom';

function Jobs() {
    return (
        <>
            <TopHeader content="Jobs and Vacancies" image={HeaderBackground} />

            <section className="pb-3 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filters">
                                <p>select a filter of your choice</p>
                                <ul>
                                    <li>Latest</li>
                                    <li>currently Active</li>
                                    <li>this month</li>
                                    <li>this week</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {JobsAndVacancies.length > 0 ? JobsAndVacancies.map(job => (
                                <div className="vacancy-wrapper" key={job.id} data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="job-header">
                                        <h2>{job.jobTitle} <span> ({job.postNumber}) </span></h2>
                                        <p><strong>Date posted: {job.postedOn} </strong></p>
                                    </div>
                                    <p> {job.description} </p>
                                    <div>
                                        <h3>Minimum experience</h3>
                                        <ul>
                                            {job.requirements.map((requirement, index) => (
                                                <li key={index}>{requirement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="more-button">
                                        <Link to={job.link}>Read more</Link>
                                    </button>
                                </div>
                            )) : (
                                <div className="no-jobs">
                                    <p>No jobs yet!! subscribe to our newsletter to get job and vacancy updates...</p>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jobs
