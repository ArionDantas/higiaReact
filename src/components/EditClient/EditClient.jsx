import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import viewEditUser from '../../img/editUser.svg';
import SaveIcon from '@mui/icons-material/Save';

const EditClient = () => {

    const { cpf } = useParams();

    const apiKey = `https://api-farmacia-higia-java-d263a377630d.herokuapp.com/customers/${cpf}`;

    const getClient = async () => {
        const response = await axios.get(apiKey);
        return response.data;
    };

    const { data: client, isLoading } = useQuery({
        queryKey: ['client'],
        queryFn: getClient
    });

    const [editedClient, setEditedClient] = useState({});

    useEffect(() => {
        if (client) {
            setEditedClient(client);
        }
    }, [client]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedClient((prevClient) => ({
            ...prevClient,
            content: {
                ...prevClient.content,
                [name]: value
            }
        }));
    };

    const handleSubmit = () => {
        // Faça algo com os dados editados (por exemplo, enviar para o servidor)
        console.log(editedClient);
    };

    return (
        <div className="section-container">
            <div className="content">
                <div className="row">
                    <div className="col">
                        <div className="content-view-client shadow rounded p-5">
                            <h1 className="mb-4">Editar cliente</h1>

                            {isLoading ? (
                                <LoadingSpinner />
                            ) : (
                                <div className="card-view-client">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-group mb-3">
                                                <label htmlFor="firstName">Nome:</label>
                                                <input
                                                    id="firstName"
                                                    className="form-control"
                                                    type="text"
                                                    name="firstName"
                                                    value={editedClient.content?.firstName || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group mb-3">
                                                <label htmlFor="lastName">Last Name:</label>
                                                <input
                                                    id="lastName"
                                                    className="form-control"
                                                    type="text"
                                                    name="lastName"
                                                    value={editedClient.content?.lastName || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group mb-3">
                                                <label htmlFor="email">Email:</label>
                                                <input
                                                    id="email"
                                                    className="form-control"
                                                    type="email"
                                                    name="email"
                                                    value={editedClient.content?.email || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group mb-3">
                                                <label htmlFor="cpf">CPF:</label>
                                                <input
                                                    id="cpf"
                                                    className="form-control"
                                                    type='number'
                                                    name='cpf'
                                                    value={editedClient.content?.cpf || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group mb-3">
                                                <label htmlFor="password">Password:</label>
                                                <input
                                                    id="password"
                                                    className="form-control"
                                                    type="text"
                                                    name='password'
                                                    value={editedClient.content?.password || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group mb-3">
                                                <label htmlFor="phone">Phone:</label>
                                                <input
                                                    id="phone"
                                                    className="form-control"
                                                    type="text"
                                                    name='phone'
                                                    value={editedClient.content?.phone || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group mb-3">
                                                <label htmlFor="birthDate">Birth Date:</label>
                                                <input
                                                    id="birthDate"
                                                    className="form-control"
                                                    type="text"
                                                    name='birthDate'
                                                    value={editedClient.content?.birthDate || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="isActive">Is Active:</label>
                                                <select
                                                    id="isActive"
                                                    className="form-control"
                                                    name="isActive"
                                                    value={editedClient.content?.isActive || ''}
                                                    onChange={handleInputChange}
                                                >
                                                    <option disabled>Selecione</option>
                                                    <option value="true">Ativo</option>
                                                    <option value="false">Desativado</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex gap-2'>
                                        <Link to={'/client'}>
                                            <button type="button" className="btn btn-danger px-4 py-2   ">
                                                <KeyboardReturnIcon className='pe-1' />
                                                Retornar
                                            </button>
                                        </Link>

                                        <button type="button" className="btn btn-success d-flex gap-1 px-4 py-2" onClick={handleSubmit}>
                                            <SaveIcon />
                                            Salvar
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col">
                        <img src={viewEditUser} alt="svg" width={600} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditClient;
