import { CARS } from "../actions/car_action"
import _ from "lodash"


export default function (state = [], action) {
    switch (action.type) {
        case CARS:
            return action.payload.cars
    }
    return state
}