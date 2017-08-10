import React from 'react'
import HogInfo from './Hog.info'

class Hog extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hidden: true
    }
  }

  handleClick = () =>{
    this.state.hidden === true ? this.setState({hidden: false}) : this.setState({hidden: true})
    }

  render() {
    const fileName = this.props.hog.name.toLowerCase().split(' ').join("_") + '.jpg'
    const imagePath = "/hog-imgs/" + fileName

    return(
      <div className="four wide column">
        <div className="ui card" onClick={this.handleClick}>
          <div className="ui slide masked reveal image">
            <img src={imagePath} className="visible content" alt=""/>
            <div className="hidden content">
              <HogInfo hogInfo={this.props.hog} />
            </div>
            <div className="content">
              <a className="header js-title">
                {this.props.hog.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

} // end class

export default Hog
