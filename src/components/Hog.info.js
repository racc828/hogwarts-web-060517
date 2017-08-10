import React from 'react';
import Hog from './Hog'
import HogsIndex from './Hogs.index'

class HogInfo extends React.Component{
  constructor(props){
    super(props)
  };

  colorMedal = () => {
    let color = ""
    switch(this.props.hogInfo['highest medal achieved']){
      case 'wood':
        color = '#663300'
        break;
      case 'bronze':
        color = "#b37700"
        break;
      case 'silver':
        color = "#cccccc"
        break;
      case 'gold':
        color = "#ffcc00"
        break;
      case 'platinum':
        color = "#cce6ff"
        break;
      case 'diamond':
        color = "#ffccff"
        break;
    }
    return color
  }

  render(){
    console.log(this.props)
    return (
      <div className="info">
        <h3>Specialty: {this.props.hogInfo.specialty}</h3>
        <h5>Weight Ratio: {this.props.hogInfo['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h5>
        <h5>Highest Medal Achieved: <i className="fa fa-trophy fa-2x" style={{color: this.colorMedal(), paddingLeft: '10px'}}></i></h5>
      </div>
    )
  };

} // end class

export default HogInfo
