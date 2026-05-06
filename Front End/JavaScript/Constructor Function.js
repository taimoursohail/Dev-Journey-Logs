function HouseKeeper (name, age, hasWorkPermit, experience, hasOwnCar, expertise) {
   this.name = name;
   this.age = age;
   this.hasWorkPermit = hasWorkPermit;
   this.experience = experience;
   this.hasOwnCar = hasOwnCar;
   this.expertise = expertise;
   this.clean = function () {
      alert ("Cleaning is in progress...");
   }
}

employee1 = new HouseKeeper ("Yahya", 34, true, 18, true, "Cleaning");