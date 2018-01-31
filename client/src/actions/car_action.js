import axios from "axios"

const URL = "http://localhost:3000/v1/cars"

export const CARS = "CARS"

export function listCars(cars) {
    const request = axios.get(URL)
    return (dispatch) => {
        request.then(({data}) => {

            dispatch({
                type: CARS,
                payload: data
            })
        })
    }
}