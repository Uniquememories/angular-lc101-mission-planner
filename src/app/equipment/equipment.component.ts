import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here: //create the addItem function
   // It should take an equipment object as a parameter, should add the equipment object to the cargoHold array, should increase the cargoMass variable by the mass of the new equipment, should return true or false depending on whether cargoMass is within 200 kg of maximumAllowedMass.
  addItem(equipment: object): boolean {  
    this.cargoHold.push(equipment);
    this.cargoMass += equipment["mass"];
    return this.maximumAllowedMass - this.cargoMass <= 200;
  }
   //Bind the disabled attribute to the following conditions: If all of the cargo hold spots are full (cargoHold.length === maxItems), disable the button. If adding the item to the cargo hold would exceed maximumAllowedMass, disable the button.
  disabled(equipment: object): boolean {
    if (this.cargoHold.length === this.maxItems || this.cargoMass + equipment['mass'] > this.maximumAllowedMass) {
      return true;
    }
    return false;
  }

  // Add an Empty Hold button that clears the cargoHold array and resets cargoMass. As a side effect, clearing the hold should reactivate all of the buttons and return Mass Budget Remaining to its original style.
  clearHold(): boolean {
    this.cargoHold = [];
    this.cargoMass = 0;
    return false;
  }
}
