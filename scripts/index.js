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
    }
    
    getAllActivities () {
        return this.activities
    }

    createActivity (id, title, description, imgUrl) {
        const activity = new Activity(id, title, description, imgUrl) // Crea la instancia

        this.activities.push(activity) // Guardando la actividad en la lista
    }

    deleteActivity (id) {
        // const position = this.activities.findIndex((activity) => {
        //     if(activity.id === id){
        //         return true
        //     } else {
        //         return false
        //     }
        // })

        // this.activities.splice(position, 1)

        const filteredActivities = this.activities.filter((activity) => activity.id !== id)

        this.activities = filteredActivities
    }
}

const repositorio = new Repository()

let id = 1
let title = "Jugar jueguitos"
let description = "Me gusta jugar a la compu"
let imgUrl = "https://..."

repositorio.createActivity(id, title, description, imgUrl)

console.log(repositorio.getAllActivities())

repositorio.deleteActivity(1)

console.log(repositorio.getAllActivities())