// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Stack {
    constructor() {

        this.queueOne= new Queue();
        this.queueTwo=new Queue();
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val) {
        //const element=this.queueOne.first;
        if(this.size===0) this.queueOne.enqueue(val);
        else{

            this.queueTwo.enqueue(val);
             console.log("QUEUE 2 BEFORe",this.queueTwo)
            while(this.queueOne.first!== null){
                const value=this.queueOne.dequeue();
                this.queueTwo.enqueue(value);
            }
            console.log("QUEUE 2",this.queueTwo)
            while(this.queueTwo.first!==null){
                const value=this.queueTwo.dequeue();
                this.queueOne.enqueue(value);
            }
        }
       
        this.size++
        console.log(this.queueOne)
        return this
    }

    pop(){
        return this.queueOne.dequeue();
    }



    /*
     
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
        */
}


    var s = new Stack()
    s.push(10).push(20).push(30)
    
    console.log("POP 30",s.pop())  // 30
    console.log("POP 20", s.pop()) // 20
    console.log("POP 10",s.pop()) // 10
    console.log("POP null", s.pop())  // null
   
  
   

    s.push(30).push(40).push(50)
       console.log("POP 50",s.pop()) // 50
    s.push(60)
     console.log("POP 60",s.pop()) // 60
  