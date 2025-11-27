const swap=(arr,swapIdx,i)=>{
    let temp=arr[i];
    arr[i]=arr[swapIdx];
    arr[swapIdx]=temp;
}

function pivot(arr, comparator=false, start=0, end=arr.length - 1){
  let pivot=arr[start];
  let swapIndex=start;
  for (let i=start+1;i<arr.length;i++){
    if(comparator && typeof comparator==="function"){
        if(comparator(pivot,arr[i])>0){
            swapIndex++;
            swap(arr,swapIndex,i);
        }
    }else if(pivot>arr[i]){
        swapIndex++;
        swap(arr,swapIndex,i);
    }
  }
  swap(arr,start,swapIndex)
  return swapIndex
}

function quickSort(arr, comparator=false,left=0,right=arr.length - 1) {

    if(left<right){
        let pivotIndex=pivot(arr,comparator,left,right);
        quickSort(arr,comparator,left,pivotIndex-1);
        quickSort(arr,comparator,pivotIndex+1,right);
    }
    return arr
}




    quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
    quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
    quickSort([1, 2, 3]); // [1, 2, 3]
    quickSort([]);
     
    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
     
    var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
    function strComp(a, b) {
      if (a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
    }
     
    quickSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
     
    var moarKittyData = [{
      name: "LilBub",
      age: 7
    }, {
      name: "Garfield",
      age: 40
    }, {
      name: "Heathcliff",
      age: 45
    }, {
      name: "Blue",
      age: 1
    }, {
      name: "Grumpy",
      age: 6
    }];
     
    function oldestToYoungest(a, b) {
      return b.age - a.age;
    }
     
    quickSort(moarKittyData, oldestToYoungest); // sorted by age in descending order


/*
var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
function strLength(a, b) {
    return a.length - b.length
}
     
pivot(arr1); // 3
pivot(arr2); // 4
pivot(arr3, strLength); // 1
     
arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]
     
 arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
 arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]
     
arr3.slice(0, 1).sort(strLength); // ["Blue"]
arr3.slice(1).sort(strLength); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]
*/