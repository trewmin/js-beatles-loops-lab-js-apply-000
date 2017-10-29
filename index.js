function theBeatlesPlay(musicians,instruments) {
  var arrayBeatles = [];
  for (let i=0; i < musicians.length; i++) {
  arrayBeatles.push(musicians[i] + " plays " + instruments[i])
  }
  return arrayBeatles;
}

function johnLennonFacts(facts) {
  newFacts = [];
  var i = 0;
  while(i<facts.length) {
    newFacts.push(facts[i]+"!!!")
    i++
  }
  return newFacts;
}
