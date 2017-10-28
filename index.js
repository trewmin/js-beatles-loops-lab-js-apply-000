var theBeatlesPlay = function(array1,array2) {
  var stringBeatles = []
  for (x in array1) {
    for (y in array2) {
      stringBeatles.push("x plays y")
    }
  }
  return stringBeatles
}
