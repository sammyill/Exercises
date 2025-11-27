class Graph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vortex){
        if(!this.adjacencyList[vortex])this.adjacencyList[vortex]=[];
    }

    addEdge(vortexOne,vortexTwo){
        if(!this.adjacencyList[vortexOne] ||  !this.adjacencyList[vortexTwo]) return undefined;
        if(!this.adjacencyList[vortexOne].includes(vortexTwo)) this.adjacencyList[vortexOne].push(vortexTwo);
        if(!this.adjacencyList[vortexTwo].includes(vortexOne))this.adjacencyList[vortexTwo].push(vortexOne);
    }

    removeEdge(vortexOne,vortexTwo){
        if(!this.adjacencyList[vortexOne] ||  !this.adjacencyList[vortexTwo]) return undefined;
        this.adjacencyList[vortexOne]=this.adjacencyList[vortexOne].filter((edge)=>edge!==vortexTwo);
        this.adjacencyList[vortexTwo]=this.adjacencyList[vortexTwo].filter((edge)=>edge!==vortexOne);
    }

    removeVertex(vortex){
        if(!this.adjacencyList[vortex]){
            console.log("undefined");
            return undefined
        }
        console.log("REMOVING", this.adjacencyList[vortex]);
        while(this.adjacencyList[vortex].length){
            const adjacentVortex=this.adjacencyList[vortex].pop();
            this.removeEdge(vortex,adjacentVortex);
        }
        delete this.adjacencyList[vortex];
    }

    depthFirstRecursive(start){
        const result=[];
        const visited=[];
        const adjacencyList=this.adjacencyList

        (function dfs(vortex){
            if(!vortex){
                return null
            }
            visited[vortex]=true;
            result.push(vortex);
            adjacencyList[vortex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });

        })(start)

        return result
    }

    depthFirstIterative(start){
        const visited={};
        const result=[];
        const stack=[start];
        let currentVortex;

        visited[start]=true;
        while(stack.length){
            currentVortex=stack.pop();
            result.push(currentVortex);

            this.adjacencyList[currentVortex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true;
                    stack.push(neighbor);
                }
            })
        }
        return result
    }

    breadthFirst(start){
        const visited={};
        const result=[];
        const queue=[start];
        let currentVortex;

        visited[start]=true;
        while(queue.length){
            currentVortex=queue.shift();
            result.push(currentVortex);

            this.adjacencyList[currentVortex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true;
                    queue.push(neighbor);
                }
            })
        }
        return result
    }
    Dijkstra(startingVertex,endingVertex){
        //set all vertex to infinity and start to 0
        const distances={};
        const priorityQueue=new PriorityQueue;
        //set all vertex to null
        const previous={};


    }



}


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