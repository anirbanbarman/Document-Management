import { Component, OnInit } from '@angular/core';
import { IngestionService } from '../../services/ingestion.service';
import { IngestionManagementService } from 'src/app/services/ingestion-management.service';

@Component({
  selector: 'app-ingestion-management',
  templateUrl: './ingestion-management.component.html',
  styleUrls: ['./ingestion-management.component.scss']
})
export class IngestionManagementComponent implements OnInit {
  source = '';
  message = '';
  processes: any[] = [];
  processId = '';

  constructor(private ingestionService: IngestionService,private ingestionManagementService: IngestionManagementService) {}

  ngOnInit(): void {
    this.getData();
   }
 
  triggerIngestion(): void {
    this.ingestionService.triggerIngestion(this.source).subscribe(
      (response) => {
        this.message = response.message;
        this.processId = response.processId;
        this.getData();
      },
      (error) => {
        this.message = error.error.message;
      }
    );
  }


  getData(){
    this.ingestionManagementService.getIngestionProcesses().subscribe((data) => {
      this.processes = data.processes;
    });
  }
}
