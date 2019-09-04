import React from 'react';
import VacancyList from "../vacancyList/vacancyList";
import Filter from "../filter/filter";

class ResponseComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            queryParams: '',
            wordQuery: ''
        }
        this.changeParams = this.changeParams.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(list) {
        this.props.onChange(list);
    }

    changeParams(newQueryParams, newWordQuery) {
        this.setState({
            queryParams: newQueryParams,
            wordQuery: newWordQuery
        });
    }

    render() {
        const xhr = new XMLHttpRequest();
        const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?';
        let endpoint =`${url}${this.state.queryParams}${this.state.wordQuery}`;

        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if(xhr.readyState===XMLHttpRequest.DONE) {
                this.handleChange(xhr.response);
            }
        };

        xhr.open('GET', endpoint, true);
        xhr.send();

        return (
            <div>
                <Filter queryParams={this.state.queryParams} wordQuery={this.state.wordQuery} onChangeParams={this.changeParams}/>
                <VacancyList vacancies={this.props.vacancies} />
            </div>
        );
    }
}

export default ResponseComponent;
