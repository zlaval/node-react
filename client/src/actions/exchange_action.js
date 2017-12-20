import axios from "axios"

const URL = "https://api.fixer.io/latest?base=HUF"

export const EXCHANGE = "EXCHANGE"

export function changeMoney(amount) {
    const request = axios.get(URL)
    return (dispatch) => {
        request.then(({ data }) => {
            const money = amount * data.rates["USD"]
            dispatch({
                type: EXCHANGE,
                payload: money
            })
        })
    }
}