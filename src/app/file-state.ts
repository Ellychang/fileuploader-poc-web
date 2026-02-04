import { signal } from '@angular/core';
import { UploadedFile } from './models/uploaded-file';

// This will hold the latest list of uploaded files
export const uploadedFilesSignal = signal<UploadedFile[]>([]);
