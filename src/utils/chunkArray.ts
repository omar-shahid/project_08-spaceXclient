export const chunkArray = (arr: unknown[], size: number) => {
    const newArr = []
    for (let i=0; i<arr.length; i+= size){
       let chunk = []
       for (let j=0; j<size; j++){
           if(arr[i+j])
           chunk.push(arr[i+j])
       }
       newArr.push(chunk)
    }
    return newArr;
}