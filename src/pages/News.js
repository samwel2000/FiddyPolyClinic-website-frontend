import React from 'react';
import TopHeader from '../components/TopHeader';
import HeaderBackground from '../assets/images/background3.jpg';
import './News.css';
import { EventsAndNews } from '../Data';

function News() {
    return (
        <>
            <TopHeader content="News and Events" image={HeaderBackground}  />

            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {EventsAndNews.length > 0 ? EventsAndNews.map(event => (
                                <div className="news-wrapper pt-5" key={event.id} data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="news-header">
                                        <img src={event.eventImage} alt={event.altImage} />
                                    </div>
                                    <div className="description">
                                        <p> {event.description} </p>
                                    </div>
                                    <button className="news-button">
                                        Read more
                                    </button>
                                </div>
                            )) : (
                                <div className="no-jobs">
                                    <p>No events yet!! subscribe to our newsletter to get news and events updates...</p>
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

export default News
