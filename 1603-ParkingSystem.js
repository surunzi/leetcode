const ParkingSystem = function(big, medium, small) {
  this._spaces = {
    1: big,
    2: medium,
    3: small
  }
}

ParkingSystem.prototype.addCar = function(carType) {
  if (this._spaces[carType] === 0) {
    return false
  } else {
    this._spaces[carType]--
    return true
  }
}

module.exports = ParkingSystem
