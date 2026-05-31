
function rand(arry, n) {
    let copy = []
    
    for (let index = arry.length; index > 0; index--) {
       let j = Math.floor(Math.random()*(arry.length-1));
    
       
       copy.push(arry[j])
       
    }
    if (copy.includes(undefined)) {
        console.log("ok")
    }
    return copy.slice(0,n)
}

/// برای برداشتن صفخه
window.location.href="zolal.html?login=true&point="+rand(cofing,1)+"&claint="+rand(cofing,1)
/// ----------------------


const labelPass= document.getElementById("pass")
const labelcode= document.getElementById("code")
const inputPass = document.getElementById("intpass")
const inputcode = document.getElementById("intcode")
const btm = document.getElementById("sub")
const submit = document.getElementById("submite")

labelPass.addEventListener("click",()=>{
inputPass.focus()
})
labelcode.addEventListener("click",()=>{
inputcode.focus()
})
inputcode.addEventListener("focus",()=>{
labelcode.className="label"
})
inputPass.addEventListener("focus",()=>{
labelPass.className="label"
})

btm.addEventListener("click",()=>{
console.log(inputcode.value in user)
if (inputcode.value in user) {
 console.log("ok")
 if (inputPass.value === user[inputcode.value] ) {window.location.href="zolal.html?login=true&point="+rand(cofing,1)+"&claint="+rand(cofing,1)}
}else {
 alert("نتوانستیم حساب کاربری شما را پیدا کنیم، دوباره تلاش کنیدویا با پشتیبانی تماس بگیرید")
 submit.click()
}
})
document.addEventListener("keydown",(e)=>{
    if (e.key === "Enter") {
        btm.click()
    }
})

