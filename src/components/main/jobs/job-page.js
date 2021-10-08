import React from "react";
import { CircularProgress } from "@mui/material";

import ErrorIndicator from "./error-indicator/error-indicator";
import Jobs from "./jobs/jobs";
import JobRequest from "./jobs-request/job-request";
import NavigationButton from "./navigation-button/navigation-button";
import JobSearch from "./job-search/job-search";

import './job-page.css';

export default class JobPage extends React.Component {

    jobRequest = new JobRequest();

    state = {
        content: [],
        loading: true,
        error: false,
        pageNumber: 0,
        searchValues: {},
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError:true
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.getJobs();
        window.scrollTo(0, 0)
    }

    getJobs = () => {
        this.jobRequest.getAllJobs(this.state)
        .then((content) => {
            this.setState({
                content: content,
                loading: false,
                error: false
            })
        })
        .catch(this.onError); 
    }

    goToNextPage = () => {
        if (this.state.pageNumber >= this.state.content.totalPages - 1) {
            return;
        }
        this.setState({
            pageNumber: this.state.pageNumber + 1
        }, () => this.getJobs());
        window.scrollTo(0, 0);
    }

    goToPreviousPage = () => { 
        if (this.state.pageNumber >= 1) {
            this.setState({
                pageNumber: this.state.pageNumber - 1
            }, () => this.getJobs());
        }
        window.scrollTo(0, 0);
    }

    onSearch = (searchValues) => {
        this.setState({
            pageNumber: 0
        })
        this.setState({ searchValues: searchValues}, () => this.getJobs());
    }


    render() {

        const { content, loading, error } = this.state;
        
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <CircularProgress variant="indeterminate" color="primary" sx={{ mr: 'auto', ml: 'auto', mt: '200px', mb: '200px', display: 'block' }} /> : null;
        const jobItems = !(loading || error) ? <Jobs data={content} /> : null;


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
                    <div className="container" data-aos="fade-up">
                        <div className="col-lg-8 entries">
                            <div className="jobs-container">
                                <div>
                                    <div className="col-lg-8 entries">
                                        {/*{notFindMessage}*/}
                                        {errorMessage}
                                        {spinner} 
                                    </div>
                                    {jobItems}
                                    <NavigationButton 
                                        goToNextPage={this.goToNextPage}
                                        pageNumber={this.state.pageNumber + 1}
                                        goToPreviousPage={this.goToPreviousPage}
                                        totalPages={this.state.content.totalPages}
                                        error={this.state.error}/>
                                </div>
                                <JobSearch onSearch={this.onSearch}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}