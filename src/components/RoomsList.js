import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import RoomItem from './RoomItem';
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

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {rooms.map((room) => (
          <Grid key={room.id} item xs={12} md={4}>
            <RoomItem room={room} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default RoomsList;
