const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) =>{
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > 1000;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((distance, journey) => {
    return distance += journey.distance;
  }, 0)
};

// this one works after hw solution lesson, almost a combo of my first and second attempts.
Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  }).filter((transport, index, array) => {
    return array.indexOf(transport) === index});
};


// first attempt
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return this.journeys.filter((transport, index) => this.journeys.indexOf(transport) !== index);
// };

// second attempt
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return this.journeys.map((journey) => {
//     return journey.transport([...new Set(journeys)])
//   })
// };

// this was the other solution that John demonstrated.
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const allTransports = this.journeys.map(journey => {
//     return journey.transport;
//   });
//   return [...new Set(allTransports)];
// };

module.exports = Traveller;
