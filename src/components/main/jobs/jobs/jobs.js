import React from "react";

import './jobs.css';

export default function Jobs ({ data }) {

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
                        <span style={{float: 'right'}}>{showDate(item.date)}</span><br />
                        <h2 id={item.id}
                            className="post-item clearfix"
                            onClick={onHandleClick}
                        >{item.position}</h2>
                        <p style={{ color: '#255269' }}><b>{item.company}</b></p>
                        <span className="fa fa-map-marker"> {item.location}</span><br />
                        <span>{item.seniority}</span><br />
                        <div className="job-description" name={item.id}>
                            <div className="entry-content">    
                                <span>{item.description}</span><br /><br />
                                <a href={item.link} target="blank" className="job-description-link">Apply now</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </article>        
    )
}

function showDate(originalDate){
    let dateFromJson = new Date(originalDate);
    let dateDay = dateFromJson.getDate();
    if (dateDay < 10) {
        dateDay = '0' + dateDay;
    }

    let dateMonth = dateFromJson.getMonth() + 1;
    if (dateMonth < 10) {
        dateMonth = '0' + dateMonth;
    }

    let dateYear = dateFromJson.getFullYear();

    let newDateString = dateDay + '.' + dateMonth + '.' + dateYear;

    return newDateString;
}