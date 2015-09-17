// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var res = [];
  var findElementsByClassName = function(element){
    if (element.classList){
      if(element.classList.contains(className)){
        res.push(element);
      }
      var nodes = element.childNodes;
      if(nodes.length > 0){
        for (var i = 0; i<nodes.length; i++){
          findElementsByClassName(nodes[i]);
        }
      }
    }
  }
  findElementsByClassName(document.body);
  return res;
};
