import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeMoney } from "../actions/exchange_action"

//TODO use form and get more options like from, to, amount
class ExchangeSearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { amount: "" }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        //TODO only number
        this.setState({ amount: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.amount)
        this.props.changeMoney(this.state.amount)
        this.setState({ amount: "" });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input className="form-control" value={this.state.amount} onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeMoney }, dispatch)
}

export default connect(null, mapDispatchToProps)(ExchangeSearchBar)