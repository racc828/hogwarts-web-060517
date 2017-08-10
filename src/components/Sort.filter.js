import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Form} from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'


// [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...{}]



const options = [ {key: 'name', value: 'name', text: 'Name'}, {key: 'weightRatio', value: 'weightRatio', text: 'Weight Ratio'}]

class SortFilter extends React.Component {
  SelectExample = () => (
    <Select placeholder='Sort by:' onChange={this.props.onChangeSort} options={options} />
  )

  render(){
    return(
      <div className="filter-container ui grid two column centered">
        <div className="four column centered row">
          <div className="column">
            {this.SelectExample()}
          </div>
          <div className="column">
            <div className="ui toggle checkbox">
              <input type='checkbox' onChange={this.props.onCheck}/>
              <label>Greased Hogs</label>
            </div>
          </div>
        </div>
      </div>


    )
  }

} // end class


export default SortFilter
