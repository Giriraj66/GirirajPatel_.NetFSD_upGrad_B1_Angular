import Registration from "../module/Registration.js"
import {addRegistration,updateEvent} from "../services/apiService.js"

export const handleRegistration=async(formData,event)=>{

try{

if(event.availableSeats<=0)
throw new Error("No seats available")

const registration=new Registration(formData)

registration.validate()

await addRegistration(registration)

event.availableSeats-=1

await updateEvent(event.id,event)

alert("Registration Successful")

}catch(err){

alert(err.message)

}

}