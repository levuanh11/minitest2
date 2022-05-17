// function bai3() {
//     creatArray()
//     let sum = 0
//     for (let i = 0; i < array.length;) {
//         let check = false
//         for (let j= 2; j<array[i]; j++){
//             if (array[i]%j===0){
//                 check=true
//                 break
//             }
//         }
//         if (!check){
//             sum += array[i]
//         }
//         i++
//     }
//     console.log("sum="+ sum)
// }
function bai3() {
    creatArray()
    let sum = 0
    for (let i = 0; i < array.length;) {
        let check = false
        for (let j= 2; j<array[i]; j++){
            if (array[i]%j===0){
                check=true
                break
            }
        }
        if (!check){
            sum += array[i]
        }
        i++
    }
    console.log(array)
    console.log("tổng sốguyên tố    : " + sum)
}