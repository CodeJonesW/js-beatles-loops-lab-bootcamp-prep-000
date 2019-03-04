function theBeatlesPlay(musicians,instruments) {
  let newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArray;
}
function johnLennonFacts(facts) {
var i = 0;
let newArray = [];
while (i < facts.length) {
  newArray.push(facts[i] + '!!!');
  i++;
}
return newArray;
}