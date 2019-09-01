import React from 'react';
import VacancyList from "../vacancyList/vacancyList";

class ResponseComponent extends React.Component{
    constructor(props){
        super(props);
    }

    handleChange(list) {
        this.props.onChange(list);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const xhr = new XMLHttpRequest();
        const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if(xhr.readyState===XMLHttpRequest.DONE) {
                this.handleChange(xhr.response);
            }
        };

        xhr.open('GET', url, true);
        xhr.send();

        return <VacancyList vacancies={this.props.vacancies} />;
    }
}

export default ResponseComponent;
