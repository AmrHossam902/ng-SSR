import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  providers: [MessageService]
})
export class AddCourseComponent {
  myForm: FormGroup;
  submitState: ESubmitState = ESubmitState.INIT;
  file: File | undefined;

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private messageService: MessageService) {
      this.myForm = this.fb.group({
        title: new FormControl<string>('', Validators.required),
        desc:  new FormControl<string>('', Validators.required),
        courseImg: new FormControl<any>( undefined, Validators.required)
      });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.submitState = ESubmitState.SUBMITTING;
      console.log(this.myForm.value);
      this.coursesService.createNewCourse({ ...this.myForm.value, 'imageFile': this.file})
      .subscribe(
        (res)=>{
          console.log(res);
          this.submitState = ESubmitState.SUBMIT_SUCCESS;
          this.showMsg("success", "course created successfully", "");
        },
        (err) =>{
          this.submitState = ESubmitState.SUBMIT_FAILURE;
          this.showMsg("error", "request failed", "course was not created");
        }
      );

      console.log('Form submitted!', this.myForm);
      // You can perform further actions here, like sending the form data to a server
    } else {
      console.log('Form is invalid');
    }
  }

  onFileChange(e:Event){
    
    this.file = (e.target as HTMLInputElement).files?.item(0) as File;
  }

  showMsg(servrity:  string, title: string, content: string){
    this.messageService.add({
      "severity" : servrity,
      "summary" : title,
      "detail" : content,
      "life" : 10000
    });
  }
}


enum ESubmitState {
  INIT=0,
  SUBMITTING=1,
  SUBMIT_SUCCESS=2,
  SUBMIT_FAILURE=3
}