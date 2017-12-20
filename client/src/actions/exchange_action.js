export const EXCHANGE = "EXCHANGE"

export function changeMoney(amount) {
    //TODO change from huf to usd
    //use axios + map with async middleware
    const money = 100
    return {
        type: EXCHANGE,
        payload: money
    }
}