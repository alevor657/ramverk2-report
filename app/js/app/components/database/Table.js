import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete(id) {
        this.props.deleteItem(id);
    }

    handleUpdate(id) {
        this.props.enableUpdatingMode(id);
    }

    render() {
        return (
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.rows ? (
                        this.props.rows.map((row, i) => (
                            <tr key={i}>
                                <td>{row._id}</td>
                                <td>{row.name}</td>
                                <td>{row.place}</td>
                                <td>{Number(row.age)}</td>
                                <td>
                                    <a onClick={() => this.handleDelete(row._id)}>Delete</a>
                                    <br/>
                                    <a onClick={() => this.handleUpdate(row._id)}>Update</a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td><p>Fetching rows...</p></td></tr>
                    )}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object),
    deleteItem: PropTypes.func,
    enableUpdatingMode: PropTypes.func
};

export default Table;
