import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateDesayuno extends Component {

    state = {
        direccion: '',
        ingredientes: '',
        date: new Date(),
        clienteSelected: '',
        clientes: [],
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/clients');
        if (res.data.length > 0) {
            this.setState({
                clientes: res.data.map(cliente => cliente.username),
                clienteSelected: res.data[0].username
            })
        }
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://localhost:4000/api/desayunos/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                direccion: res.data.direccion,
                ingredientes: res.data.ingredientes,
                date: new Date(res.data.date),
                clienteSelected: res.data.cliente,
                _id: res.data._id,
                editing: true
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedDesayuno = {
                direccion: this.state.direccion,
                ingredientes: this.state.ingredientes,
                cliente: this.state.clienteSelected,
                date: this.state.date
            };
            await axios.put('http://localhost:4000/api/desayunos/' + this.state._id, updatedDesayuno);
        } else {
            const newDesayuno = {
                direccion: this.state.direccion,
                ingredientes: this.state.ingredientes,
                cliente: this.state.clienteSelected,
                date: this.state.date
            };
            axios.post('http://localhost:4000/api/desayunos', newDesayuno);
        }
        window.location.href = '/desayunos';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Desayuno</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* SELECT THE Client */}
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={this.state.clienteSelected}
                                onChange={this.onInputChange}
                                name="clienteSelected"
                                required>
                                {
                                    this.state.clientes.map(cliente => (
                                        <option key={cliente} value={cliente}>
                                            {cliente}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* Desayuno Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Direccion"
                                onChange={this.onInputChange}
                                name="direccion"
                                value={this.state.direccion}
                                required />
                        </div>
                        {/* Desayuno ingredientes */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="ingredientes"
                                name="ingredientes"
                                onChange={this.onInputChange}
                                value={this.state.ingredientes}
                                required>
                            </textarea>
                        </div>
                        {/* Desayuno Date */}
                        <div className="form-group">
                            <DatePicker className="form-control" selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
                        <button className="btn btn-primary">
                            Guardar <i className="material-icons">
                                assignment
</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
