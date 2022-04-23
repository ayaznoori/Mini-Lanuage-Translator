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
   console.log(result)
   document.querySelector("#outputtext").value=result.translatedText;
    }
    catch(err){
        console.log(err)
    }
      
    
}