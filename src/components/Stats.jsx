import React from 'react'

const Stats = () => {
    return (
        <div className='container mb-[5rem] mx-auto'>
            <div className="stats stats-vertical md:stats-horizontal shadow-xl w-full">
                <div className="stat place-items-center">
                    <div className="stat-title">Total Cars</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Active Users</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">New Car Additions</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    )
}

export default Stats