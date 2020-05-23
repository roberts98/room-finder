import React, { createContext, useReducer } from 'react';

import { initialState } from './initialState';

export const BuildingContext = createContext();

function reducer(state, action) {
  const rooms = [];
  switch (action.type) {
    case 'SET_SEARCH':
      state.buildings.forEach((building) =>
        building.floors.forEach((floor) =>
          floor.rooms.forEach((room) => {
            if (state.filters.floor && floor.id !== state.filters.floor) {
              return false;
            }

            return room.number === action.payload && rooms.push({ ...room, floorId: floor.id });
          })
        )
      );

      return {
        ...state,
        rooms,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };

    case 'SET_FLOOR':
      state.buildings.forEach((building) =>
        building.floors.forEach((floor) =>
          floor.rooms.forEach((room) => {
            if (state.filters.search && room.number !== state.filters.search) {
              return false;
            }

            return floor.id === action.payload && rooms.push({ ...room, floorId: floor.id });
          })
        )
      );

      return {
        ...state,
        rooms,
        filters: {
          ...state.filters,
          floor: action.payload,
        },
      };

    default:
      return state;
  }
}

function BuildingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BuildingContext.Provider value={{ state, dispatch }}>{children}</BuildingContext.Provider>
  );
}

export default BuildingProvider;
