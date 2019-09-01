import React from 'react';
import './App.css';
import ResponseComponent from "../responseComponent/responseComponent.js";

// let vacancy = {
//   id:"a055cd52-bf9d-48d3-b32c-c7bddee9a3dc",
//   title:"Senior Software Engineer Backend",
//   location:"Denver, CO",
//   type:"Full Time",
//   url:"https://jobs.github.com/positions/a055cd52-bf9d-48d3-b32c-c7bddee9a3dc",
//   created_at:"Tue Aug 27 20:52:41 UTC 2019",
//   company:"TrainHeroic",
//   };

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={vacancies: []};
        this.changeVacancyList = this.changeVacancyList.bind(this);
    }

    changeVacancyList(newList) {
        this.setState({vacancies: newList});
    }

    render() {
        return(
            <ResponseComponent vacancies ={this.state.vacancies} onChange={this.changeVacancyList} />
        );
      }
};

export default App;
