var arr = [5,6,2,7,9,3,1,4,8,0]

function bubbleSort(arr){
    let length = arr.length;
    for(var i=0;i<length;i++){
        for(var j=i+1;j<length;j++){
            if(arr[i]>arr[j]){
                var temp = arr[i];
                arr[i]=arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))