import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { BuildingContext } from '../context/BuildingContext';
import { getVisibleRooms } from '../context/selectors';
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  })
);

function RoomsList() {
  const { state } = useContext(BuildingContext);
  const classes = useStyles();
  const rooms = getVisibleRooms(state.buildings, state.filters);
  console.log(state.filters);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {rooms.map((room) => (
          <Grid key={room.text} item xs={12} md={4}>
            <h1 key={room.text}>{room.text}</h1>
            <img className={classes.image} src={room.image} alt={room.text} />
            {room.floorId}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default RoomsList;
