import React, { Component } from "react"
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'

export default class CarTable extends Component {
    render() {
        return (
            <Table>
                <TableHeader>
                    <TableHeaderColumn>Brand</TableHeaderColumn>
                    <TableHeaderColumn>Age</TableHeaderColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>Toyota</TableRowColumn>
                        <TableRowColumn>2</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}
