function bai2(){
    creatArray()
    let a = "5"
    let count=0
    for (i=0;i<array.length;i++){
        if (array[i] == a ){
            count++;
        }
    }
    document.write("count=" + count)
}