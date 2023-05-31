import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  private baseUrl = 'https://example.com/api/images';

  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', file);

    return this.http.post<any>(`${this.baseUrl}/upload`, formData);
  }

  saveImage(imageData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save`, imageData);
  }
}
