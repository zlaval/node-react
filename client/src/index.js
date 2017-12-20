import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import reducers from "./reducers"
import ExchangeSearchBar from "./containers/exchange_search"

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={ExchangeSearchBar} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector(".container")
)