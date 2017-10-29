function theBeatlesPlay(musicians,instruments) {
  var arrayBeatles = []
  for (let i=0; i < musicians.length; i++) {
  arrayBeatles.push(musicians[i] + " plays " + instruments[i])
  }
  return arrayBeatles
}
