import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngestionManagementService {
  private baseUrl = 'http://localhost:3000/api/ingestion-management';

  constructor(private http: HttpClient) {}

  // Get all ingestion processes
  getIngestionProcesses(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
