const location = {
    name: "Arches",
    state: "Utah",
    geo: {
      lat: 38.68,
      lon: -109.57,
    },
  };
  
  const getLocationState = function (location) {
    return location.state;
  };
// replace function with => after key
  const getLocationStateShort = (location) => {
    return location.state;
  }
// Why even make it two lines?
  const getLocationStateRealShort = (location) => location.state