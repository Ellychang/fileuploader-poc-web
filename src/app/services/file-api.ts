import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UploadedFile } from '../models/uploaded-file';

@Injectable({
  providedIn: 'root'
})
export class FileApiService {

  private readonly baseUrl = 'http://localhost:5064/api/file';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/upload`, formData)
     .pipe(
      tap(res => console.log('API response', res))
    );
  }

   getUploadedFiles(): Observable<UploadedFile[]> {
    return this.http.get<UploadedFile[]>(`${this.baseUrl}`);
  }
  
}
