import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';

const FiltersClient = ({ data, setFilteredData }) => {
  const [eanFilter, setEanFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [descriptionFilter, setDescriptionFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');
  const [saleFreeFilter, setSaleFreeFilter] = useState('');
//   const [birthDateFilter, setBirthDateFilter] = useState('');


  const handleFilter = () => {
    const filteredProducts = data.filter(client => {
      console.log("birthDateFilter => " + birthDateFilter);
      const nameMatch = client.firstName.toLowerCase().includes(nameFilter.toLowerCase());
      const emailMatch = client.email.toLowerCase().includes(emailFilter.toLowerCase());
      const cpfMatch = client.cpf.includes(cpfFilter)

    //   let birthDateMatch = true;
    //   if (client.birthDate && birthDateFilter) {
    //     const formattedBirthDate = formatBirthDate(client.birthDate);
    //     birthDateMatch = formattedBirthDate.includes(birthDateFilter);
    // birthDateMatch
    //   }

      return nameMatch && emailMatch && cpfMatch;
    });
    setFilteredData(filteredProducts);
  };

//   const formatBirthDate = (value) => {
//     const formattedValue = value
//       .replace(/\D/g, '') // Remove caracteres não numéricos
//       .replace(/(\d{2})(\d)/, '$1/$2') // Coloca uma barra após os primeiros dois dígitos
//       .replace(/(\d{2})(\d)/, '$1/$2'); // Coloca uma barra após os próximos dois dígitos
//     return formattedValue;
//   };

//   const handleChangeBirthDate = (e) => {
//     const formattedValue = formatBirthDate(e.target.value);
//     console.log(formattedValue);
//     setBirthDateFilter(formattedValue);
//   };

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
            <label htmlFor="inputEanProductPesquisa" className="form-label">Código de barras</label>
            <input
              type="number"
              className="form-control"
              id="inputEanProductPesquisa"
              placeholder="Pesquisar código de barras"
              value={eanFilter}
              onChange={e => setEanFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="inputNomeProdutoPesquisa" className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              id="inputNomeProdutoPesquisa"
              placeholder="Pesquisar nome"
              value={nameFilter}
              onChange={e => setNameFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="inputTipoProdutoPesquisa" className="form-label">Tipo</label>
            <input
              type="text"
              className="form-control"
              id="inputTipoProdutoPesquisa"
              placeholder="Pesquisar tipo"
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="mb-3">
            <label htmlFor="inputDescricaoProdutoPesquisa" className="form-label">Descrição</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar descrição"
              id="inputDescricaoProdutoPesquisa"
              value={descriptionFilter}
              onChange={e => setTypeFilter(e.target.value)}
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
            setEanFilter('');
            setNameFilter('');
            setTypeFilter('');
            setDescriptionFilter('');
            setEanFilter('');
            setValueFilter('');
            setSaleFreeFilter('');
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
