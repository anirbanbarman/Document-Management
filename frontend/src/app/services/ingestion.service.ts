import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngestionService {
  private baseUrl = 'http://localhost:3000/api/ingestion';

  constructor(private http: HttpClient) {}

  // Trigger Ingestion
  triggerIngestion(source: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/trigger`, { source });
  }

  // Get Ingestion Status
  getIngestionStatus(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/status/${id}`);
  }
}
