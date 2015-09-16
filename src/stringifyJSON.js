// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
    var json = '';
    for(var i = 0;i<obj.length;i++){
      json = json.concat(stringifyJSON(obj[i])).concat(',');
    }
    return '['.concat(json.slice(0,-1)).concat(']');
  }

  if (typeof obj === "string") {
    var json = '"'.concat(obj).concat('"');
    return json;
  }

  if (typeof obj === "undefined") {
      return String(null);
  }

  if ((typeof obj === "number")||
      (typeof obj === "boolean")||
      (obj === null)){
    return String(obj);
  }

  if (typeof obj === "object"){
    var json = '';
    for (var i in obj){
      if (!((typeof obj[i] === "undefined")||
            (_.isFunction(obj[i])))){
        json = json.concat(stringifyJSON(i)).concat(':').concat(stringifyJSON(obj[i])).concat(',');
      }
    }
    return '{'.concat(json.slice(0,-1)).concat('}');
  }
};
