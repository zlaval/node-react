import { EXCHANGE } from "../actions/exchange_action"


export default function (state = 0, action) {
    switch (action.type) {
        case EXCHANGE:
            return action.payload
    }
    return state
}