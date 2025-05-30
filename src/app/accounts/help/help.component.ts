import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  activeIndex: number | null = null;

  helpTopics = [
    {
      title: 'Getting Started',
      content: 'Learn how to set up and use the Finscan Portal efficiently for your import and export operations.',
    },
    {
      title: 'Features Overview',
      content: 'Explore the features available in the Finscan Portal, including management tools and reports.',
    },
    {
      title: 'Frequently Asked Questions',
      content: 'Find answers to the most common questions about the Finscan Portal.',
    },
    {
      title: 'Contact Support',
      content: 'If you need further assistance, please contact our support team for help.<br>You can reach us via email at YIL-DSIN_APP@yokogawa.com or call us at : +91-80-4158 6000 | Mobile: +91-9972222355'
    },
  ];

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
