import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  myForm: FormGroup;
  submitState: ESubmitState = ESubmitState.INIT;
  file: File | undefined;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      courseImg: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted!', this.myForm.value);
      // You can perform further actions here, like sending the form data to a server
    } else {
      console.log('Form is invalid');
    }
  }

  onFileChange(e:Event){
    
    this.file = (e.target as HTMLInputElement).files?.item(0) as File;
    
  }
}


enum ESubmitState {
  INIT=0,
  SUBMITTING=1,
  SUBMIT_SUCCESS=2,
  SUBMIT_FAILURE=3
}