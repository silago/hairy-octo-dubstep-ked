    function catalogCollectionTranslate(val) {
        val = val.toLowerCase();
        var keys =  {'женские':'Женщины','мужские':'Мужчины','детские':'Дети'};
         
        if (keys[val]!=undefined)  {
            return keys[val];
        }
        else return val;
    }



    'use strict';
    String.prototype.translit = (function(){
        var L = {
    '.':'_','/':'_','\\':'_','А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g',
    'Д':'D','д':'d','Е':'E','е':'e','Ё':'Yo','ё':'yo','Ж':'Zh','ж':'zh',
    'З':'Z','з':'z','И':'I','и':'i','Й':'Y','й':'y','К':'K','к':'k',
    'Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o',
    'П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t',
    'У':'U','у':'u','Ф':'F','ф':'f','Х':'Kh','х':'kh','Ц':'Ts','ц':'ts',
    'Ч':'Ch','ч':'ch','Ш':'Sh','ш':'sh','Щ':'Sch','щ':'sch','Ъ':'"','ъ':'"',
    'Ы':'Y','ы':'y','Ь':"'",'ь':"'",'Э':'E','э':'e','Ю':'Yu','ю':'yu',
    'Я':'Ya','я':'ya'
            },
            r = '',
            k;
        for (k in L) r += k;
        r = new RegExp('[' + r + ']', 'g');
        k = function(a){
            return a in L ? L[a] : '';
        };
        return function(){
            return this.replace(r, k);
        };
    })();


function CSVToArray(strData, strDelimiter) {
    strDelimiter = (strDelimiter || ",");
    var objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
    );

    var arrData = [
        []
    ];
    var arrMatches = null;
    while (arrMatches = objPattern.exec(strData)) {
        var strMatchedDelimiter = arrMatches[1];
        if (
            strMatchedDelimiter.length &&
            (strMatchedDelimiter != strDelimiter)
        ) {
            arrData.push([]);
        }
        if (arrMatches[2]) {
            var strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"),
                "\""
            );
        } else {
            var strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
}


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
Object.defineProperty(Array.prototype,"last",{enumerable:false});

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
Object.defineProperty(Array.prototype,"clearEmpty",{enumerable:false});

Object.prototype.$$keys = function(){
   return Object.keys(this);
}
Object.defineProperty(Object.prototype, "$$keys", {enumerable: false})


Object.prototype.$$init = function(key){
   if (typeof(this[key])==undefined)
       {this[key]=""};
}
Object.defineProperty(Object.prototype, "$$init", {enumerable: false})

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

