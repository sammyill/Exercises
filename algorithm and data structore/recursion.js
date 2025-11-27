function stringifyNumbers(obj,newObj={}){
      for(const field in obj){
        if(typeof obj[field]==="number"){
            newObj[field]=String(obj[field])
        }else if((typeof obj[field] === 'object')){
            newObj[field]=obj[field]
            stringifyNumbers(obj[field],newObj[field])
        } else {
          newObj[field]=obj[field]
        }
     }  
    return newObj
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/