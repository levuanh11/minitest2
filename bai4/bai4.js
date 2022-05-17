function bai4(){
    let sum =0
    let n=2
for (let i = 0; i < 500;i++) {
    let check = false
    for (let j= 2; j<n; j++){
        if (n%j===0){
            check=true
            break
        }
    }
    if (!check){
        sum += n
    }
    n++
}
    document.write("Tổng SNT <500 :" + sum)
}
