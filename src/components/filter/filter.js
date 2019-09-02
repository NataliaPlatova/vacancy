import React from 'react';

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.holdChange = this.holdChange.bind(this);
    }

    holdChange(e) {
        const newQueryParams = e.target.id;
        const newWordQuery = e.target.value;
        this.props.onChangeParams(newQueryParams, newWordQuery);
    }

    render() {
        return(
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="true" id="full_time=" onChange={this.holdChange}/>
                    <label className="form-check-label" htmlFor="full_time=">
                        Full time
                    </label>
            </div>
        );
    }
}

export default Filter;
