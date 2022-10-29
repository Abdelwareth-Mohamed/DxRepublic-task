import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.scss']
})
export class SubTaskComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
    jobForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    gender: ['',[Validators.required]],
    militry: ['',[]],
    
  });

 
  
  preview: string = '';
 
  ngOnInit(): void {
    
 }
  get firstName(){
    return this.jobForm.get('firstName');
  }
  get lastName(){
    return this.jobForm.get('lastName');
  }
  get gender(){
    return this.jobForm.get('gender');
  }
  get militry(){
    return this.jobForm.get('militry');
  }
  save() {
    
    this.preview = JSON.stringify(this.jobForm.value);
  }
  changeState(e:any)
  {
if(e.value=="male")
{
  this.jobForm.controls["militry"].setValidators([Validators.required])
  this.jobForm.controls["militry"].updateValueAndValidity();
  
}
else if(e.value=="female")
this.jobForm.controls["militry"].setValidators(null)
  this.jobForm.controls["militry"].updateValueAndValidity();
 

  }
}
