const regPeriod = /\./g

module.exports = function(address) {
  return address.replace(regPeriod, '[.]')
}
