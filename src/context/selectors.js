export function getVisibleRooms(buildings, { search, floorIds, buildingIds }) {
  const rooms = buildings
    .map((building) =>
      building.floors.map((floor) =>
        floor.rooms.map((room) => ({
          ...room,
          floorId: floor.id,
          buildingId: building.id,
          floorName: floor.name,
          buildingName: building.name,
        }))
      )
    )
    .flat()
    .flat()
    .filter((room) => {
      const searchMatch =
        search !== null ? room.filterText.toLowerCase().includes(search.toLowerCase()) : true;
      const floorMatch = floorIds.length ? floorIds.includes(room.floorId) : true;
      const buildingMatch = buildingIds.length ? buildingIds.includes(room.buildingId) : true;

      return searchMatch && floorMatch && buildingMatch;
    });

  return rooms;
}
