import { DataService } from 'src/app/data.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  uploadForm: any;
  myFiles: string[] = [];
  constructor(private fb: FormBuilder, private ds: DataService) {}

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      files: ['', Validators.required],
    });
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.uploadForm.get('files').setValue(file);
    }
  }
  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('files', this.uploadForm.get('files').value);
    console.log(this.uploadForm.get('files').value);
    this.ds.upload(formData).subscribe((item) => {
      console.log(item);
    });
  }
  submitForm() {
    const formData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append('files', this.myFiles[i]);
      console.log(this.myFiles[i]);
    }
    this.ds.upload(formData).subscribe((item) => {
      console.log(item);
    });
  }
}
