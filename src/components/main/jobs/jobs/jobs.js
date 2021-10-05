import React from "react";

import CircularProgress from '@mui/material/CircularProgress';
import JobRequest from "../jobs-request/job-request";
import ErrorIndicator from "../error-indicator/error-indicator";
import NavigationButton from "../navigation-button/navigation-button";

import './jobs.css';

export default class Jobs extends React.Component {

    jobRequest = new JobRequest();

    state = {
        content: [],
        loading: true,
        error: false,
        pageNumber: 1
    }

    getJobs = (page) => {
        if (page === undefined) {
            page = 1;
        }
        this.jobRequest.getAllJobs(page)
        .then((content) => {  
            this.setState({
                content: content,
                loading: false
            })
        })
        .catch(this.onError); 
    }

    componentDidMount() {
        this.getJobs();
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    goToNextPage = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        })
        this.getJobs(this.state.pageNumber + 1);
    }

    goToPreviousPage = () => { 
        if (this.state.pageNumber >= 2) {
            this.setState({
                pageNumber: this.state.pageNumber - 1
            })
            this.getJobs(this.state.pageNumber - 1);
        }
    }

    render() {

        const { content, loading, error } = this.state;

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <CircularProgress variant="indeterminate" color="primary" sx={{ mr: 'auto', ml: 'auto', mt: '200px', mb: '200px', display: 'block' }} /> : null;
        const jobItems = !(loading || error) ? <JobsView data={content} /> : null;

        return (
            <div>
                <div className="col-lg-8 entries">
                    {errorMessage}
                    {spinner} 
                </div>
                {jobItems}
                <NavigationButton 
                    goToNextPage={this.goToNextPage}
                    pageNumber={this.state.pageNumber}
                    goToPreviousPage={this.goToPreviousPage}/>
            </div>
        )
    }
}

const JobsView = ({ data }) => {

    function onHandleClick (e) {

        var element = document.getElementsByName(e.target.id)[0];
        if (element.className === 'job-description') {
            element.className = 'job-description active'
        } else {
            element.className = 'job-description'
        }
    }

    return (
        <article className="entry">
            <ul className="entry-meta"> 
                {data.content.map((item) => (
                    <li key={item.id} className="entry-content">
                        <h2 id={item.id}
                            className="post-item clearfix"
                            onClick={onHandleClick}
                        >{item.position}</h2>
                        <p style={{ color: '#255269' }}><b>{item.company}</b></p>
                        <span>{item.location}</span><br />
                        <span>{item.seniority}</span><br />
                        <span>{item.time}</span>
                        <div className="job-description" name={item.id}>
                            <div className="entry-content">    
                                <span>{item.description}</span><br />
                                <span>Salary: {item.salary}</span><br /><br />
                                <a href={item.link} target="blank" className="job-description-link">Apply now</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </article>        
    )
}