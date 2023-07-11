import React from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import viewClientImage from '../../img/viewClient.svg';
import LoadingClient from '../LoadingClient/LoadingClient';
import ErrorSearch from '../ErrorSearch/ErrorSearch';


const ViewClient = () => {

    const { cpf } = useParams();

    // const location = useLocation();
    // const cpf = location.state.cpf.value;

    console.log(cpf);

    const apiKey = `https://api-farmacia-higia-java-d263a377630d.herokuapp.com/customers/${cpf}`;

    const getProduct = async () => {
        const response = await axios.get(apiKey);
        return response.data;
    };

    const { data: product, isLoading, isError } = useQuery({
        queryKey: ['product'],
        queryFn: getProduct
    });

    return (

        <div className="section-container">
            <div className='content'>

                <div className="row">
                    <div className="col">
                        <div className='content-view-client shadow rounded p-5'>
                            <h1 className='mb-4'>Visualizar Produto</h1>

                            {
                                isLoading ? (
                                    <>
                                        <LoadingSpinner />
                                        <LoadingClient />
                                    </>
                                ) :

                                    isError ? (
                                        <>
                                            <ErrorSearch message={'Produto não foi encontrado!'} onCloseTo={'/product'} />
                                            <LoadingClient />
                                        </>
                                    ) :

                                        (
                                            <div className='card-view-produto'>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="eanProdutoView">Código de barras:</label>
                                                            <input
                                                                id="eanProdutoView"
                                                                className="form-control"
                                                                type="text"
                                                                disabled
                                                                value={product.content.cpf == null ? '' : product.content.cpf}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="nomeProdutoView">Nome:</label>
                                                            <input
                                                                id="nomeProdutoView"
                                                                className="form-control"
                                                                type="text"
                                                                disabled
                                                                value={product.content.firstName == null ? '' : product.content.firstName}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="tipoProdutoView">Tipo:</label>
                                                            <input
                                                                id="tipoProdutoView"
                                                                className="form-control"
                                                                type="text"
                                                                disabled
                                                                value={product.content.type == null ? '' : product.content.type}
                                                            />
                                                        </div>
                                                    </div>



                                                    <div className="col">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="descricaoProdutoView">Descrição:</label>
                                                            <input
                                                                id="descricaoProdutoView"
                                                                className="form-control"
                                                                type="text"
                                                                disabled
                                                                value={product.content.description == null ? '' : product.content.description}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="valorProdutoView">Valor:</label>
                                                            <input
                                                                id="valorProdutoView"
                                                                className="form-control"
                                                                type="text"
                                                                disabled
                                                                value={`R$` + product.content.value == null ? '' : product.content.value}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="descontoProdutoView">Desconto:</label>
                                                            <input
                                                                id="descontoProdutoView"
                                                                className="form-control"
                                                                type="text"
                                                                disabled
                                                                value={product.content.saleFree == null ? '' : product.content.saleFree}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className="row">

                                                    <div className="col-md-6">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="isActive">Is Active:</label>
                                                            <input
                                                                id="isActive"
                                                                className="form-control"
                                                                type="text"
                                                                disabled
                                                                value={product.content.isActive ? 'Ativo' : 'Desativado'}
                                                            />
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>

                                        )}


                            <Link to={'/product'}>
                                <button type="button" className="btn btn-danger px-4 py-2   ">
                                    <KeyboardReturnIcon className='pe-1' />
                                    Retornar
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col">
                        <img src={viewClientImage} alt="svg" width={600} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewClient;
