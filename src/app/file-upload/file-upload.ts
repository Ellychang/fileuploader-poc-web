import { Component, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FileApiService } from '../services/file-api';
import { uploadedFilesSignal } from '../file-state';


@Component({
  selector: 'app-file-upload',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
})
export class FileUpload implements OnInit {
  fileControl = new FormControl<File | null>(null);
  message = signal<string | null>(null);
  isError = signal(false);
  isUploading = signal(false);

  constructor(private fileApi: FileApiService) { }
  ngOnInit() {
    // Fetch initial files on load
    this.loadInitialFiles();
  }

  loadInitialFiles() {
    this.fileApi.getUploadedFiles().subscribe({
      next: (data) => uploadedFilesSignal.set(data),
      error: () => console.error('Failed to load initial files')
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    this.fileControl.setValue(input.files[0]);
  }

  upload() {
    const file = this.fileControl.value;
    if (!file) return;

    this.isUploading.set(true);
    this.message.set(null);
    this.isError.set(false);

    this.fileApi.uploadFile(file).subscribe({
      next: (uploadedFile) => {
        uploadedFilesSignal.update(current => [uploadedFile, ...current]);

        this.message.set('Upload successful 🎉');
        this.isError.set(false);
        this.isUploading.set(false);
        this.fileControl.reset();

      },
      error: () => {
        this.message.set('Upload failed. Please try again.');
        this.isError.set(true);
        this.isUploading.set(false);
      }
    });
  }
}
