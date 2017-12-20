import { EXCHANGE } from "../actions/exchange_action"


export default function (state = "", action) {
    switch (action.type) {
        case EXCHANGE:
            return action.payload
    }
    return state
}