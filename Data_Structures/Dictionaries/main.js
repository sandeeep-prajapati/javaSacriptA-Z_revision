function Dictionary(){
    var items = {}
    this.set  = function(key,value){
        items[key]=value;
    }
    this.delete = function(key){
        if(this.has(key)){
            delete items[key];
            return true
        }
        return false
    }
    this.has = function(key){
        return key in items;
    }
    this.get = function(key){
        return this.has(key)?items[key]:undefined
    }
    this.getItems = function(){
        return items;
    }
    this.size = function(){
        return Object.keys(items).length
    }
    this.keys = function () {
        return Object.keys(items);
    };
    this.values = function(){
        var values = []
        for(var k in items){
            if(this.has(k)){
                values.push(items[k])
            }
        }
        return values
    }
}
var dict = new Dictionary();
dict.set('mark','mark@gmail.com')
dict.set('tony','tony@stark.com')
dict.set('hero','hero@hamara.com')
console.log(dict.keys())
console.log(dict.values())
console.log(dict.get('mark'))

dict.delete('hero')
console.log(dict.values())
console.log(dict.keys())
console.log('++++++++')
console.log(dict.getItems())
console.log(dict.size())