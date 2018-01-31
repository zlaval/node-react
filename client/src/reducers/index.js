import { combineReducers } from "redux"
import ExchangeReducer from "./exchange_reducer"
import CarsReducer from './cars_reducer'

const rootReducer = combineReducers({
    exchange: ExchangeReducer,
    cars: CarsReducer
})

export default rootReducer