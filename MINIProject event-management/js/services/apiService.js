const BASE_URL="http://localhost:3000"

export const fetchEvents=async()=>{

const res=await fetch(`${BASE_URL}/events`)
return await res.json()

}

export const addEvent=async(event)=>{

const res=await fetch(`${BASE_URL}/events`,{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(event)

})

return await res.json()

}

export const deleteEvent=async(id)=>{

await fetch(`${BASE_URL}/events/${id}`,{
method:"DELETE"
})

}

export const updateEvent=async(id,data)=>{

const res=await fetch(`${BASE_URL}/events/${id}`,{

method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)

})

return await res.json()

}

export const addRegistration=async(data)=>{

const res=await fetch(`${BASE_URL}/registrations`,{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)

})

return await res.json()

}