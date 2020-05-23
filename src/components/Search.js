import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { BuildingContext } from '../context/BuildingContext';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    marginBottom: 40,
  },
  input: {
    marginRight: 20,
  },
}));

function Search() {
  const classes = useStyles();
  const { dispatch } = useContext(BuildingContext);
  const [searchValue, setSearchValue] = useState('');

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: 'SET_SEARCH', payload: searchValue });
  }

  return (
    <form onSubmit={handleSubmit} className={classes.wrapper}>
      <TextField
        className={classes.input}
        value={searchValue}
        onChange={handleSearchChange}
        variant="outlined"
        placeholder="Enter room number"
        type="text"
      />
      <Button type="submit" variant="contained" color="primary">
        Go
      </Button>
    </form>
  );
}

export default Search;
