import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      results: <div className="result"></div>
    }

    if (this.props.results) {
      handleResults(this.state.results);
    }
  }

  handleResults(results) {
    output = [];
    /// get to individual results
    results.forEach( result => {
      /// do things to result, present small info; attach light/soil/humidity for show page

      output.push(result);
    });
    return (
      <div className="result">
        {output}
      </div>
    )
  }
  

  handleSearch(e) {

    e.preventDefault();

        
    (async () => {
      /// search for item
      const response = await fetch(`https://trefle.io/api/v1/plants/search?token=AvrKtAWNyGzoT-belOOcCbon_aj1yxiEgrAOt0e1Hlg&q=this.state.input`);
      /// get it back
      const json = await response.json();
      /// do things to it
      /// send to search with results in props
      this.props.history.push({
        pathname: '/',
        search: '?query=abc',
        data: { json }
      })
      console.log(json);
    })();
;
    }

  update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

  render() {
    return (
      <div className="MainApp">

        <div className="splash-text">Enter the common or scientific name of your plant below to find simple care instructions</div>
        
        <div className="nav-search-div">
              <input id="search" className="plant-search" type="search" onChange={this.update("input")} placeholder="Search for plants..." />
              <button className="search-btn" onClick={ this.handleSearch }><i className="fas fa-microphone micro"></i></button>
        </div>

        {this.state.results}
          
          
          
      </div>
    );
  }

}


export default Search;


