class Activity {
    constructor (id, title, description, imgUrl) {
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl = imgUrl
    }
}

class Repository {
    constructor (){
        this.activities = []
        this.id = 1
    }
    
    getAllActivities () {
        return this.activities
    }

    createActivity (title, description, imgUrl) {
    
        this.activities.push(new Activity(this.id ++, title, description, imgUrl))

    }

    deleteActivity (id) {

        this.activities = this.activities.filter((activity) => activity.id !== id)

    }
}
const repository = new Repository()

const button = document.getElementById("button")

// button.addEventListener("click", (event) => {
//     event.preventDefault()

//     const title = document.getElementById("title")
//     const description = document.getElementById("description")
//     const img = document.getElementById("img")

//     const activityTitle = title.value
//     const activityDescription = description.value
//     const activityImg = img.value
    
//     repository.createActivity(activityTitle, activityDescription, activityImg)

//     const activityDiv = document.createElement("div")
//     activityDiv.className = "card"

//     const cardTitle = document.createElement("h3")

//     const cardDescription = document.createElement("p")

//     const cardImg = document.createElement("img")

//     cardTitle.innerText = activityTitle
//     cardDescription.innerText = activityDescription
//     cardImg.src = activityImg

//     cardTitle.className = "card-title"
//     cardDescription.className = "card-description"
//     cardImg.className = "card-image"

//     activityDiv.appendChild(cardTitle)
//     activityDiv.appendChild(cardDescription)
//     activityDiv.appendChild(cardImg)
//     const activities = document.getElementById("activities")
//     activities.appendChild(activityDiv)

    
// })

function createActivityHtml ({ id, title, description, imgUrl }) {

    const cardTitle = document.createElement("h3")

    const cardDescription = document.createElement("p")

    const cardImg = document.createElement("img")

    cardTitle.innerText = title
    cardDescription.innerText = description
    cardImg.src = imgUrl

    cardTitle.className = "card-title"
    cardDescription.className = "card-description"
    cardImg.className = "card-image"

    const deleteButton = document.createElement("button")
    deleteButton.addEventListener("click",() => deleteCard(id))
    deleteButton.innerHTML = "x"
    deleteButton.className = "card-button"

    const activityDiv = document.createElement("div")

    activityDiv.appendChild(deleteButton)
    activityDiv.appendChild(cardTitle)
    activityDiv.appendChild(cardDescription)
    activityDiv.appendChild(cardImg)

    activityDiv.id = id
    activityDiv.className = "card"

    return activityDiv
}

function deleteCard (id) {
    repository.deleteActivity(id)
    createActivitiesHtml()
}

function createActivitiesHtml () {

    const activitiesDiv = document.getElementById("activities")
    
    activitiesDiv.innerHTML = ""

    const activities = repository.getAllActivities()

    const activitiesHtml = activities.map((activity) => {
        return createActivityHtml(activity)
    })

    activitiesHtml.forEach((activityHtml) => {
        activitiesDiv.appendChild(activityHtml)
    })
}

button.addEventListener("click", handler)
function handler (event) {
    event.preventDefault()
    const titleElement = document.getElementById("title")
    const descriptionElement = document.getElementById("description")
    const imgElement = document.getElementById("img")

    const title = titleElement.value
    const description = descriptionElement.value
    const imgUrl = imgElement.value

    if (title === "" || description === "" || imgUrl === "") {
        alert("Hay datos incompletos")
        return  
    }
    
    if(imgUrl.includes("https://") === false) {
        alert("La imagen no es una url valida")
        return 
    }


    repository.createActivity(title, description, imgUrl)
    createActivitiesHtml()

    const form = document.getElementById("form")
    form.reset()
}


