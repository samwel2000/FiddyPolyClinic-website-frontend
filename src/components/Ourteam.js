import React, {useState, useEffect} from 'react';
import './Ourteam.css';
import {BiDownArrow, BiUpArrow} from 'react-icons/bi';
import axios , {fetchTeamMembers} from '../APIconstant'
import { Skeleton } from 'antd';

function Ourteam() {
    const [moreTeam, setmoreTeam] = useState(false)
    const [members, setMembers] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(fetchTeamMembers);
            console.log(response)
            setMembers(response.data.results);
            console.log(response)
            setisLoading(false)
        }
        fetchData();
    }, [])

    return (
        <section className="team-section">
            <div className="container">
                <div className="row py-3 pt-5">
                    <h1 className="pb-5"
                    data-aos="zoom-in"
                    data-aos-duration="500">Our team</h1>
                    {
                        !isLoading ?
                        members.length > 0 ? 
                        <div className="col-md-12">
                        <div className="members-wrapper">
                            {members.filter((member, index) => index < 9).map(filteredMember => (
                                <div key={filteredMember.id} className="team-wrapper"
                                data-aos="zoom-in"
                                data-aos-duration="700">
                                    <div className="member-image">
                                        <img src={filteredMember.photo} alt={`fiddypolyclinic member - ${filteredMember.id}`} />
                                    </div>
                                    <div className="member-info">
                                        <h3> {filteredMember.first_name} {filteredMember.last_name} </h3>
                                        <p> {filteredMember.position} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="members-wrapper" style={{
                            transitionDuration:"1s"
                        }}>
                            {
                                (
                                    members.filter((member, index) => index > 8).map(filteredMember => (
                                        <div key={filteredMember.id} className="team-wrapper" 
                                        data-aos="zoom-in"
                                        data-aos-duration="700">
                                            <div className="member-image">
                                                <img src={filteredMember.photo} alt={`fiddypolyclinic member - ${filteredMember.id}`} />
                                            </div>
                                            <div className="member-info">
                                                <h3> {filteredMember.first_name} {filteredMember.last_name} </h3>
                                                <p> {filteredMember.position} </p>
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                        {members.length > 8 &&
                            <div className="more-button" onClick={() => setmoreTeam(!moreTeam)}>
                                { moreTeam ? "Show less": "Show more"}
                                <i>{ moreTeam ? <BiUpArrow />: <BiDownArrow />}</i>
                            </div>
                        }
                    </div> :
                    <div>
                        <p className="text-center">No members added yet......</p>
                    </div>
                    :
                    <Skeleton active />
                    }
                </div>
            </div>
        </section>
    )
}

export default Ourteam
