import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'personal-portfolio';

  portfolioTitle: String = "";

  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getpPortfolioName().subscribe((data)=>{
      this.portfolioTitle = data;
    })
  }
}
