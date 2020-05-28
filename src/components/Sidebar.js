import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import CustomCheckbox from './Checkbox';
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
    const { value, checked } = e.target;

    if (checked) {
      dispatch({ type: 'SET_FLOOR_ID', payload: value });
      dispatch({ type: 'SET_BUILDING_ID', payload: { id: buildingId, onlyOne: true } });
    } else {
      dispatch({ type: 'REMOVE_FLOOR_ID', payload: { floorId: value, buildingId } });
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
            <CustomCheckbox
              value={floor.id}
              onChange={(e) => handleFloorChange(e, building.id)}
              id={floor.id}
              key={floor.id}
              checked={filters.floorIds.includes(floor.id)}
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
