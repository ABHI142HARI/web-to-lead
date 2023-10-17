function submitHandler(){
    let inputdate= document.querySelector(".inputHandler");
    let outPutDate= document.querySelector(".outputHandler");
    console.log("inputDate value",inputdate.value);
    let formatedDate= new Date(inputdate.value).toLocaleDateString("en_US");
    outPutDate.value = formatedDate;

}