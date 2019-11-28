import React, {Component} from "react";
import InputRange from "react-input-range"
import './tempo.css'
import 'react-input-range/lib/css/index.css'

class Tempo extends Component {

  render() {
    return (
      <form className='tempo-slider'>
      <div className="tempo-range">
      <InputRange
        type="tempo"
        maxValue={200}
        minValue={50}
        value={this.props.tempo}
        onChange={this.props.updateTempo} />
        </div>
        </form>
    );
  }
}
export default Tempo;
