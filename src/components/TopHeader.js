import React from 'react'
import './TopHeader.css'

function TopHeader({content, image, moreContent}) {
    return (
        <section className="top-header" style={{
            background:`url("${image}")`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            position:"relative",
            height:"50vh"
        }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-content">
                            <h1>
                                {content}
                            </h1>
                            {moreContent && <p>{moreContent}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopHeader
