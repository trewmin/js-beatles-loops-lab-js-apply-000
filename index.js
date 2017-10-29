var theBeatlesPlay = function(musicians[],instruments[]) {
  var stringBeatles = []
  var lenMus= musicians.length
  var lenIns= instruments.length
  for (var i=0; i < lenMus; i++) {
    x = muscians[i]
    for (var j=0; j < lenIns; j++) {
      y = instruments[j]
    }
    stringBeatles.push( x + "plays" + y)
  }
  return stringBeatles
}
