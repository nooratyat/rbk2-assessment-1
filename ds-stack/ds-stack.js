var Stack = function() {
	//your code is here
	var someinstance={}
	someinstance.storage=[]
	someinstance.len=0
	return _.extend(someinstance,Stackmethod)
};
var Stackmethod={}
Stackmethod.Add=function(value){
	this.storage.push(value)
	len++
};
Stackmethod.remove=function(value){
	var x= this.storage[len-1] // OR  x=this.storage[this.storage.length-1]
	this.storage.splice(len-1,1) // OR this.storage.splice(this.storage.length-1,1)
	return x 
}