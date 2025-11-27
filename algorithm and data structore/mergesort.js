

function merge(arrA,arrB,fCompare=false){
    const merged=[];
    let i=0;
    let j=0;
    while(i<arrA.length && j<arrB.length){
        const arrAisLesser=fCompare ? fCompare(arrA[i],arrB[j])<=0 : arrA[i]<arrB[j];
        
        if(arrAisLesser){
            merged.push(arrA[i]);
            i++;
        }else{
            merged.push(arrB[j])
            j++;
        }    
            
    }
    //console.log("i,j",i,j)
    while(i<arrA.length){
        merged.push(arrA[i]);
        i++;
    }
    while(j<arrB.length){
        merged.push(arrB[j]);
        j++;
    }
    return merged
  
}

var arr1 = [1,3,4,5];
var arr2 = [2,4,6,8];
 console.log("test 1",merge(arr1,arr2)) // [1,2,3,4,4,5,6,8]
 
arr1 // [1,3,4,5];
arr2 // [2,4,6,8];
 
var arr3 = [-2,-1,0,4,5,6];
var arr4 = [-3,-2,-1,2,3,5,7,8];
 
 console.log("test 2",merge(arr3,arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
 
var arr5 = [3,4,5]
var arr6 = [1,2]
 
 console.log("test 3",merge(arr5,arr6))// [1,2,3,4,5]
 
var names = ["Bob", "Ethel", "Christine"]
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
 
function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}
 
console.log("test 4",merge(names, otherNames, stringLengthComparator));


function mergeSort( arrayToSort,compareFunction=false){
  if(arrayToSort.length<=1) return arrayToSort
  const midPoint=Math.floor(arrayToSort.length/2)
  const left=mergeSort(arrayToSort.slice(0,midPoint),compareFunction);
  const right=mergeSort(arrayToSort.slice(midPoint),compareFunction)
  return merge(left,right,compareFunction)

}


// Calls wrapped in console.logs
console.log("merge1", mergeSort([4, 20, 12, 10, 7, 9]));
console.log("merge2", mergeSort([0, -10, 7, 4]));
console.log("merge3", mergeSort([1, 2, 3]));
console.log("merge4", mergeSort([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log("merge5", mergeSort(nums));

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) { return -1; }
  else if (a > b) { return 1; }
  return 0;
}
console.log("merge6", mergeSort(kitties, strComp));

var moarKittyData = [
  { name: "LilBub", age: 7 },
  { name: "Garfield", age: 40 },
  { name: "Heathcliff", age: 45 },
  { name: "Blue", age: 1 },
  { name: "Grumpy", age: 6 }
];

function oldestToYoungest(a, b) {
  console.log("agecomparations",b.age,a.age,b.age - a.age)
  return b.age - a.age;
}
console.log("merge7", mergeSort(moarKittyData, oldestToYoungest));