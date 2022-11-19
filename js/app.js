
const one = document.querySelector('#uzs');
const two = document.querySelector('#usd');

one.addEventListener('input' , function(){

    // 1. caqirib olish
    let XML = new XMLHttpRequest()

    // 2. sorov
    XML.open("GET" , "./json/arr.json")
    // 3 title heading 
    XML.setRequestHeader("Content-Type" , 'application/json; charset=utf-8' )
    // jonatish 
    XML.send()

    XML.addEventListener('load' , function(){
        if(XML.status == 200){
            const data = JSON.parse(XML.response)
            two.value = (+one.value / data.uzb).toFixed(2)
        }
    })

})

