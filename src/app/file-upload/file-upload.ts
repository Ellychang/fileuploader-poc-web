import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FileApiService } from '../services/file-api';


@Component({
  selector: 'app-file-upload',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
})
export class FileUpload {
  fileControl = new FormControl<File | null>(null);
  message = signal<string | null>(null);
  isError = signal(false);
  isUploading = signal(false);

  constructor(private fileApi: FileApiService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    this.fileControl.setValue(input.files[0]);
  }

  upload() {
    const file = this.fileControl.value;
    if (!file) return;

    // this.isUploading = true;
    // this.message = null;
    // this.isError = false;

    this.isUploading.set(true);
    this.message.set(null);
    this.isError.set(false);

    this.fileApi.uploadFile(file).subscribe({
      next: () => {
          // this.message = 'Upload successful 🎉';
          // this.isError = false;
          // this.isUploading = false;
           this.message.set('Upload successful 🎉');
        this.isError.set(false);
        this.isUploading.set(false);
          this.fileControl.reset();

      },
      error: () => {
        // this.message = 'Upload failed. Please try again.';
        // this.isError = true;
        // this.isUploading = false;
         this.message.set('Upload failed. Please try again.');
        this.isError.set(true);
        this.isUploading.set(false);
      }
    });
  }
}
