import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    marginBottom: 10,
  },
  input: {
    visibility: 'hidden',
    display: 'none',
    '&:checked + label': {
      border: '1px solid #96004b33',
      backgroundColor: '#f7dbe3',
      color: '#96004b',
    },
  },
  label: {
    boxSizing: 'border-box',
    cursor: 'pointer',
    width: '100%',
    display: 'block',
    textAlign: 'center',
    padding: '16px 20px',
    borderRadius: '5px',
    backgroundColor: '#edf1f7',
    border: '1px solid transparent',
    fontFamily: 'Roboto',
  },
}));

function Checkbox({ children, id, onChange, value }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <input
        value={value}
        name="radio"
        onChange={onChange}
        id={id}
        type="radio"
        className={classes.input}
      />
      <label htmlFor={id} className={classes.label}>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
