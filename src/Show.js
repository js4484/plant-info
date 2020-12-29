import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleSearch(e) {

        e.preventDefault();
        console.log(this.state.input);
        return this.state.input;
    }

  update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

  render() {
    return (
      <div className="MainApp">


        <div className="result-plant">
          <div className="plant-pic"><a href="https://i.pinimg.com/originals/38/2a/ad/382aad040d3a8de15aab8f3e62e2b21a.jpg"></a></div>
          <div className="name-douple">
            <div className="name-common">Fishbone Cactus</div>
            <div className="name-sci">(Epiphyllum anguliger)</div>
          </div>
        </div>

        <div className="result"> 
          <div className="result-name">Light</div>
          <div className="result-range">
            <div className="result-name">Shade</div>
            <div className="result-no">-</div>
            <div className="result-no">-</div>
            <div className="result-yes">l</div>
            <div className="result-yes">l</div>
            <div className="result-no">-</div>
            <div className="result-name">Full Sun</div>
          </div>
        </div>
         
        <div className="result">
          <div className="result-name">Soil Water Retention</div>
          <div className="result-range">
            <div className="result-name">Sand</div>
            <div className="result-yes">l</div>
            <div className="result-yes">l</div>
            <div className="result-no">-</div>
            <div className="result-no">-</div>
            <div className="result-no">-</div>
            <div className="result-name">Mud</div>
          </div>
        </div>

        <div className="result">
          <div className="result-name">Humidity</div>
          <div className="result-range">
            <div className="result-name">Desert</div>
            <div className="result-yes">l</div>
            <div className="result-yes">l</div>
            <div className="result-no">-</div>
            <div className="result-no">-</div>
            <div className="result-no">-</div>
            <div className="result-name">Swamp</div>
          </div>
        </div>
          
          
          
      </div>
    );
  }

}


export default Show;


