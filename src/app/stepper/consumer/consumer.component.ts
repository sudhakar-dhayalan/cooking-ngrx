import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  insurerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.insurerForm = this.fb.group({
      name: ["", Validators.required],
      dob: ["", Validators.required],
      gender: ["", Validators.required],
    })

    // this.insurerForm = new FormGroup({
    //   'name': new FormControl(null, Validators.required),
    //   'dob': new FormControl(null, Validators.required),
    //   'gender': new FormGroup({
    //     'male': new FormControl(null),
    //     'female': new FormGroup(null)
    //   })
    // });
  }

  onSumbit() {
    console.log(this.insurerForm);
  }

}
