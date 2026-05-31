const labelPass= document.getElementById("pass")
const labelPassage= document.getElementById("passage")
const labelname= document.getElementById("name")
const labelcode= document.getElementById("code")
const inputPass = document.getElementById("intpass")
const inputcode = document.getElementById("intcode")
const inputPassage= document.getElementById("intpassage")
const inputname= document.getElementById("intname")
const btm = document.getElementById("sub")
const submit = document.getElementById("subm")

labelcode.addEventListener("click",()=>{
    inputcode.focus()
});
labelPass.addEventListener("click",()=>{
    inputPass.focus()
});
labelname.addEventListener("click",()=>{
    inputname.focus()
});
labelPassage.addEventListener("click",()=>{
inputPassage.focus()
});

inputPass.addEventListener("focus",()=>{
    labelPass.className = "label"
});
inputcode.addEventListener("focus",()=>{
    labelcode.className = "label"
});
inputname.addEventListener("focus",()=>{
    labelname.className = "label"
});
inputPassage.addEventListener("focus",()=>{
    labelPassage.className = "label"
});

btm.addEventListener("click",()=>{
    console.log("ok")
    if (inputPass.value === inputPassage.value && inputPass !== "") {
        if (inputcode.value.length === 11) {
            if (inputPass.value.length>7) {
               if (inputcode in user ) {   
                alert("این کد دانشجویی قبلا ثبت نام کرده است. اگر رمز را فراموش کردید با پشتیبانی تماس بگیرید")
            }else{
                document.getElementById("tk").value = "https://zolalandisheqom.github.io/university/thank.html?name="+inputname.value
                submit.click()
            }  
            }else{
                alert("رمز عبور باید حداقل 8 نویسه داشته باشد")
            }
           

        }else{
            alert("فرمت کد دانشجویی مشکل دارد")
        }
        
    }else{
        alert("در وارد کردن رمز عبور دقت بیشتری انجام دهید")
        inputPass.value = ""        
        inputPassage.value = ""
        inputPass.focus()
    }
})
document.addEventListener("keydown",(e)=>{
    if (e.key === "Enter") {
        btm.click()
    }
})
