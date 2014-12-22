'use strict';


Array.prototype.filter = function (key,value,childKey){
        var keys = Object.keys(this);
        var walk = function(data) {
            for (var i=0; i<data.length; i++){
                if (data[i][key]===value)
                    return data[i];
                var inChild = walk(key,value,this[childKey]);
                if (inChild) return inChild;
            }
        }
        return walk(this);

    }

Array.prototype.last = function () {
    return this[this.length];
}

var arr = [1,2,3];

Array.prototype.clearEmpty = function () {
  for( var i=0; i<=this.length; i++){
    console.log(i);
    console.log(this);
    if (!this[i]) this.splice(i,1);
    }
  return this;
}

Object.prototype.$$keys = function(){
   return Object.keys(this);
}
Object.defineProperty(Object.prototype, "$$keys", {enumerable: false})



Object.prototype.$$hasUndefined = function(){
   var keys = Object.keys(this);
   for (var i=0; i<=keys.length; i++){
       if (this[keys[i]]===undefined)
         return true;
   }
   return false;
}
Object.defineProperty(Object.prototype, "$$hasUndefined", {enumerable: false})

Object.prototype.$$hasDefined = function(){
   var keys = Object.keys(this);
   for (var i=0; i<=keys.length; i++){
       if (this[keys[i]]!==undefined)
         return true;
   }
   return false;
}
Object.defineProperty(Object.prototype, "$$hasDefined", {enumerable: false})

String.prototype.fromJson = function(){
   return angular.fromJson(this);
}

