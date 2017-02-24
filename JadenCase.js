//capitalize the first letter of every word in a string
string.prototype.toJadenCase = function(){
  return this.spilt(" ").map(function (word){
    return word.charAt(0).toUpperCase()+ word.slice(1);
  }).join(" ");
}
//str.split(" ") splits a string into an array of substrings
// var str = "How are you doing today?";
//var res = str.split(" ");
// result will be : how, are, you, doing, today?

// how do i call this function haaalp
