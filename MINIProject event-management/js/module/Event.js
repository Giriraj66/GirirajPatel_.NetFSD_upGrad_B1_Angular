export default class Event{

constructor({id=Date.now(),title,description,date,location,capacity}){

this.id=id
this.title=title
this.description=description
this.date=date
this.location=location
this.capacity=capacity
this.availableSeats=capacity

}

validate(){

if(!this.title) throw new Error("Title required")

const today=new Date().toISOString().split("T")[0]

if(this.date<today) throw new Error("Date cannot be past")

if(this.capacity<=0) throw new Error("Capacity must be positive")

if(!this.location) throw new Error("Location required")

return true

}

}