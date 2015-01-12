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

Array.prototype.$$swap = function(i1,i2) {
   var tmp_item_1 = this[i1];
   var tmp_item_2 = this[i2];
   this[i1] = tmp_item_2;
   this[i2] = tmp_item_1;
   return this;
}
Object.defineProperty(Array.prototype,"$$swap",{enumerable:false});

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


String.prototype.$$encodeURI = function(){
      return encodeURI(this);
}
Object.defineProperty(String.prototype,"$$encodeURI", {enumerable:false});

String.prototype.$$stripTags = function(space){
      if (space==undefined) space='';
      return this.replace(/<\/?[^>]+>/gi, space);
}
Object.defineProperty(String.prototype,"$$stripTags", {enumerable:false});


Object.prototype.$$hasUndefined = function(){
   var keys = Object.keys(this);
   for (var i=0; i<=keys.length; i++){
       if (this[keys[i]]===undefined)
         return true;
   }
   return false;
}
Object.defineProperty(Object.prototype, "$$hasUndefined", {enumerable: false})

Object.prototype.$$searchInTree = function(target) {
  var keys = Object.keys(this);
  var index = -1;
  var result = undefined;
  for (var i=0; i<keys.length; i++){
          if (typeof(this[keys[i]])!='object') {
            if (String(this[keys[i]]).indexOf(target)!=-1) {
              result =  this[keys[i]];
            }
          } else {
            if (this[keys[i]]!=null)
              result = this[keys[i]].$$searchInTree(target);
          }
    if (result) {
      return result;
    }
    }
        return result;
}
Object.defineProperty(Object.prototype, "$$searchInTree", {enumerable: false})

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

