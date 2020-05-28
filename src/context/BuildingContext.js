import React, { createContext, useReducer } from 'react';

import { initialState } from './initialState';

export const BuildingContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };

    case 'SET_FLOOR_ID':
      return {
        ...state,
        filters: {
          ...state.filters,
          floorIds: [...state.filters.floorIds, action.payload],
        },
      };

    case 'REMOVE_FLOOR_ID':
      const buildingFloors = state.buildings
        .filter((building) => building.id === action.payload.buildingId)[0]
        .floors.map((floor) => floor.id);
      const newFloors = state.filters.floorIds.filter((id) => id !== action.payload.floorId);
      const hasAny = buildingFloors.some((floorId) => newFloors.includes(floorId));

      return {
        ...state,
        filters: {
          ...state.filters,
          floorIds: state.filters.floorIds.filter((id) => id !== action.payload.floorId),
          buildingIds: hasAny
            ? state.filters.buildingIds
            : state.filters.buildingIds.filter((id) => id !== action.payload.buildingId),
        },
      };

    case 'SET_BUILDING_ID':
      if (action.payload.onlyOne) {
        return {
          ...state,
          filters: {
            ...state.filters,
            buildingIds: [...state.filters.buildingIds, action.payload.id],
          },
        };
      }

      const floorIds = state.buildings
        .filter((building) => building.id === action.payload)[0]
        .floors.map((floor) => floor.id);

      return {
        ...state,
        filters: {
          ...state.filters,
          buildingIds: [...state.filters.buildingIds, action.payload],
          floorIds: [...state.filters.floorIds, ...floorIds],
        },
      };

    case 'REMOVE_BUILDING_ID':
      const floorIdsToRemove = state.buildings
        .filter((building) => building.id === action.payload)[0]
        .floors.map((floor) => floor.id);
      const newFloorIds = state.filters.floorIds.filter((el) => !floorIdsToRemove.includes(el));
      return {
        ...state,
        filters: {
          ...state.filters,
          buildingIds: state.filters.buildingIds.filter((id) => id !== action.payload),
          floorIds: newFloorIds,
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
