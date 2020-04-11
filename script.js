// var inst=[]'
var btn
window.addEventListener("load", function () {
    btn = this.document.getElementById("get")
    btn.addEventListener("click", getData)
})

function getData() {
    var xhr = new XMLHttpRequest()//now xhr is XMLHttp request object
    console.log(xhr)

    var url = "https://www.themealdb.com"
    var query = document.getElementById("getData").value
    xhr.open("GET", url + "/api/json/v1/1/search.php?s=" + query)
    xhr.send()//send the request

    xhr.onload = function () {
        console.log(this.response)
        var response = JSON.parse(this.response).meals
        // console.log(JSON.parse(this.response))
        // var res = document.getElementById("res")
        var res = document.getElementById("res")               

        res.innerHTML = ""//
        for (var i = 0; i <= response.length - 1; i++) {

            var card = document.createElement("div")
            card.setAttribute("class","card")//setting bootstrap class card
            card.setAttribute("class","col-3")
            card.style.border="2px solid brown"
            card.style.padding="10px"
            var img = document.createElement("img")
            img.setAttribute("class","card-img-top")
            img.setAttribute("src", response[i].strMealThumb)
            card.appendChild(img)

            var cardBody = document.createElement("div")
            cardBody.setAttribute("class","card-body")
            var head = document.createElement("h1")
            head.textContent=response[i].strMeal
            head.style.fontFamily="Shadows Into Light, cursive"
            head.style.backgroundColor="skyblue"
            head.style.textAlign="center"
            cardBody.appendChild(head)
            card.appendChild(cardBody)

            var btn = document.createElement("button")
            btn.setAttribute("href","#")
            btn.setAttribute("class","btn btn-success")
            btn.textContent="Click for Details"
            
            card.appendChild(btn)
            res.append(card)
        }
    }
}  


var letterButton
var createButtonDiv
var buttonArray=[]
var allBtn
function createLetterButtons(){
    for(let i=65;i<=90;i++)
    {
        letterButton = document.createElement("button")
        // console.log("letterButton",letterButton)
        // letterButton.innerHTML=i.toString(16)
        letterButton.innerHTML=String.fromCharCode(i)//It converts the number into string
        letterButton.setAttribute("class","myletterButton")
        // console.log("letterButton",letterButton)
        createButtonDiv = document.getElementById("createButtonDiv")
        // console.log(createButtonDiv)
        createButtonDiv.appendChild(letterButton)

        letterButton.addEventListener("click",mealByFirstLetter)
        // console.log("letterButton",letterButton)//z
    }
}
createLetterButtons()



function mealByFirstLetter(letterButton){
    var allLetterButton = document.getElementsByClassName("myletterButton")
    // console.log("allLetterButton",allLetterButton)

    if(allLetterButton.innerHTML="B"){
        console.log("ok")
        var url= (`https://www.themealdb.com/api/json/v1/1/search.php?f=${allLetterButton[1].innerHTML}`)

    }
    else if(allLetterButton.innerHTML="C"){
        console.log("ok1")
        var url= (`https://www.themealdb.com/api/json/v1/1/search.php?f=${allLetterButton[2].innerHTML}`)

    }
    // let's try with by setting class name of all the buttons
    console.log("*************")
    var xhr = new XMLHttpRequest()
    console.log("url",url)
    xhr.open("GET",url)
    // xhr.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    xhr.send()
    xhr.onload = function(){
        if(xhr.status == 200){
            console.log(this.response) // Print the response from the server after a
            console.log(xhr.response)
        }
        else{
            console.log("Error Code is:" + xhr.status)
        }
    }




    // //this is working**************************
    // console.log(letterButton)
    // var xhr = new XMLHttpRequest()
    // // var url= (`https://www.themealdb.com/api/json/v1/1/search.php?f=${letterButton}`)
    // // xhr.open("GET",url)
    // xhr.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    // xhr.send()
    // xhr.onload = function(){
    //     console.log(xhr.response)//blank
    //     console.log(this.response)//blank
    //     if(xhr.status == 200){
    //         console.log(xhr.response) // Print the response from the server after a
    //     }
    //     else{
    //         console.log("Error Code is:" + xhr.status)
    //     }
    // }
    // // *****************************************
}
mealByFirstLetter(letterButton)






