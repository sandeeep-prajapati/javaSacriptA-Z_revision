function HashTable(){
    var table = []
    // generate number based on each char ASCII value that composes the key
    var loseloseHashCode = function(key){
        var hash = 0
        for (var i =0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash %37
    }
    // add a new item to the hash table
    this.put = function(key,value){
        var position = loseloseHashCode(key);
        console.log(position+ ' - '+ key)
        table[position] = value
    }
    this.remove = function(key){
        table[position]=value;
    }
    this.remove = function(key){
        table[loseloseHashCode(key)]=undefined
    }
    this.get = function(key){
        return table[loseloseHashCode(key)];
    }
    this.print = function(){
        for(var i =0;i<table.length;++i)
        {
            if(table[i] !== undefined){
                console.log(i+" : "+table[i]);
            }
        }
    }

}
var hash = new HashTable();
hash.put('MrMark','mrmark@gmail.com');
hash.put('sandeep','mark52@gmail.com')
hash.put('bore','iBored@iFeelNotGood.anyMore')

console.log('---------------')
console.log(hash.get('MrMark'))
console.log(hash.get('sandeep'))
console.log(hash.get('bore'))

console.log('++++++++++++++++++++')
hash.print();