import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  input: {
    visibility: 'hidden',
    display: 'none',
    '&:checked + label': {
      border: '1px solid blue',
    },
  },
  label: {
    cursor: 'pointer',
    width: 200,
    border: '1px solid red',
    display: 'block',
    textAlign: 'center',
    padding: '5px 20px',
  },
}));

function Checkbox({ children, id, onChange, value }) {
  const classes = useStyles();
  return (
    <>
      <input value={value} onChange={onChange} id={id} type="checkbox" className={classes.input} />
      <label htmlFor={id} className={classes.label}>
        {children}
      </label>
    </>
  );
}

export default Checkbox;
