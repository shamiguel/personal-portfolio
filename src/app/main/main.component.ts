import { Component } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Section, Content } from '../../customize/interfaces';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { MainSectionComponent } from '../main-section/main-section.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MainSectionComponent],
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

  experiences:Content[] = [];
  experiencesSection:Section = {
    name: '',
    display: false,
    content: this.experiences
  };

  projects:Content[] = [];
  projectsSection:Section = {
    name: '',
    display: false,
    content: this.projects
  };

  writings:Content[] = [];
  writingsSection:Section = {
    name: '',
    display: false,
    content: this.writings
  };


  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getIntro().subscribe((data)=>{
      this.portfolioTitle = data.portfolioName;
      this.blurb = data.blurb
    })
    this.portfolioService.getExperiences().subscribe((data)=>{
      this.experiencesSection = data;
      this.experiences = this.experiencesSection.content;
    })
    this.portfolioService.getProjects().subscribe((data)=>{
      this.projectsSection = data;
      this.projects = this.projectsSection.content;
    })
    this.portfolioService.getWritings().subscribe((data)=>{
      this.writingsSection = data;
      this.writings = this.writingsSection.content;
    })
  }


}
