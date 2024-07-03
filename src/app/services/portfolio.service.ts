import { Injectable } from '@angular/core';
import { portfolioName, projectSection } from '../../customize/portfolio';
import { Observable, of } from 'rxjs';
import { Section } from '../../customize/interfaces';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getpPortfolioName(): Observable<String>{
    return of(portfolioName)
  }
  
  getProjects(): Observable<Section>{
    return of(projectSection)
  }  
}
