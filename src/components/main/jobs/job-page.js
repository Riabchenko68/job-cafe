import React from "react";

import ErrorIndicator from "./error-indicator/error-indicator";
import Jobs from "./jobs/jobs";
import JobSearch from "./job-search/job-search";

import './job-page.css';

export default class JobPage extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError:true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Jobs</h2>
                        </div>
                    </div>
                </section>
                <section id="jobs" className="jobs">
                    <div className="container jobs-container" data-aos="fade-up">
                        <div className="col-lg-8 entries">
                            <Jobs /> 
                        </div>
                        <JobSearch />
                    </div>
                </section>
            </div>
        )
    }
}