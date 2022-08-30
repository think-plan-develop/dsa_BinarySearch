
// let arr=[10,3,25,50,20];

//TODO traversing
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i],"\n")
// }
//TODO insertion

// arr[3]=7773;
// arr.push(23)
// console.log(arr)

// TODO  Insert an element at a particular index in an array

// !---splice method
function spliceMethod(arr,position,newElement){
    if(position<=arr.length && position>=0){
        console.log("position",position)
        for(i=arr.length-1;i>=0;i--){
           /*  console.log(arr[i]) */
            if(i>=position){
                arr[i+1]=arr[i];
                if(i===position){
                    arr[position]=newElement;
                }
            }
        }
    }
    else{
        console.log("invalid Position\n")
    }
    console.log(arr)
    }
    
    spliceMethod([20,30,40,50,60],2,100)
    
    
    
    // TODO  DELETE AN ELEMENT at particular index in an array
     
    // let a=[2,4,5,6,78,8];
    // let po=1;
    // if(po<=a.length && po>=0){
    //     for(var i=0;i<a.length-1;i++)
    //     {
    //          if(i>=po)
    //         {
    //                 a[i]=a[i+1]  
    //         } 
    //     }
    //     a.length=a.length-1;
    // }
    // console.log(a)
    
    // TODO Merge (i). array2 merge in array1
    // let a1=[2,3,22,21,2,22];
    // let a2=[4,4,444,44,33,44,34];
    
    // let newA=[];
    // let l=a1.length-1;
    // for(var i=0;i<a2.length;i++){
    //     a1[l+i+1]=a2[i];
    // }
    // console.log(a1)
    // TODO(ii). array1 merge in array1
    // !vice---versA
    
    
    
// TODO  BInary search
    
    // let arr=[1,23,44,55,77,88,98,121,222,334,454,999,1000];
    // var target=999;
    function binarySearch(arr,target){
    var  start=0;
    var  end=arr.length-1;
    while(start<=end){
        var mid=parseInt((start+end)/2);
        //! or var mid = parseInt((start+(end-start)/2)); for large array
        if(target>arr[mid]){
            start=mid+1
        }
        else if(target<arr[mid]){
            end=mid-1;
        }
        else {
            console.log("find the element")
            return target
        }
    }
    return -1
    }
    binarySearch(arr,target)
    
    
    // TODO  Order-Agnostic Binary Search
    // (i) How do you know array is sorted in ascending order or descending order
            // given :array is sorted;
            [2,35,65,77,77,665]
                // if any two number compare then it could 3rd and 4th position then both is 77 ans 77
                // ! best:> compare with first and last
    
                //! code:
        
                // var aarr=[999,777,332,44,23,17,7,2];
                // var target=777;
                
                function OrderAgnosticBinarySearch(aarr,target){
                var start=0;
                var end=aarr.length-1;
                
                function isAscending(){
                    if(aarr[0]<aarr[aarr.length-1]){
                        return true
                    }
                }
                while(start<=end){
                    let mid=parseInt((start+end)/2);
                    if(aarr[mid]===target){
                        console.log("find the element",mid)
                        return mid
                    }
                    else if(isAscending()){
                            if( target>aarr[mid] ){
                                start=mid+1
                            }
                            else if(target<aarr[mid]){
                                end=mid-1
                                }
                        }
                    else {
                        if( target<aarr[mid]){
                            start=mid+1
                            }
                         else if( target>aarr[mid]){
                        end=mid-1
                            }
                        }
                }
                return -1
                }
                
                OrderAgnosticBinarySearch(aarr,target);
                
                
        
    
                //TODO Celling of a number
    var arr=[2,3,5,9,14,14,14,16,18];
    var target=14
    // ceeling -> smallest Element in an arrya greater or equal to the target Element
    // means-> smallest Number greater than 15  -> ans 16  as for 6 ->ans:9
    function cellingBinary(arr,target){
    var ceil;
    let start=0;
    let end=arr.length-1;
    while(start<=end){
    let mid=parseInt((start+end)/2);
        if(arr[mid]===target){
            console.log(arr[mid],"::target")
            ceil = arr[mid];
            return arr[mid];
        }
        else if (target < arr[mid]) {
            // a[mid] is the smallest element found so far that is greater than target. So it is a candidate for the ceiling of target
            ceil = arr[mid];
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    console.log(ceil,"ans:")
    return ceil
    }
    cellingBinary(arr,target)
    
    
    // TODO floor number
    // let arr=[1,4,6,8,10,32,34,54,60];
    // let target=56;
    
    function floorBinary(arr,target)
    {
    let start=0;
    let end=arr.length-1;
    let floor;
    
    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(arr[mid]===target){
            console.log(arr[mid],"::target")
            floor=arr[mid];
            return arr[mid];
        }
        else if (target < arr[mid]) {
            end = mid-1;
        } else {
            //! a[mid] is the largest element found so far that is smaller than target. So it is a candidate for the floor of target
            floor = arr[mid]; 
            start = mid+1;
        }
    }
    console.log(floor,"ans:")
    return floor
    }
    floorBinary(arr,target)
    
    
    //TODO-> minimum difference element in sorted Array
    
    
    let arr=[1,4,6,8,10,32,34,54,60];
    let target=44;
    
    function minDif(arr,target){
        let ans;
        let start=0;
        let end=arr.length-1;
        while(start<=end){
            let mid=parseInt((start+end)/2);
            if(arr[mid]===target){  
                ans=arr[mid];
                return ans;
            }
            else if(target>arr[mid]){
                        start=mid+1;
                        if(target>arr[mid]&& target<arr[mid+1]){
                            let g1=target-arr[mid];
                            let g2=arr[mid+1]-target;
                            if(g1>g2){
                                console.log(arr[mid+1])
                                return g1
                            }
                            else if(g1===g2){
                                console.log("both are equal",arr[mid],arr[mid+1]);
                            }
                            else{
                                console.log(arr[mid])
                                    return g1
                            }
                         } 
                        ans=arr[mid]
            }
            else{
                end=mid-1;
            }
        }
        return ans
    }
    minDif(arr,target)
    
    // TODO find-smallest-letter-greater-than-target
    
    // let arr=['b','c','f','h','l','m','q','r','u','x','y'];
    // let target='a';  ans->b  if target=z ans:->b  if target=d ans->f
    
    var nextGreatestLetter = function(letters, target) {
        let start=0;
    let end=letters.length-1;
    let result;
    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target<letters[0]){
            result=letters[0]
            return result
            // return -1
        }
        else if(target>=letters[mid]){
            start=mid+1;
            if(letters[mid+1] === null || letters[mid+1]  === undefined ){
                result=letters[0]
                }
            else{
                result=letters[mid+1]
            }
        }
        else if(target<letters[mid]){
                end=mid-1
        }
       
    }
         return result;
    };