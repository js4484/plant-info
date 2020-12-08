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
        <div className="left"><i class="fas fa-home"></i></div>
        <div className="right"></div>
      </div>
    );
  }

}


export default Nav;