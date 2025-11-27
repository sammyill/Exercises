class Node {
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length=0;
        this.tail=null;
        this.head=null;
    }
    push(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    pop(){  
        if(!this.head) return undefined;
        let newTail=this.head;
        let current=this.head;     
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined
        let  currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if(this.length===0)this.tail=null
        return currentHead;
    }

    unshift(val){
        let newNode=new Node(val)
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            newNode.next=this.head;
            this.head=newNode;       
        }
        this.length++;
        return this;
    }
    get(index){
        if( index<0 || index>this.length)return null
        console.log("dio porco")
        let current=this.head;
        let counter=0;
        while (counter!==index){
            current=current.next;
            counter++;
        }
        return current
    }
    set(index,val){
        const foundNode=this.get(index);
        console.log("INDEX LASTITEM",index,this.length)
        if(foundNode===null && index===this.length){
            this.push(val);
            console.log(true)
            return true;
        }
        console.log("foundNode",foundNode)
        if(foundNode){
            foundNode.val=val;
            console.log(true)
            return true
        }
        console.log(false)
        return false
    }

    insert(index,val){
        if(index<0 || index>this.length) return false
        if(index===0){
            const unshift=this.unshift(val);  
            //return !!unshift  
            return unshift?true :false
        }
        if(index===this.length){
            const pushed=this.push(val);
            //return !!pushed
            return pushed ? true:false
        }
        let newNode=new Node(val);
        let prev=this.get(index-1);
        let temp=prev.next;
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return true
    }
    remove(index,val){
        if(index<0 || index>this.length) return false
        if(index===0){
            return this.shift
        }
        if(index===this.length-1){
            return this.pop()
        }
        const prevNode=this.get(index-1);
        var removed=prevNode.next;
        prevNode.next=removed.next;
        this.length--;
        return removed


    }
    reverse(){
        const node=this.head;
        this.head=this.tail;
        this.tail=node;
        let next=null;
        let prev=null;

        for(let i=0;i<this.length;i++){
            next=node.next;
            node.next=prev;
            prev=node;
            node=next;
        }
        return this

    }

    print(){
        var arr=[];
        var current=this.head;
        while(current){
            arr.push(current.val);
            current=current.next
        }
        console.log(arr);
    }
    rotateVero(rotate) {
        if(rotate===0)return null
        const nRoration=Math.floor(rotate) % this.length;
        if(nRoration===0)return null

        if(nRoration>=1){
            let newTail=this.head;
           
            for(let i=1;i<this.length-nRoration;i++){
                newTail=newTail.next;     
            }
            const newHead=newTail.next
            this.tail.next=this.head;
            this.head=newHead;
            newTail.next=null;
            this.tail=newTail;
        }else if(nRoration<=-1){
            let newTail=this.head;
            for(let i=1;i<Math.abs(nRoration);i++){
                newTail=newTail.next;
            }
            const newHead=newTail.next;
            this.tail.next=this.head;
            newTail.next=null;
            this.tail=newTail;
            this.head=newHead;
           
        }
        
    }

    //patacca stupida
    rotate(rotate) {
        if(rotate===0)return null
        const nRoration=Math.floor(rotate) % this.length;
        if(nRoration===0)return null

        if(nRoration>=1){
            let newTail=this.head;
           
            for(let i=0;i<this.length-nRoration;i++){

                newTail=newTail.next;     
            }

            const newHead=newTail.next;
            this.tail.next=this.head;
            newTail.next=null;
            this.tail=newTail;
            this.head=newHead
        }else if(nRoration<=-1){//da modificare
            let newTail=this.head;
            for(let i=1;i<this.length-Math.abs(nRoration);i++){
     
                newTail=newTail.next;
            }
           
            const newHead=newTail.next;
            this.tail.next=this.head;
            newTail.next=null;
            this.tail=newTail;
            this.head=newHead;
           
           
        }
        
    }



}


class Stack{
    constructor(){
        this.size=0;
        this.last=null;
        this.first=null;
    }

    pop(){
        if(!this.first) return undefined
        let  temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }
        this.first=this.first.next
        this.size--;
        return temp.value;
    }

    push(val){
        let newNode=new Node(val)
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
            const temp=this.first;
            this.first=newNode;
            this.first.next=temp;
        }
        this.size++;
        return this.size;
    }
   
}

class Queue{
    constructor(){
        this.size=0;
        this.last=null;
        this.first=null;
    }

    dequeue(){
        if(!this.first) return undefined
        let  temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }
        this.first=this.first.next;       
        this.size--;
        return temp.value;
    }

    enqueue(val){
        let newNode=new Node(val)
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
           this.last.next=newNode;
           this.last=newNode
        }
        this.size++;
        return this.size;
    }
   
}
