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
          floor: null,
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
      return {
        ...state,
        filters: {
          ...state.filters,
          floorIds: state.filters.floorIds.filter((id) => id !== action.payload),
        },
      };

    case 'SET_BUILDING_ID':
      return {
        ...state,
        filters: {
          ...state.filters,
          buildingIds: [...state.filters.buildingIds, action.payload],
        },
      };

    case 'REMOVE_BUILDING_ID':
      return {
        ...state,
        filters: {
          ...state.filters,
          buildingIds: state.filters.buildingIds.filter((id) => id !== action.payload),
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
