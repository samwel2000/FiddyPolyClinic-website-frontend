import React, { useEffect, useState } from 'react';
import TopHeader from '../components/TopHeader';
import HeaderBackground from '../assets/images/background3.jpg';
import './Jobs.css';
import axios, {fetchJobs} from '../APIconstant';
import { Pagination } from 'antd';

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(fetchJobs + offset);
            setJobs(response.data.results);
            setTotalPage(response.data.count)
        }
        fetchData();
    }, [offset])

    const HandlePagination = (value) => {
        setOffset(value)
    }
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
                            {jobs.length > 0 ? jobs.map(job => (
                                <div className="vacancy-wrapper" key={job.id} data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="job-header">
                                        <h2>{job.title} <span> ({job.position_number < 10 ? `0${job.position_number} post` : `${job.position_number} posts`}) </span></h2>
                                        <p><strong>Date posted: {job.created_date} </strong></p>
                                    </div>
                                    <p> {job.content} </p>
                                    <div>
                                        <h3>Minimum experience</h3>
                                        <ul>
                                            {job.qualifications !== null && job.qualifications.split(",").map((qualification, index) => (
                                                <li key={index}>{qualification}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <a className="more-button"a href={job.filefield} download target="_blank" rel="noreferrer noopener">Read more</a>
                                    </div>
                                </div>
                            )) : (
                                <div className="no-jobs">
                                    <p>No jobs yet!! subscribe to our newsletter to get job and vacancy updates...</p>
                                </div>
                            )
                            }
                            {jobs.length > 0 && 
                                <div className="d-flex justify-content-center">
                                    <Pagination 
                                    simple
                                    defaultCurrent={1}
                                    defaultPageSize={5}
                                    onChange={HandlePagination}
                                    total={totalPage} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jobs
