import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';


class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src = {this.props.image} alt='profile'/></TableCell>
                <TableCell>{this.props.breed}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.size}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.age}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
            </TableRow>
        );
    }
}

export default Customer;