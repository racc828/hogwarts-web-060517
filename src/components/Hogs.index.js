import React from 'react'
import Hog from './Hog'
import HogInfo from './Hog.info'

class HogsIndex extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    const hogs = this.props.hogs.map((hog, index) => {
      return <div className="hog" id={'hog-' + index} key={index}><Hog hog={hog} index={index} /></div>
    })

    return (
      <div id="hogs-index" className="ui grid">
        {hogs}
      </div>
    )
  }

} //end class

export default HogsIndex
