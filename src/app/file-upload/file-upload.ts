import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  imports: [ReactiveFormsModule, NgIf],
  standalone: true,
  providers: [HttpClient],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
})
export class FileUpload {
  fileControl = new FormControl<File | null>(null);

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    this.fileControl.setValue(input.files[0]);
  }

  upload() {
    const file = this.fileControl.value;
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    this.http.post('https://localhost:5001/api/file/upload', formData)
      .subscribe({
        next: res => console.log('Upload successful', res),
        error: err => console.error('Upload failed', err)
      });
  }
}
