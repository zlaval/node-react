import { combineReducers } from "redux"
import ExchangeReducer from "./exchange_reducer"

const rootReducer = combineReducers({
    exchange: ExchangeReducer
})

export default rootReducer