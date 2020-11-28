import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        var searchText = event.target.value;
        this.setState({ term: searchText });  

        // adding timeout to give time for user input
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(function(){
            this.props.onSearchTermChange(searchText);
        }.bind(this),500);
 
    }

    render() {
        return (
            <div className="ytSearchField zmb-24 row">
                <span className="zmr-14">Search:</span><input value={this.state.term} onChange={this.onInputChange} />
            </div>  
        );
    }
}

export default SearchBar;