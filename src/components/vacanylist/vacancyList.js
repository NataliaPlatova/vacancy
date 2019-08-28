import React from "react";
import data from '../../jobs.json';
import './vacancyList.css';

class VacancyList extends React.Component{
    render() {
        let jobList = data.map(item =>
            <li>
                <h2>{item['title']}</h2>
                <p>{item['location']}</p>
                <p>{item['type']}</p>
                <p>{item['company']}</p>
                <p>{item['created_at']}</p>
            </li>);
        return <ul>{jobList}</ul>;
    }
}

export default VacancyList;
