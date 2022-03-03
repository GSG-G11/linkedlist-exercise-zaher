function Node(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(array = []){
    this.head = null;
    this.tail = null;
    this.length = 0;

    if(Array.isArray(array)){
        array.forEach(el => {
            this.push(el);
        });
    }
}

DoublyLinkedList.prototype.push = function(val){
    
}

DoublyLinkedList.prototype.unshift = function(val){
    
}

DoublyLinkedList.prototype.insert = function(index, val){
    
}


DoublyLinkedList.prototype.getNode = function(index){
   
}

DoublyLinkedList.prototype.get = function(index){
    
}

DoublyLinkedList.prototype.set = function(index, val){
    
}

DoublyLinkedList.prototype.pop = function(){
    
}

DoublyLinkedList.prototype.shift = function(){
    
}

DoublyLinkedList.prototype.remove = function(index){
    
}

DoublyLinkedList.prototype.reverse = function(){
    
}