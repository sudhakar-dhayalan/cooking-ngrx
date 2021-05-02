// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-producer',
//   templateUrl: './producer.component.html',
//   styleUrls: ['./producer.component.css']
// })
// export class ProducerComponent implements OnInit {

//   stepper: any = [{
//     step: 1,
//     status: 'done',
//     route: "/stepper/landing-health",
//     text: "<div>Knowing <br/>your goals</div>",
//     img_url: "some image"
//   }, {
//     step: 2,
//     status: 'done',
//     route: "stepper/age-select",
//     text: "<div>Members <br/>& age</div>",
//     img_url: "some image"
//   }, {
//     step: 3,
//     status: 'active',
//     route: "stepper/location",
//     text: "<div>Location<br/><span class='hide_dot'>.</span></div>",
//     img_url: "some image"
//   }, {
//     step: 4,
//     status: 'pending',
//     route: "stepper/member-card",
//     text: '<div>Medical<br/><div class="hide_dot">.</div></div>',
//     img_url: "asome image"
//   }];

//   constructor(private router:Router) { }

//   ngOnInit(): void {
//   }

//   selected = "pizza";
//   showOptions = false;

//   toggleDropdown() {
//     this.showOptions = !this.showOptions;
//   }

//   onSelectValue(selectedValue) {
//     this.selected = selectedValue;
//     this.toggleDropdown();
//   }

// }
