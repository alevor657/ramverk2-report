import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EditItem extends Component {
    constructor(props) {
        super(props);

        this.state = this._getInitialState();

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePlaceInput = this.handlePlaceInput.bind(this);
        this.handleAgeInput = this.handleAgeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameInput(e) {
        this.setState({name: e.target.value});
    }

    handlePlaceInput(e) {
        this.setState({place: e.target.value});
    }

    handleAgeInput(e) {
        this.setState({age: e.target.value});
    }

    handleSubmit() {
        this.props.updateItem(this.state);
    }

    _getInitialState() {
        return this.props.row;
    }

    componentWillReceiveProps(props) {
        this.setState({...props.row});
    }

    render() {
        return (<div className="add-new-item">
            <h2>{this.props.heading}</h2>
            <input type="text" placeholder="name" value={this.state.name} onChange={this.handleNameInput}/>
            <input type="text" placeholder="place" value={this.state.place} onChange={this.handlePlaceInput}/>
            <input type="number" placeholder="age" value={this.state.age} onChange={this.handleAgeInput}/>
            <button onClick={this.handleSubmit}>Update</button>
        </div>);
    }
}

EditItem.propTypes = {
    updateItem: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired,
    row: PropTypes.object
};

export default EditItem;
