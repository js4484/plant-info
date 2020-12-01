import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NavBar">
        <div>logo left</div>
        <div>login right</div>
      </div>
    );
  }

}


export default Nav;