import { Component } from '@angular/core';
import { StarDateService } from './services/star-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentYear = new Date().getFullYear();
  showFiller = false;
  currentStarDate = this.starDate.starDate();
  title = 'United Federation of Planets';

  constructor(
    private starDate: StarDateService
  ) {}

  private setBackground(event: Event): void {
    const alphaQuad = '/assets/quadrants/galaxy-1.jpg';
    const betaQuad = '/assets/quadrants/galaxy-4.jpg';
    const deltaQuad = '/assets/quadrants/galaxy-5.jpg';
    const gammaQuad = '/assets/quadrants/galaxy-6.jpg';
    const mainBg = document.getElementById('mainBg');
    const target = (event.target as HTMLElement).id;
    if (target === 'alphaBg') {
      mainBg.style.backgroundImage = 'url(' + alphaQuad + ')';
    } else if (target === 'betaBg') {
      mainBg.style.backgroundImage = 'url(' + betaQuad + ')';
    } else if (target === 'deltaBg') {
      mainBg.style.backgroundImage = 'url(' + deltaQuad + ')';
    } else if (target === 'gammaBg') {
      mainBg.style.backgroundImage = 'url(' + gammaQuad + ')';
    }
  }
}
