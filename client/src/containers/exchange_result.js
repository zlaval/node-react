import React, { Component } from "react"
import { connect } from "react-redux";

class ExchangeResult extends Component {
    render() {
        return (
            <input className="form-control" value={this.props.exchange} />
        )
    }
}

function mapStateToProps({ exchange }) {
    return { exchange }
}

export default connect(mapStateToProps)(ExchangeResult)