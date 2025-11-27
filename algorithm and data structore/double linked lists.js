class Node {
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.length=0;
        this.tail=null;
        this.head=null;
    }
    push(val){
        var newNode=new Node(val);
        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    pop(){  
        if(this.length===0) return undefined;

        const poppedNode=this.tail;
        if(this.length===1){
            this.tail=null;
            this.head=null;    
        }else{
            this.tail=poppedNode.prev;
            this.tail.next=null;
            poppedNode.prev=null;
        }
        this.length--;
         return poppedNode
    }

    shift(){
        if(this.length===0) return undefined
        const shiftedNode=this.head;
        if(this.length===1){
            this.tail=null;
            this.head=null;
        }else{
            this.head=shiftedNode.next;
            this.head.prev=null;
            shiftedNode.next=null;
        }
        this.length--;
        return shiftedNode;
    }

    unshift(val){
        let newNode=new Node(val)
        if(this.length===0){
            this.head=newNode;
            this.tail=this.head;
        }else{
            newNode.next=this.head;
            this.head.prev=newNode; 
            this.head=newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if( index<0 || index>=this.length)return null
        const middle=Math.floor(this.length/2);
        if(index<=middle){
            let current=this.head;
            let counter=0;
            while (counter!==index){
                current=current.next;
                counter++;
            }
            return current
        }else if(index>middle){
            let current=this.tail;
            let counter=this.length-1;
            while (counter!==index){
                current=current.prev;
                counter--;
            }
            return current
        } 
    }

    set(index,val){
        const foundNode=this.get(index);
        if(foundNode===null && index===this.length){
            this.push(val);
            return true;
        }
        if(foundNode!==null){
            foundNode.val=val;  
            return true
        }
        return false
    }

    insert(index,val){
        if(index<0 || index>this.length) return false
        if(index===0){
            const unshift=this.unshift(val);  
            return unshift?true :false
        }
        if(index===this.length){
            const pushed=this.push(val);
            return pushed ? true:false
        }
        let newNode=new Node(val);
        let prev=this.get(index-1);
        let next=prev.next;
        prev.next=newNode;
        newNode.next=next;
        newNode.prev=prev;
        next.prev=newNode;
        this.length++;
        return true
    }

    remove(index,val){
        if(index<0 || index>=this.length) return false
        if(index===0){
            return this.shift
        }
        if(index===this.length-1){
            return this.pop()
        }
        const removedNode=this.get(index);
        removedNode.prev.next=removedNode.next;
        removedNode.next.prev=removedNode.prev;
        removedNode.prev=null;
        removedNode.next=null;
        this.length--;
        return removedNode
    }


    reverse(){
        const oldHead=this.head;
        const oldtail=this.tail;
        let current=this.head
        for(let i=0;i<this.length;i++){
            console.log("CURRENT",current)
           const next=current.next;
           const prev=current.prev;
            current.prev=next;
            current.next=prev;
            console.log("CURRENT AFTER CJANGe",current)
            current=current.prev;         
        }
        console.log(oldHead);
        console.log(oldtail);
        console.log("current",current)
        this.tail=oldHead;
        this.head=oldtail;
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


}

    let doublyLinkedList = new DoublyLinkedList;
    doublyLinkedList.push(5).push(10).push(15).push(20)
    doublyLinkedList.print()
    doublyLinkedList.reverse(); // singlyLinkedList;
     doublyLinkedList.print()
   console.log(doublyLinkedList.length) ; // 4
    console.log(doublyLinkedList.head.val); // 20
    console.log(doublyLinkedList.head.next.val); // 15
    console.log(doublyLinkedList.head.next.next.val); // 10
   console.log(doublyLinkedList.head.next.next.next.val); // 5


