var inst=[]
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
        //string
        var response = JSON.parse(this.response).meals
        // console.log(JSON.parse(this.response))
        // var res = document.getElementById("res")
        var res = document.getElementById("res")               

        res.innerHTML = ""
        for (var i = 0; i <= response.length - 1; i++) {

            var card = document.createElement("div")
            card.setAttribute("class","card")
            card.setAttribute("class","col-3")
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





