import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import CustomCheckbox from './Checkbox';
import { BuildingContext } from '../context/BuildingContext';

function Sidebar() {
  const {
    state: { buildings },
    dispatch,
  } = useContext(BuildingContext);

  function handleBuildingChange(e) {
    const { checked, value } = e.target;

    if (checked) {
      dispatch({ type: 'SET_BUILDING_ID', payload: value });
    } else {
      dispatch({ type: 'REMOVE_BUILDING_ID', payload: value });
    }
  }

  function handleFloorChange(e) {
    const { checked, value } = e.target;
    console.log(value);

    if (checked) {
      dispatch({ type: 'SET_FLOOR_ID', payload: value });
    } else {
      dispatch({ type: 'REMOVE_FLOOR_ID', payload: value });
    }
  }

  return (
    <div>
      <Typography variant="h4" component="h2">
        Select building and floor
      </Typography>
      {buildings.map((building) => (
        <div key={building.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={building.id}
                onChange={handleBuildingChange}
                name="building"
                color="primary"
              />
            }
            label={building.name}
          />
          {building.floors.map((floor) => (
            <CustomCheckbox
              value={floor.id}
              onChange={handleFloorChange}
              id={floor.id}
              key={floor.id}
            >
              {floor.name}
            </CustomCheckbox>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
