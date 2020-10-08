const { expect } = require('chai')
const ParkingSystem = require('./1603-ParkingSystem')

describe('1603', function() {
  it('ParkingSystem', function() {
    const parkingSystem = new ParkingSystem(1, 1, 0)
    expect(parkingSystem.addCar(1)).to.be.true
    expect(parkingSystem.addCar(2)).to.be.true
    expect(parkingSystem.addCar(3)).to.be.false
    expect(parkingSystem.addCar(1)).to.be.false
  })
})
