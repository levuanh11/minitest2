function bai1(){
    creatArray()
    let count = 0
    for (let i =0 ; i < array.length;i++) {
        if ( array[i]%2 === 0) {
            count++;
        }
    }
    document.write("count=" + count)
}

