import { Component } from '@angular/core';
import { uploadedFilesSignal } from '../file-state';

@Component({
  selector: 'app-uploaded-files-list',
  standalone: true,
  imports: [],
  templateUrl: './uploaded-files-list.html',
  styleUrl: './uploaded-files-list.scss',
})
export class UploadedFilesList {
  uploadedFilesSignal = uploadedFilesSignal;
  
  // Optional: Get just the file name from full path
  getFileName(filePath: string) {
    return filePath.split('\\').pop() || filePath;
  }

  formatDate(isoString: string) {
    return new Date(isoString).toLocaleString();
  }
}
