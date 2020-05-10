var btn
window.addEventListener("load", function () {
    btn = this.document.getElementById("get")
    btn.addEventListener("click", getData)
})

function getData() {
    var xhr = new XMLHttpRequest()//now xhr is XMLHttp request object
    // console.log(xhr)
    var url = "https://www.themealdb.com"
    var query = document.getElementById("getData").value
    xhr.open("GET", url + "/api/json/v1/1/search.php?s=" + query)
    xhr.send()//send the request

    xhr.onload = function () {
        // console.log(this.response)
        var response = JSON.parse(this.response).meals
        // console.log(JSON.parse(this.response))
        // var res = document.getElementById("res")
        var res = document.getElementById("res")

        res.innerHTML = ""//why we write this?
        for (var i = 0; i <= response.length - 1; i++) {

            var card = document.createElement("div")
            card.setAttribute("class", "card")//setting bootstrap class card
            card.setAttribute("class", "col-3")
            card.style.border = "2px solid brown"
            card.style.padding = "10px"
            var img = document.createElement("img")
            img.setAttribute("class", "card-img-top")
            img.setAttribute("src", response[i].strMealThumb)
            card.appendChild(img)

            var cardBody = document.createElement("div")
            cardBody.setAttribute("class", "card-body")
            var head = document.createElement("h1")
            head.textContent = response[i].strMeal
            head.style.fontFamily = "Shadows Into Light, cursive"
            head.style.backgroundColor = "skyblue"
            head.style.textAlign = "center"
            cardBody.appendChild(head)
            card.appendChild(cardBody)

            var btn = document.createElement("button")
            btn.setAttribute("href", "#")
            btn.setAttribute("class", "btn btn-success")
            btn.textContent = "Click for Details"

            card.appendChild(btn)
            res.append(card)
        }
    }
}

let letterButton
let createButtonDiv

// **************Function for creating button dynamically***********************
const createLetterButtons = function () {
    for (let i = 65; i <= 90; i++) {
        letterButton = document.createElement("button")//creating button
        letterButton.innerHTML = String.fromCharCode(i)//It converts the number into string
        letterButton.setAttribute("class", "myletterButton")//setting the attribute class "myletterButton" for all buttons
        // console.log(letterButton.nodeName,letterButton.nodeValue,letterButton.nodeType)
        createButtonDiv = document.getElementById("createButtonDiv")// getting the parent div for appending all buttons
        createButtonDiv.appendChild(letterButton)//appending the all buttons to variable createButtonsDiv
        // console.log("letterButton",letterButton)//getting all the buttons with class "myletterButton"
    }
}
createLetterButtons()


const mealsByLetter = function () {
    var getBtn = document.getElementsByClassName("myletterButton")
    // console.log("getBtn",getBtn,getBtn.length,getBtn[0].innerHTML,getBtn[0].textContentfor)
    for (let i = 0; i <= getBtn.length - 1; i++) {
        getBtn[i].addEventListener("click", function () {
            // console.log("getBtn[0].innerHTML",getBtn[i].innerHTML)
            let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${getBtn[i].innerHTML}`
            fetch(url).then(function (res) {
                return res.json()
            }).then(function (data) {
                console.log("data.meals", data.meals)
                loadData(data.meals)
            })

        })
    }
}
mealsByLetter()

const loadData = function (ok) {
    console.log(ok)
    var res = document.getElementById("res")
    res.innerHTML = ""

    for (let i = 0; i <= ok.length - 1; i++) {
        console.log(ok[i].idMeal)
        var card = document.createElement("div")
        card.setAttribute("class", "card")//setting bootstrap class card
        card.setAttribute("class", "col-3")
        card.style.border = "2px solid brown"
        card.style.padding = "10px"
        var img = document.createElement("img")
        img.setAttribute("class", "card-img-top")
        img.setAttribute("src", ok[i].strMealThumb)
        card.appendChild(img)

        var cardBody = document.createElement("div")
        cardBody.setAttribute("class", "card-body")
        var head = document.createElement("h1")
        head.textContent = ok[i].strMeal
        head.style.fontFamily = "Shadows Into Light, cursive"
        head.style.backgroundColor = "skyblue"
        head.style.textAlign = "center"
        cardBody.appendChild(head)
        card.appendChild(cardBody)

        var btn = document.createElement("button")
        btn.setAttribute("href", "#")
        btn.setAttribute("class", "btn btn-success")
        btn.textContent = "Click for Details"

        card.appendChild(btn)
        res.append(card)
    }
}








