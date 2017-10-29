var theBeatlesPlay = function(musicians,instruments) {
  var stringBeatles = []
  var lenMus= musicians.length
  var lenIns= instruments.length
  for (i=0; i < lenMus; i++) {
    x = muscians[i]
    for (j=0; j < lenIns; j++) {
      y = instruments[j]
    }
    stringBeatles.push( x + "plays" + y)
  }
  return stringBeatles
}
