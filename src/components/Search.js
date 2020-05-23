import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { BuildingContext } from '../context/BuildingContext';

function Search() {
  const { dispatch } = useContext(BuildingContext);
  const [searchValue, setSearchValue] = useState('');

  function handleSearchChange(e) {
    setSearchValue(Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: 'SET_SEARCH', payload: searchValue });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <TextField
        value={searchValue}
        onChange={handleSearchChange}
        variant="outlined"
        placeholder="Enter room number"
        type="text"
      />
      <Button variant="contained" color="primary">
        Go
      </Button>
    </form>
  );
}

export default Search;
