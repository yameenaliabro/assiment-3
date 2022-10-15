 //no : 1  assiment 
 class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
     totalIncome() {
        return this.incomes.reduce((prevVal, currentVal)=> prevVal + currentVal.amount,0)

    }
    totalExpense() {
        return this.expenses.reduce((prevVal, currentVal)=> prevVal + currentVal.amount,0)
    }
    addIncome(amount, description) {
        this.incomes.push({
            amount,
            description,
        })
    }
    accountBalance() {
        return this.totalIncome() - this.totalExpense()
    }
    addExpense(amount, description) {
        this.expenses.push({
            amount,
            description
        })
    }
}
const testAccount = new PersonAccount("Nadir", "Ali", [],[]);
testAccount.addExpense(500, "Birtani");
testAccount.addIncome(200, "Overtime");
console.log(testAccount)
//no : 2 assiment
class Automobile{
    constructor(car,truck,bus){
this.car =car 
this.truck = truck
this.bus = bus
    }
    start(){
        console.log("car is ready for drive");
    }
    opendoor(){
        console.log("door is open")
    }
}
class Car extends Automobile{
    constructor(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed){
        super(car,truck,bus)
        this.carname = carname;
        this.carmodel = carmodel
       this.cardoor = cardoor
       this.carmaxspeed =  carmaxspeed
       this.carminispeed = carminispeed
    }
}
class Truck extends Car{
        constructor(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed,truckname,truckmodel,truckdoor,truckmaxspeed,truckminispeed){
            super(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed)
       this.truckname = truckname
       this.truckmodel = truckmodel
       this.truckdoor = truckdoor
       this.carmaxspeed= truckmaxspeed
       this.carminispeed = truckminispeed
            }

        }
    class Bus extends Truck{
        constructor(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed,truckname,truckmodel,truckdoor,truckmaxspeed,truckminispeed, busname,busmodel,busdoor,busmaxspeed,busminispeed){
  super(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed,truckname,truckmodel,truckdoor,truckmaxspeed,truckminispeed)
  this. busname = busname
  this.busmodel = busmodel
  this.busdoor = busdoor
  this.busmaxspeed =busmaxspeed
  this.busminispeed = busminispeed
}
    }
    let automobile = new Bus("civic","truck","suzuki","civic",2019,4,200,40,"truck",2013,2 , 220,100,"suzuki",2020,3,230,90)
    console.log(automobile)