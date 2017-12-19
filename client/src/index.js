import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import reducers from "./reducers"
import Home from "./components/home"

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Home} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector(".container")
)