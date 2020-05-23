import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Radio from './Radio';
import { BuildingContext } from '../context/BuildingContext';

function Sidebar() {
  const {
    state: { buildings, filters },
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

  function handleFloorChange(e, buildingId) {
    const { value } = e.target;

    dispatch({ type: 'SET_FLOOR_ID', payload: value });
    dispatch({ type: 'SET_BUILDING_ID', payload: buildingId });
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
                checked={filters.buildingIds.includes(building.id)}
                value={building.id}
                onChange={handleBuildingChange}
                name="building"
                color="primary"
              />
            }
            label={building.name}
          />
          {building.floors.map((floor) => (
            <Radio
              value={floor.id}
              onChange={(e) => handleFloorChange(e, building.id)}
              id={floor.id}
              key={floor.id}
            >
              {floor.name}
            </Radio>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
