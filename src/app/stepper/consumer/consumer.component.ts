import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogModule as MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  insurerForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.insurerForm = this.fb.group({
      name: ["", Validators.required],
      dob: ["", Validators.required],
      gender: ["", Validators.required],
    })
  }

  onSumbit() {
    console.log(this.insurerForm);
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
