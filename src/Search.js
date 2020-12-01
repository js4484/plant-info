import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  // handleSearch(e) {

  //       e.preventDefault();
  //       console.log(this.state.input);
  //       return this.state.input;
  //   }

  update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

  render() {
    return (
      <div className="MainApp">Search for a plant
        <div>search input</div>
        <div className="nav-search-div">
              <input id="search" className="plant-search" type="search" onChange={this.update("input")} placeholder="Search for plants.." />
              <button className="search-btn" onClick={ this.handleSearch }><i className="fas fa-microphone micro"></i></button>
          </div>
      </div>
    );
  }

}


export default Search;


