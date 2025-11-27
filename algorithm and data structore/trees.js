class Node {
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    insert(value){
        var newNode=new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this
        }else{
            var current=this.root;
            let i=0;
            while(true){           
                if(value===current.value){
                    return undefined
                }
                if(value<current.value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }else{
                        current=current.left;
                    }
                }
                if(value>current.value){
                    if(current.right===null){
                        current.right=newNode;        
                        return this
                    }else{
                        current=current.right
                    }
                }

            }
             
        }

    }   
    find(value){
        if(this.root===null)return false
        let current=this.root;
        let found=false;
        
        while(current && !found){
           
            if( value > current.value ){
              
                current=current.right;   
            }else  if( value < current.value ){
                current=current.left;
            }else{
                found=true
            }
        }
        console.log("current",current)
        if(!found)return undefined;      
        return current ;
    }

    findParent(value){
        if(this.root===null)return false
        let current=this.root;
        let found=false;
        
        while(current && !found){
            console.log("current",current);
            if(value===current?.left?.value || value===current?.right?.value){
                found=true
            }else if( value > current.value ){
                current=current.right;   
            }else  if( value < current.value ){
                current=current.left;
            }
        }
        if(!found)return undefined;      
        return current ;
    }

    remove(value){
        let parent=this.findParent(value);
        const isLeft=parent?.left?.value===value;
        const isRight=parent?.right?.value===value;
        let nodeToRemove=isLeft? parent.left:parent.right;
        
        if(!nodeToRemove)return undefined
       
        //if has two child:minium element in the right subtree of the node to remove
        if(nodeToRemove.left && nodeToRemove.right){
          
            let replacementParent=nodeToRemove;
            let repleacement=nodeToRemove.right;
            while(repleacement.left){
                replacementParent=repleacement;
                repleacement=repleacement.left;
            }
            nodeToRemove.value=repleacement.value;//new value for node to remove
           if (replacementParent.left === repleacement) {
                replacementParent.left = repleacement.right;
            } else {
                replacementParent.right = repleacement.right;
            }
        }else if(nodeToRemove.left || nodeToRemove.right){ //if has one chield
            const child = nodeToRemove.left || nodeToRemove.right;

            if (isLeft)  parent.left  = child;
            if (isRight) parent.right = child;
            
        }else {//if has no child
            if(isLeft)parent.left=null;
            if(isRight)parent.right=null;
        }
       
    }

    contains(value){
        if(this.root===null)return false
        let current=this.root;
        let found=false;
      
        while(current && !found){
            console.log("current",current)
            if(current.value>value){
                current=current.right;   
            }else  if(current.value<value){
                current=current.left;
            }else{
                return true
            }
        }   
        return false 
    }

    BFS(){
        const queue=[];
        const data=[];
        let node=this.root
        queue.push(node);
        while(queue.length){
            node =queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data

    }

    ModifiedBFS(){
        const queue=[];
        const data=[];
        let node=this.root
        queue.push(node);
        while(queue.length){  
            node =queue.shift();
            if(node){//if the node exist push left and righth
                queue.push(node.left);
                queue.push(node.right);
                data.push(node.value);
            }else{
                data.push(null);
            }
        }
        console.log("data",data);
        return data

    }


    isBalanced(){
        const treeData=this.ModifiedBFS();
        
        let i=0;
        let j=1;
        while(i<treeData.length){
            const depthSlice=treeData.slice(i,j);
            if(depthSlice.includes(null)){//last stop next need to be empty or all null
                const afterLast=treeData.slice(j,j*2+1);
                if(afterLast.length>0 && afterLast.some(v => v !== null)){
                    console.log("false");
                    return false
                }
                console.log("last depthSlice",depthSlice);
                 console.log("next after last",treeData.slice(j,j*2+1))
                /*
                if(treeData.length-1>j){
                    console.log("false");
                    return false
                    
                } */
            }
            i=j;//new slice start
            j=j*2+1;//new slice end
        }
        console.log("true");
        return true
       
    }

    DFSPreOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
        }
        traverse(current);
        return data
    }

    
    DFSPostOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data
    }

    DFSInOrder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            if(node.left)traverse(node.left);
            data.push(node.value);
            if(node.right)traverse(node.right);
           
        }
        traverse(current);
        return data
    }


    findSecondLargest(){
        if(!this.root)return undefined //no root
        if(!this.root.left && !this.root.right)return undefined //no left or right of the root 

        let current=this.root;
        let secondLargest=(this.root.right &&this.root.value) ||(this.root.left && this.right.value);

        while(current){
            const left=current.left;
            const right=current.right;
            if(right){
                secondLargest=current.value;
                current=right;
            }else if(left){
                secondLargest=left.value;
                current=left;
            }else{
                current=null
            }
        }
        return secondLargest
    }

    findSecondLargestV2() {
  if (!this.root || (!this.root.left && !this.root.right)) return undefined; // 0 or 1 node

  // Walk to the rightmost (largest), track parent
  let parent = null;
  let current = this.root;
  while (current.right) {
    parent = current;
    current = current.right;
  }

  // current is the largest
  // If it has a left subtree, the 2nd largest is the max in that subtree
  if (current.left) {
    let n = current.left;
    while (n.right) n = n.right;
    return n.value;
  }

  // Otherwise the parent is the 2nd largest
  return parent ? parent.value : undefined;
}


  
}


    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);

    binarySearchTree.remove(50);
    console.log("TEST ONE");
    console.log(  binarySearchTree.root.right.value );//20
    console.log(binarySearchTree.root.right.right) // null
    binarySearchTree.remove(5);
    console.log(binarySearchTree.root.left.left.value);// 1
    console.log(binarySearchTree.root.left.left.right); // null
    console.log("TEST TWO");
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    binarySearchTree.remove(1);
    console.log(binarySearchTree.root.left.left.value) // 5
    console.log(binarySearchTree.root.left.left.left); // null
    console.log(binarySearchTree.root.left.left.right);// null
    binarySearchTree.remove(20);
    console.log(binarySearchTree.root.right.value); // 50
    console.log(binarySearchTree.root.right.right); // null
    console.log(binarySearchTree.root.right.left) // null
    console.log("TEST THREE")
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50)
        .insert(60)
        .insert(30)
        .insert(25)
        .insert(23)
        .insert(24)
        .insert(70);
     
    binarySearchTree.remove(10);
    console.log(binarySearchTree.root.left.value) // 12
    console.log(binarySearchTree.root.left.left.value) // 1
    console.log(binarySearchTree.root.left.left.right.value) // 5
     
    binarySearchTree.remove(50);
    console.log(binarySearchTree.root.right.value) // 20
    console.log(binarySearchTree.root.right.right.value) // 60
    console.log(binarySearchTree.root.right.right.left.value) // 30
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(22)
        .insert(49)
        .insert(85)
        .insert(66)
        .insert(95)
        .insert(90)
        .insert(100)
        .insert(88)
        .insert(93)
        .insert(89)
    var binarySearchTree = new BinarySearchTree();

    binarySearchTree
        .insert(22)
        .insert(49)
        .insert(85)
        .insert(66)
        .insert(95)
        .insert(90)
        .insert(100)
        .insert(88)
        .insert(93)
        .insert(89)
     
    binarySearchTree.remove(85);
    console.log(binarySearchTree.root.right.right.value) // 88
    console.log(binarySearchTree.root.right.right.right.left.left.value) // 89
      /*
 
   
     
    
    */