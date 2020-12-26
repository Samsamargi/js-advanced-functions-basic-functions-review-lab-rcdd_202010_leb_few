// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
let mondayWork = function(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}
function wrapAdjective(visualFlair = "*"){
  return function giveAdjective(adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`
  }
}

let Calculator = {
  add : function(a,b){
    return a+b
  },
  subtract : function(a,b){
    return a-b
  },
  multiply : function(a,b){
    return a*b
  },
  divide : function(a,b) {
    return a/b
  },
}
let actionApplyer = function(startingPoint, array) {
  let a = startingPoint

  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }

  return a
}