import React, { Component } from "react"
import { connect } from "react-redux";
import { listCars } from '../actions/car_action'
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'


class CarTable extends Component {

    componentWillMount() {
        this.props.listCars()
    }

    renderTableRows(car) {
        return (
            <TableRow key={car._id}>
                <TableRowColumn>{car.brand}</TableRowColumn>
                <TableRowColumn>{car.age}</TableRowColumn>
            </TableRow>
        )
    }

    render() {

        if (this.props.cars.length == 0) {
            return <div>Loading...</div>
        }

        return (
            <Table>
                <TableHeader key={0}>
                    <TableHeaderColumn>Brand</TableHeaderColumn>
                    <TableHeaderColumn>Age</TableHeaderColumn>
                </TableHeader>
                <TableBody>
                    {this.props.cars.forEach(this.renderTableRows)}
                </TableBody>
            </Table>
        )
    }

}


function mapStateToProp({ cars }) {
    return { cars }
}

export default connect(mapStateToProp, { listCars })(CarTable)