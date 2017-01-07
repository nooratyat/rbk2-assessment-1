var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  var index=getIndexBelowMaxForKey(key, max)

  return {
    _storage: [],
    retrieve: function(key,index) {
      
    //your code is here
    for (var i = 0; i < _storage[index].length; i++) {
     if( _storage[index][i][0]===key){
      return _storage[index][i][1]
     }
    }
    },

    insert: function(key, value,index ) {
     
      if(._storage[index]===undefined){
        _storage[index][0]=key
        _storage[index][1]=value
      }
      else if(._storage[index][k]===key){
        _storage[index][k]=value

      }
      else {storage[index].push([key,value]) }
      }

       _storage[index].set(index,_storage[index ])
    }


  };
  return _storage;
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};