import Event from "../module/Event.js"
import {fetchEvents,addEvent,deleteEvent} from "../services/apiService.js"

export const loadEvents=async()=>{

const events=await fetchEvents()

const container=document.getElementById("eventList")

container.innerHTML=""

events.forEach(e=>{

container.innerHTML+=`

<div class="card">

<h3>${e.title}</h3>
<p>${e.description}</p>
<p>${e.date}</p>
<p>${e.location}</p>
<p>Seats Left: ${e.availableSeats}</p>

<a href="register.html?id=${e.id}">
<button>Register</button>
</a>

<button onclick="handleDelete(${e.id})">Delete</button>

</div>

`

})

}

export const handleAddEvent=async(data)=>{

try{

const event=new Event(data)

event.validate()

await addEvent(event)

alert("Event Added")

}catch(err){

alert(err.message)

}

}

window.handleDelete=async(id)=>{

await deleteEvent(id)

loadEvents()

}