import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class DesayunosList extends Component {

    state = {
        desayunos: []
    }

    async componentDidMount() {
        this.getDesayunos();
    }

    getDesayunos = async () => {
        const res = await axios.get('http://localhost:4000/api/desayunos')
        this.setState({
            desayunos: res.data
        });
    }

    deleteDesayuno = async (desayunoId) => {
        await axios.delete('http://localhost:4000/api/desayunos/' + desayunoId);
        this.getDesayunos();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.desayunos.map(desayuno => (
                        <div className="col-md-4 p-2" key={desayuno._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Dir: {desayuno.direccion}</h5>
                                    <Link to={"/desayunos/edit/" + desayuno._id} className="btn btn-secondary">
                                        <i className="material-icons">
                                            border_color</i>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {desayuno.ingredientes}
                                    </p>
                                    <p>
                                        Cliente: {desayuno.cliente}
                                    </p>
                                    <p>
                                        {format(desayuno.createdAt)}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteDesayuno(desayuno._id)}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
