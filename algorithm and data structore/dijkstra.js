class PriorityQueue {
    constructor(){
        this.values=[];
    }

    enqueue(val,priority){
        this.values.push({val,priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b)=>a.priority-b.priority)
    }
}




class WeightedGraph{
    constructor(){
       this.adjacencyList={};//"A"=[{node:"B",weight:10}] example of a node
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])this.adjacencyList[vertex]=[];
        
    }

    addEdge(vertexOne,vertexTwo,weight){
        if(!this.adjacencyList[vertexOne] ||  !this.adjacencyList[vertexTwo]) return undefined;
        if(!this.adjacencyList[vertexOne].some(e => e.node === vertexTwo)) this.adjacencyList[vertexOne].push({node:vertexTwo,weight});
        if(!this.adjacencyList[vertexTwo].some(e => e.node === vertexOne))this.adjacencyList[vertexTwo].push({node:vertexOne,weight});

        //alternative that also update weight
        /*
        const list = this.adjacencyList[vertexOne];
        const i = list.findIndex(e => e.node === vertexTwo);
        if (i === -1) list.push({ node: vertexTwo, weight });
        else list[i].weight = weight;
        */
    }

    Dijkstra(start,finish){
        const nodes=new PriorityQueue;
        const distances={};
        const previous={};
        //initialize distances,previous,nodes
        let path=[];
        let smallet;
        for(let vertex in this.adjacencyList){
            if(vertex===start){
                distances[vertex]=0;
                nodes.enqueue(vertex,0);
            }else{
                distances[vertex]=Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex]=null;
        }
        //as lon there is something to visit
        while(nodes.values.length){
            smallet=nodes.dequeue().val;
            if(smallet===finish){
                //buld up pat the return at the end
                console.log("previous",previous)
                while(previous[smallet]){
                    path.push(smallet);
                    smallet=previous[smallet];
                }
                break;
            }
            if(smallet && distances[smallet]!==Infinity){
                for(let neighbor in this.adjacencyList[smallet]){
                    let nextNode=this.adjacencyList[smallet][neighbor];//neighbor nodes
                    let candidate=distances[smallet]+nextNode.weight;
                    let nextNeighbor=nextNode.node
                    if(candidate<distances[nextNeighbor]){
                        //update new smalled stustance no neighbor
                        distances[nextNeighbor]=candidate;
                        //update previous how we got to neighbor
                        previous[nextNeighbor]=smallet;
                        nodes.enqueue(nextNeighbor,candidate);
                    }   
                };
                
            }
        }

        console.log("ourpath",path.concat(smallet).reverse());
        return path.concat(smallet).reverse();
    }



}

    var g = new WeightedGraph()
     
    g.addVertex('A');
    g.addVertex('Z');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('H');
    g.addVertex('Q');
    g.addVertex('G');
     
    g.addEdge('A', 'Z', 7)
    g.addEdge('A', 'C', 8)
     
    g.addEdge('Z', 'Q', 2)
     
    g.addEdge('C', 'G', 4)
     
    g.addEdge('D', 'Q', 8)
     
    g.addEdge('E', 'H', 1)
     
    g.addEdge('H', 'Q', 3)
     
    g.addEdge('Q', 'C', 6)
     
    g.addEdge('G', 'Q', 9)
     
    g.Dijkstra('A','E') // ["A", "Z", "Q", "H", "E"]
    g.Dijkstra('A','Q') // ["A", "Z", "Q"]
    g.Dijkstra('A','G') // ["A", "C", "G"]
    g.Dijkstra('A','D') // ["A", "Z", "Q", "D"]