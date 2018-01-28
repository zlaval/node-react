import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import thunk from "redux-thunk"

import reducers from "./reducers"
import ExchangeView from "./components/exchange_view"
import CarTable from "./containers/car_table"

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/cars" component={CarTable} />
                        <Route path="/" component={ExchangeView} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.querySelector(".container")
)