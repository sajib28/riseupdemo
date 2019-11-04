import React, { Component } from 'react'
import CountUp from 'react-countup';
class CompanySummary extends Component {
    render() {
        return (
            <div className="company-short-info">
                <div className="col-lg-3">
                    <div className="counter text-center">
                        <CountUp className="CountUp" start={0} duration={5} end={10} />
                        <p>Years</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="counter text-center">
                        <CountUp className="CountUp" start={0} duration={5} end={7} />
                        <p>Countrys</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="counter text-center">
                        <CountUp className="CountUp" start={0} end={700} duration={5} suffix="+" />
                        <p>Projects</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="counter text-center">
                        <CountUp className="CountUp" start={0} end={100} duration={5} suffix="+" />
                        <p>Clients</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CompanySummary;