import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private defaultOptions = ['A Little', 'Somewhat', 'Much'];
  private severityOptions = [
    'None',
    'Mild',
    'Moderate',
    'Severe',
    'Very Severe',
  ];
  private satisfiedOptions = [
    'Very Satisfied',
    'Satisfied',
    'Moderately Satisfied',
    'Dissatisfied',
    'Very Dissatisfied',
  ];
  private noticeableOptions = [
    'Not at all Noticeable',
    ...this.defaultOptions,
    'Very Much Noticeable',
  ];
  private worriedOptions = [
    'Not at all Worried',
    ...this.defaultOptions,
    'Very Much Worried',
  ];
  private interferenceOptions = [
    'Not at all Interfering',
    ...this.defaultOptions,
    'Very Much Interfering',
  ];
  private questionnaire = [
    {
      title: 'Rate your difficulty falling asleep',
      options: this.severityOptions,
    },
    {
      title: 'Rate your difficulty staying asleep',
      options: this.severityOptions,
    },
    {
      title: 'Rate your problems waking up too early',
      options: this.severityOptions,
    },
    {
      title:
        'How SATISFIED/DISSATISFIED are you with your CURRENT sleep pattern?',
      options: this.satisfiedOptions,
    },
    {
      title:
        'How NOTICEABLE to others do you think your sleep problem is in terms of impairing the quality of your life?',
      options: this.noticeableOptions,
    },
    {
      title: 'How WORRIED/DISTRESSED are you about your current sleep problem?',
      options: this.worriedOptions,
    },
    {
      title:
        // eslint-disable-next-line max-len
        'To what extent do you consider your sleep problem to INTERFERE with your daily functioning (e.g. daytime fatigue, mood, ability to function at work/daily chores, concentration, memory, mood, etc.) CURRENTLY?',
      options: this.interferenceOptions,
    },
  ];
  constructor() {}

  getQuestionnaire() {
    return this.questionnaire;
  }

  saveQuestionnaire(totalScore: number) {
    return localStorage.setItem('totalScore', JSON.stringify(totalScore));
  }
}
