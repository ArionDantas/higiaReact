import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';

const FiltersClient = ({ data, setFilteredData }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [cpfFilter, setCpfFilter] = useState('');
  const [birthDateFilter, setBirthDateFilter] = useState('');

  function dateFormatter(data) {
    const dataObject = new Date(data);
    const dia = dataObject.getDate();
    const mes = dataObject.getMonth() + 1;
    const ano = dataObject.getFullYear();
    const dataFormatted = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`
    return dataFormatted
  }

  console.log(data);

  const handleFilter = () => {
    const filteredClients = data.filter(client => {
      console.log("birthDateFilter => " + birthDateFilter);
      // const birthDateMatch = client.birthDate.includes(birthDateFilter);
      const nameMatch = client.firstName.toLowerCase().includes(nameFilter.toLowerCase());
      const emailMatch = client.email.toLowerCase().includes(emailFilter.toLowerCase());
      const cpfMatch = client.cpf.includes(cpfFilter)

      // let birthDateMatch = true;
      // if (client.birthDate && birthDateFilter) {
      //   const formattedClientBirthDate = formatBirthDate(client.birthDate);
      //   const formattedFilterBirthDate = formatBirthDate(birthDateFilter);
      //   birthDateMatch = formattedClientBirthDate.includes(formattedFilterBirthDate);
      // }

      // const formattedBirthDate = formatBirthDate(client.birthDate);
      // let birthDateMatch = formattedBirthDate.includes(birthDateFilter);

      const formattedBirthDate = formatBirthDate(client.birthDate);
      const birthDateMatch = formattedBirthDate.includes(birthDateFilter);

      console.log(birthDateMatch);

      return nameMatch && emailMatch && cpfMatch && birthDateMatch;
    });
    setFilteredData(filteredClients);
  };

  // const formatBirthDate = (value) => {
  //   const parts = value.split('/');
  //   if (parts.length === 3) {
  //     const day = parts[0].padStart(2, '0');
  //     const month = parts[1].padStart(2, '0');
  //     const year = parts[2];
  //     return `${day}/${month}/${year}`;
  //   }
  //   return value;
  // };

  const formatBirthDate = (value) => {
    if (!value) {
      return ''; // Retorna uma string vazia se o valor for null ou undefined
    }
    console.log('Value =>' + value);
    const formattedValue = value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d)/, '$1/$2') // Coloca uma barra após os primeiros dois dígitos
      .replace(/(\d{2})(\d)/, '$1/$2'); // Coloca uma barra após os próximos dois dígitos

    console.log('Valor formatado => ' + formattedValue);
    return formattedValue;
  };


  const handleChangeBirthDate = (e) => {
    const formattedValue = formatBirthDate(e.target.value);
    console.log('Valor formatado => ' + formattedValue);
    setBirthDateFilter(formattedValue);
  };

  return (
    <div className="filters shadow-sm px-2 py-3 rounded">
      <div className="header-filter d-flex align-content-center gap-2">
        <TuneIcon />
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
      <div className="row">
        <div className="col-3">
          <div className="mb-3">
            <label htmlFor="inputDataAniversarioClientePesquisa" className="form-label">Data</label>
            <input
              type="text"
              className="form-control"
              id="inputDataAniversarioClientePesquisa"
              value={birthDateFilter}
              onChange={handleChangeBirthDate}
              placeholder="dd/mm/yyyy"
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
            setBirthDateFilter('')
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
