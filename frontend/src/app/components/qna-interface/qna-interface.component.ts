import { Component } from '@angular/core';
import { QnaService } from 'src/app/services/qna.service';

@Component({
  selector: 'app-qna-interface',
  templateUrl: './qna-interface.component.html',
  styleUrls: ['./qna-interface.component.scss']
})
export class QnaInterfaceComponent {
  question: string = '';
  answer: string = '';
  documents: { title: string; description: string }[] = [];
  error: string = '';

  constructor(private qnaService: QnaService) {}

  askQuestion(): void {
    if (!this.question.trim()) {
      this.error = 'Please enter a valid question.';
      return;
    }

    this.error = '';
    this.qnaService.askQuestion(this.question).subscribe(
      (response) => {
        this.answer = response.answer;
        this.documents = response.documents;
      },
      (error) => {
        this.error = 'Failed to fetch answer. Please try again later.';
      }
    );
  }
}

