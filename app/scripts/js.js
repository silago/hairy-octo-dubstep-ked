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



String.prototype.fromJson = function(){
   return angular.fromJson(this);
}
