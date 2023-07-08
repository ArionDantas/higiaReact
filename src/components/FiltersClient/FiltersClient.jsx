// import React from 'react'
// import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';

const FiltersClient = ({ data, setFilteredData }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [cpfFilter, setCpfFilter] = useState('');

  const handleFilter = () => {
    const filteredClients = data.filter(client => {
      const nameMatch = client.firstName.toLowerCase().includes(nameFilter.toLowerCase());
      const emailMatch = client.email.toLowerCase().includes(emailFilter.toLowerCase());
      const cpfMatch = client.cpf.includes(cpfFilter);
      return nameMatch && emailMatch && cpfMatch;
    });
    setFilteredData(filteredClients);
  };

  return (
    <div className="filters shadow-sm px-2 py-3 rounded">
      <div class="header-filter d-flex align-content-center gap-2">
      <TuneIcon/>
        <h6>Filtros de pesquisa</h6>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label htmlFor="inputNomeClientePesquisa" className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              id="inputNomeClientePesquisa"
              placeholder="Pesquisar nome"
              value={nameFilter}
              onChange={e => setNameFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="inputEmailClientePesquisa" className="form-label">E-mail</label>
            <input
              type="text"
              className="form-control"
              id="inputEmailClientePesquisa"
              placeholder="Selecionar email"
              value={emailFilter}
              onChange={e => setEmailFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="inputCpfClientePesquisa" className="form-label">CPF</label>
            <input
              type="text"
              className="form-control"
              id="inputCpfClientePesquisa"
              placeholder="Pesquisar CPF"
              value={cpfFilter}
              onChange={e => setCpfFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="buttons d-flex justify-content-end gap-1">
        <button
          type="button"
          className="btn btn-success d-flex align-items-center"
          onClick={handleFilter}
        >
          <SearchIcon />
          Buscar
        </button>
        <button
          type="button"
          className="btn btn-danger d-flex align-items-center"
          onClick={() => {
            setNameFilter('');
            setEmailFilter('');
            setCpfFilter('');
            setFilteredData(data);
          }}
        >
          <ClearIcon />
          Limpar
        </button>
      </div>
    </div>
  );
};

export default FiltersClient;
