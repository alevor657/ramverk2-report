import React, { Component } from 'react';
import req from 'axios';

import Table from './database/Table';
import AddNewItem from './database/AddNewItem';
import EditItem from './database/EditItem';

class Database extends Component {
    constructor(props) {
        super(props);

        this.apiUrl = `${window.location.origin}/api/users`;
        this.state = {
            data: null,
            updating: false,
            id: null
        };

        this.enableUpdatingMode = this.enableUpdatingMode.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.disableUpdatingMode = this.disableUpdatingMode.bind(this);
    }

    fetchData() {
        req.get(this.apiUrl)
            .then(res => {
                this.setState({data: res.data});
            })
            .catch(err => {throw err;});
    }

    createNewItem(data) {
        req.post(this.apiUrl, data);
        this.fetchData();
    }

    deleteItem(id) {
        req.delete(`${this.apiUrl}/${id}`);
        this.fetchData();
    }

    updateItem(row) {
        console.log(row);
        req.patch(`${this.apiUrl}/${row._id}`, row);
        this.fetchData();
        this.setState({activeItem: {}, updating: false});
    }

    enableUpdatingMode(id) {
        const activeItem = this.state.data.filter(item => item._id === id)[0];

        this.setState({
            updating: true,
            activeItem
        });
    }

    disableUpdatingMode() {
        this.setState({
            updating: false,
            activeItem: {}
        });
    }

    componentWillMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className="container">
                <h1>Database page</h1>
                <Table rows={this.state.data} deleteItem={this.deleteItem} enableUpdatingMode={this.enableUpdatingMode}/>
                {this.state.updating ? (
                    <EditItem
                        heading="Edit item"
                        updateItem={this.updateItem}
                        row={this.state.activeItem}
                    />
                ) : (
                    <AddNewItem
                        submitItem={this.createNewItem}
                        heading="Create new item"
                    />
                )}
                {this.state.updating && (
                    <button onClick={this.disableUpdatingMode}>Disable update mode</button>
                )}
            </div>
        );
    }
}

export default Database;
