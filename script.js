function grading(){
// console.log("i am a newly created function");
const form = document.querySelector('form')
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const input = document.getElementById('input')
    let userInput = Number(input.value)
    const result = document.querySelector('.grade')
if(isNaN(userInput) || userInput < 0 || userInput > 100|| userInput==""){
    result.innerHTML='enter a valid mark'
}else{
    if(userInput<40){
        result.innerHTML= "Grade: Fail"
    } else if( userInput < 55){
    result.innerHTML= "Grade: Pass"
    } else if(userInput < 75){
        result.innerHTML= "Grade: Credit"
    }else{
        result.innerHTML= "Grade: Distinction"
    }
}
form.reset()
})
}
grading()