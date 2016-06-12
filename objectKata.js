// a few simple literals
var numNum = 11;
var wordWord = "birdBird";
var keepItSilly = true;

if (keepItSilly){
  console.log(numNum + " little " +  wordWord + "s");
}

//literal objecta
var aNullObject = null;
var emptyObject = {};
var simpleObject = {
  givenName: "Json"
}

var moreComplicatedObject = {
  givenName: "xml",
  pullInValue: simpleObject.givenName,
  whoAmI: function(){
    return "I am " + this.givenName;
  }
}

// an object with a prototype (Using code from JavaScript: the good parts)
if (typeof Object.create !== 'function') {
     Object.create = function (o) {
         var F = function () {};
         F.prototype = o;
         return new F();
     };
}

//create an object with the provided object as the prototype
var extendedComplicatedObject = Object.create(moreComplicatedObject);
//execute a funciton on the prototype
console.log("prototype's name: " + extendedComplicatedObject.whoAmI());
//change the name of the protoype
moreComplicatedObject.givenName = "new prototype name";
//and make sure that new name is reflected via the extended object
console.log("new prototype's name: " + extendedComplicatedObject.whoAmI());
//then add the givenName to the extended object to see if it overrides the prototype
extendedComplicatedObject.givenName = "extended";
console.log("extended's name: " + extendedComplicatedObject.whoAmI());
console.log("verify prototype's name didn't change: " + moreComplicatedObject.whoAmI());



// an array
var notAList = ["one", "two", "three"];

//a function that's anonymous - ish.. javascript is weird
var aFunctionInAVariable = function (){
  console.log("no Way");
}
aFunctionInAVariable();

function lessAnonymous(paramWithNoVarOrType){
  console.log(" I can call this one by name rather than variable: " + paramWithNoVarOrType);
}

lessAnonymous(simpleObject.givenName);

var TheBigQuestion  = "I can change it but is the reference in moreComplicated Object a reference or value???"

simpleObject.givenName = TheBigQuestion;
if (moreComplicatedObject.pullInValue === TheBigQuestion){
  console.log("It's a reference");
}else{
  console.log("It's a value: " + moreComplicatedObject.pullInValue);
}
