import { Component } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Section, Content } from '../../customize/interfaces';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedIn = faLinkedin;
  faMedium = faMedium;

  portfolioTitle: string = "";
  blurb: string = "";
  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getIntro().subscribe((data)=>{
      this.portfolioTitle = data.portfolioName;
      this.blurb = data.blurb
    })
  }

}
