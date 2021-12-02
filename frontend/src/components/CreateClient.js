import React, { Component } from 'react'
import axios from 'axios'

export default class CreateClient extends Component {

    state = {
        username: '',
        clients: []
    }

    async componentDidMount() {
        this.getClients();
    }

    getClients = async () => {
        const res = await axios.get('http://localhost:4000/api/clients');
        this.setState({
            clients: res.data
        });
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/clients', {
            username: this.state.username
        });
        this.setState({ username: '' });
        this.getClients();
    }

    deleteClient = async (clientId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/clients/' + clientId);
            this.getClients();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New Clients</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.username}
                                    type="text"
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.clients.map(client => (
                                <li className="list-group-item list-group-item-action" key={client._id} onDoubleClick={() => this.deleteClient(client._id)}>
                                    {client.username}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
