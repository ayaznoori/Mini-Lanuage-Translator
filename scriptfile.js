let id;
async function trans(){
    const textinput=document.getElementById("inputtext").value;
    const inputopt=document.getElementById("inputopt").value;
    const outputopt=document.getElementById("outputopt").value;
    try{
        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
            q: textinput,
            source: inputopt,
            target: outputopt,
            format: "text"
            }),
            headers: { "Content-Type": "application/json" }
});

   let result = await res.json();
   return result.translatedText
  /*  console.log(result)
   document.querySelector("#outputtext").value=result.translatedText; */
    }
    catch(err){
        console.log(err)
    }
}
    async function disp(data){
        document.querySelector("#outputtext").value=data; 

    }  
    

async function main(){
   let data = await trans();
   if(data==undefined)
   return false;
   else
    disp(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
     document.querySelector("#outputtext").value=".";
     setTimeout(()=>{
        document.querySelector("#outputtext").value="..";
     },500)
     setTimeout(()=>{
        document.querySelector("#outputtext").value="...";
     },1000)
    id = setTimeout(() => {
       func(); 
    },delay);

}