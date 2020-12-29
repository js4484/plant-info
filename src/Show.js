import React from 'react';


class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: props.data,
      output: this.constructResult(this.state.data)
    }

  }

  constructResult(data) {
    let picture = <div className="plant-pic"><a href="data.picture"></a></div>;
    let nameDouple = <div className="name-douple">
                        <div className="name-common">data.commmonname</div>
                        <div className="name-sci">data.sciencename</div>
                    </div>;
    let light = <div className="result"> 
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
        </div>;
    let soil = 
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
        </div>;
      
    let humidity = <div className="result">
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
        </div>;
    
    
    return (
      <div className="result-plant">
          {picture}
          {nameDouple}
          {light}  
          
      </div>
      );

    
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


        {this.state.output}
 
          
      </div>
    );
  }

}


export default Show;


