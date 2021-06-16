import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {
  label;
  rangeValue: number;
  navigate: boolean;
  showResults = false;

  scores: number[] = [];
  totalScore: number;
  questions: Question[];

  disabled = true;
  count = 0;
  options: Options = {
    floor: 0,
    ceil: 4,
    vertical: true,
    showTicks: true,
    showTicksValues: true,
    getPointerColor: (value: number): string => {
      switch (value) {
        case 0:
          return '#dc231a';
        case 1:
          return '#e45f28';
        case 2:
          return '#eda038';
        case 3:
          return '#b4a038';
        case 4:
          return '#5d993a';
        default:
          return '#dc231a';
      }
    },
  };
  constructor(private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.navigate = true;
    this.getQuestions();
  }

  getQuestions() {
    this.questions = this.questionnaireService.getQuestionnaire();
    this.options.translate = (value: number): string => {
      this.questions.forEach((question) => {
        if (this.questions.indexOf(question) === this.count) {
          this.label = question.options[value];
        }
      });
      return this.label;
    };
  }

  incrementQuestion(index: number) {
    if (isNaN(this.rangeValue)) {
      this.scores.push(0);
    } else {
      this.scores.push(this.rangeValue);
    }
    if (this.count === this.questions.length - 1) {
      this.saveQuestionnaire();
      this.showResults = true;
    } else {
      this.count = index + 1;
    }
    this.disableBackNavigation();
  }

  decrementQuestion(index: number) {
    this.count = index - 1;
    this.disableBackNavigation();
  }

  private disableBackNavigation() {
    if (this.count === 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  private saveQuestionnaire() {
    this.totalScore = this.scores.reduce((a, b) => a + b);
    this.questionnaireService.saveQuestionnaire(this.totalScore);
  }
}

export interface Question {
  title: string;
  options: string[];
}
