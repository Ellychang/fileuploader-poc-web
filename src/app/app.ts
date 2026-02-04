import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUpload } from './file-upload/file-upload';
import { UploadedFilesList } from "./uploaded-files-list/uploaded-files-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FileUpload, UploadedFilesList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MyPocWeb');
}
