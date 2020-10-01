module.exports = function(points) {
  let time = 0

  for (let i = 0, len = points.length; i < len - 1; i++) {
    const point = points[i]
    const nextPoint = points[i + 1]
    const deltaX = Math.abs(point[0] - nextPoint[0])
    const deltaY = Math.abs(point[1] - nextPoint[1])
    time += Math.max(deltaX, deltaY)
  }

  return time
}
