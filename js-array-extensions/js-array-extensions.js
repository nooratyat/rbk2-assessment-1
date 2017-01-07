// your code here
var Array=function(){
	var some={}
	some.storage=[]
	return _.extend(some,arraymethod)
}
 var arraymethod={}
 arraymethod.first=function(){
 	this.storage[0]
 }
 arraymethod.last=function(){
 	this.storage[this.storage.length-1 ]
 }