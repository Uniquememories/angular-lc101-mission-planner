import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here(below): create the addCrewMember function: It should take a candidate object as a parameter. It should check if the candidate is already part of the crew. If the crew size is less than 3 AND the candidate is not part of the crew, then their data should be added to the crew array. If the candidate is already part of the crew, then their data should be removed from the crew array.

  // addCrewMember(candidate: object): Boolean {
  //   if (!this.crew.includes(candidate) && this.crew.length < 3) {
  //     this.crew.push(candidate);
  //     return true;
  //   } else if (this.crew.includes(candidate)) {
  //     let index = this.crew.indexOf(candidate);
  //     this.crew.splice(index, 1);
  //     return false;
  //   } else {
  //     return false;
  //   }
  // }

  addCrewMember(member: object) {
    if (this.crew.includes(member)) {
      this.inCrew = true;
    } else {
      this.inCrew = false;
    }
    
    if (this.inCrew) {
      let index = this.crew.indexOf(member);
      this.crew.splice(index, 1);
    } else if (!this.inCrew && this.crew.length < 3) {
      this.crew.push(member);
    }
  }
}
