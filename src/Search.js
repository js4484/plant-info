import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainApp">Search for a plant
        <div>search input</div>
      </div>
    );
  }

}


export default Search;


