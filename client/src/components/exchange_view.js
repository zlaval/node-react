import React, { Component } from "react"

import ExchangeSearchBar from "../containers/exchange_search"
import ExchangeResult from "../containers/exchange_result"

export default class ExchangeView extends Component {
    render() {
        return (
            <div>
                <ExchangeSearchBar />
                <ExchangeResult />
            </div>
        )
    }
}