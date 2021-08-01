import React, { useEffect, useState } from 'react';
import TopHeader from '../components/TopHeader';
import HeaderBackground from '../assets/images/background3.jpg';
import './News.css';
import axios, { fetchNews } from '../APIconstant';
import { Pagination, Image } from 'antd';

function News() {
    const [news, setNews] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pageTotal, setPageTotal] = useState(1)


    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(fetchNews + offset);
            setPageTotal(response.data.count)
            setNews(response.data.results);
            console.log(response.data);
        }
        fetchData();
    }, [offset, pageTotal])

    const HandlePageChange = (value) => {
        setOffset(value);
        console.log(pageTotal);
    }

    return (
        <>
            <TopHeader content="News and Events" image={HeaderBackground} />

            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {news.length > 0 ? news.map(event => (
                                <div className="news-wrapper pt-5" key={event.id} data-aos="zoom-in" data-aos-duration="1000">
                                    <h1>{event.heading}</h1>
                                    <div className="news-header">
                                        <Image width={`100%`} src={event.photo} alt={event.image_info} />
                                    </div>
                                    <div className="description">
                                        <p> {event.news_content} </p>
                                    </div>
                                </div>
                            )) : (
                                <div className="no-jobs pt-5 mt-5">
                                    <p>No events yet!! subscribe to our newsletter to get news and events updates...</p>
                                </div>
                            )
                            }
                            {news.length > 0 &&
                                <div className="d-flex justify-content-center pt-4">
                                    <Pagination simple 
                                        defaultCurrent={1}
                                        defaultPageSize={5} 
                                        total={pageTotal} 
                                        onChange={HandlePageChange} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News
