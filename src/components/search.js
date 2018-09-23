import React, {Component} from 'react';


// only class Based components have state, functions do not have any state
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div>
            <input className="form-control" onChange={event => this.onInputChange(event.target.value)}/>
            </div>

        );

    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}


export default SearchBar;