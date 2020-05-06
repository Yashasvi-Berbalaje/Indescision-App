let personName,PersonAge,Qualification,Location;
class PersonDetail{
  
 constructor(name ='Anonymous',age = 0){
  personName=name;
  PersonAge=age;
 }
 getGreeting(){
     return `Hi i am ${personName} and i am ${PersonAge} years old  `;
 }
 getDescription(){
    return personName +' is '+PersonAge+' years old';
 }
}

class Student extends PersonDetail{
  constructor(name,age,major='Not decided'){
      super(name,age);
     Qualification=major;
  }
  hasMajor(){
      return !!{Qualification};
  }
  getDescription(){
      let Description=super.getDescription();

      if(this.hasMajor()){
        return `${Description} and his qualification is ${Qualification}`
      }
  }
}

class Traveller extends PersonDetail{
    constructor(name,age,location){
        super(name,age);
        Location=location;
    }
    getLoc(){
        return !!{Location};
    }

    getGreeting(){
        const TravelDesc=super.getGreeting();
      if(this.getLoc()){
          return `${TravelDesc} and i am from ${Location}`;
      }
      return TravelDesc;
    }
}

const person1 = new Traveller('Yashasvi Berbalaje',19,'Mangalore');
console.log(person1.getGreeting());
const person2 = new Traveller();
console.log(person2.getGreeting());
const person3 = new Traveller('gravye',20,'Mumbai');
console.log(person3.getGreeting());
