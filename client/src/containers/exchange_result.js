import React, { Component } from "react"
import { connect } from "react-redux";

class ExchangeResult extends Component {
    render() {
        return (
            <h2>
                {this.props.exchange}
            </h2>
        )
    }
}

function mapStateToProps({ exchange }) {
    return { exchange }
}

export default connect(mapStateToProps)(ExchangeResult)