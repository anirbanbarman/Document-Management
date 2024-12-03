import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {
  selectedFile: File | null = null;
  documents: any[] = [];

  constructor(private documentService: DocumentService,private alertService:AlertService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  // File change handler
  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Submit the file to the server
  onUploadSubmit(fileInput:HTMLInputElement): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.documentService.uploadDocument(formData).subscribe(
        (response) => {
          this.loadDocuments(); 
          this.alertService.success('Document uploaded successfully!');
          fileInput.value = '';
        },
        (error) => {
          console.error('Error uploading document:', error);
          this.alertService.error(error?.error?.message||"Error uploading document"||'This is an error message!');

        }
      );
    }
  }

  // Load documents from the server
  loadDocuments(): void {
    this.documentService.getDocuments().subscribe(
      (item:any) => {
       item.documents.map((doc:any)=>{
       doc.url="http://localhost:3000"+doc.url
       })
       console.log(item.documents)
        this.documents = item.documents;
      },
      (error) => {
        console.error('Error loading documents:', error);
     this.alertService.error(error?.error?.message||'Error loading documents:'||'This is an error message!');

      }
    );
  }

  // Delete document
  deleteDocument(documentId:string): void {
    if (confirm('Are you sure you want to delete this document?')) {
      this.documentService.deleteDocument(documentId).subscribe(
        (response) => {
          this.loadDocuments(); // Reload the documents after deletion
          this.alertService.success('Document deleted successfully!');
        },
        (error) => {
          console.error('Error deleting document:', error);
    this.alertService.error(error?.error?.message||'Error deleting document!'||'This is an error message!');

        }
      );
    }
  }
}
