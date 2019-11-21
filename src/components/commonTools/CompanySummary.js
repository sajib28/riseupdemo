import React, { Component } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
class CompanySummary extends Component {
    state = {
        didViewCountUp: false
    };


    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }
    render() {
        return (
            <div className="company-short-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 col-sm-3">
                            <div className="counter text-center">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <CountUp className="CountUp" start={0} end={this.state.didViewCountUp ? 10 : 0} duration={5} />
                                </VisibilitySensor>
                                <p>Years</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-3">
                            <div className="counter text-center">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <CountUp className="CountUp" start={0} duration={5} end={this.state.didViewCountUp ? 7 : 0} />
                                </VisibilitySensor>
                                <p>Countrys</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-3">
                            <div className="counter text-center">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <CountUp className="CountUp" start={0} end={this.state.didViewCountUp ? 700 : 0} duration={10} suffix="+" />
                                </VisibilitySensor>
                                <p>Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-3">
                            <div className="counter text-center">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <CountUp className="CountUp" start={0} end={this.state.didViewCountUp ? 100 : 0} duration={10} suffix="+" />
                                </VisibilitySensor>
                                <p>Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CompanySummary;