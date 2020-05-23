import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { BuildingContext } from '../context/BuildingContext';

function Sidebar() {
  const {
    state: { buildings },
    dispatch,
  } = useContext(BuildingContext);

  return (
    <div>
      <Typography variant="h4" component="h2">
        Select building and floor
      </Typography>
      {buildings.map((building) => (
        <div key={building.name}>
          <h3>{building.name}</h3>
          {building.floors.map((floor) => (
            <div
              onClick={() => dispatch({ type: 'SET_FLOOR', payload: floor.id })}
              key={floor.name}
            >
              {floor.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
