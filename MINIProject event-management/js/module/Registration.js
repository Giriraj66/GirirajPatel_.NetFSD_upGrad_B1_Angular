export default class Registration{

constructor({id=Date.now(),eventId,participantName,email,phone}){

this.id=id
this.eventId=eventId
this.participantName=participantName
this.email=email
this.phone=phone

}

validate(){

if(!this.participantName) throw new Error("Name required")

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!emailPattern.test(this.email)) throw new Error("Invalid email")

const phonePattern=/^\d{10}$/

if(!phonePattern.test(this.phone)) throw new Error("Phone must be 10 digits")

return true

}

}