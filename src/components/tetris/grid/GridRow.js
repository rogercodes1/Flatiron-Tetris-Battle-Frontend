import React, { Component } from 'react'
import GridCell from './GridCell'

class GridRow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  isFull = () => {
    return this.props.row.every(r => r > 0)
  }

  render() {
    const cells = this.props.row.map((c,i) => <GridCell key={i} value={c} size={ this.props.size ? this.props.size : undefined } isFull={this.isFull} />)
    return(
      <div className={"grid-template-rows"}>
        { cells }
      </div>
    )
  }
}

export default GridRow
