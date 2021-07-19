import React, {useState} from 'react';
import { TeamMembers } from '../Data';
import './Ourteam.css';
import {BiDownArrow, BiUpArrow} from 'react-icons/bi';

function Ourteam() {
    const [moreTeam, setmoreTeam] = useState(false)
    return (
        <section className="team-section">
            <div className="container">
                <div className="row py-3 pt-5">
                    <h1 className="pb-5"
                    data-aos="zoom-in"
                    data-aos-duration="500">Our team</h1>
                    <div className="col-md-12">
                        <div className="members-wrapper">
                            {TeamMembers.filter((member) => member.id < 7).map(filteredMember => (
                                <div key={filteredMember.id} className="team-wrapper"
                                data-aos="zoom-in"
                                data-aos-duration="700">
                                    <div className="member-image">
                                        <img src={filteredMember.image} alt={`"fiddypolyclinic member"${filteredMember.id}`} />
                                    </div>
                                    <div className="member-info">
                                        <h3> {filteredMember.name} </h3>
                                        <p> {filteredMember.title} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="members-wrapper" style={{
                            transition:moreTeam ? "translateY(0)":"translateY(-30%)",
                            display:moreTeam ? "grid":"none",
                            transitionDuration:"1s"
                        }}>
                            {
                                (
                                    TeamMembers.filter((member) => member.id > 6).map(filteredMember => (
                                        <div key={filteredMember.id} className="team-wrapper" 
                                        data-aos="zoom-in"
                                        data-aos-duration="700">
                                            <div className="member-image">
                                                <img src={filteredMember.image} alt={`"fiddypolyclinic member"${filteredMember.id}`} />
                                            </div>
                                            <div className="member-info">
                                                <h3> {filteredMember.name} </h3>
                                                <p> {filteredMember.title} </p>
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                        <div className="more-button" onClick={() => setmoreTeam(!moreTeam)}>
                            { moreTeam ? "Show less": "Show more"}
                            <i>{ moreTeam ? <BiUpArrow />: <BiDownArrow />}</i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourteam
