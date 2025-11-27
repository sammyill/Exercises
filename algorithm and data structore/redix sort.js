

function getDigit(num, i) {
  return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

function digitCount(num) {
 if(num===0) return 1 
 return Math.floor(Math.log10(Math.abs(num)))+1
}

function mostDigits(nums) {
  let maxDigits=0;
  nums.forEach((num)=>{
      maxDigits=Math.max(maxDigits,digitCount(num))
  })
  return maxDigits
}

function radixSort(nums) {
 let maxDigitsCount=mostDigits(nums);
 for(let k=0;k<maxDigitsCount;k++){
     let digitBuckets=Array.from({length:10}, () => []);
     for(let i=0;i<nums.length;i++){
         digitBuckets[getDigit(nums[i],k)].push(nums[i]);
     }
     nums=[].concat(...digitBuckets);
 }
 console.log(nums)
 return nums
 
}

    radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
    radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
    radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); 
    // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]