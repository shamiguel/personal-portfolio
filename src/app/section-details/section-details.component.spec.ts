import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SectionDetailsComponent } from './section-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PortfolioService } from '../services/portfolio.service';
import { of } from 'rxjs';

describe('SectionPageComponent', () => {
  let component: SectionDetailsComponent;
  let fixture: ComponentFixture<SectionDetailsComponent>;
  let portfolioService: jasmine.SpyObj<PortfolioService>;

  beforeEach(async () => {
    const portfolioServiceSpy = jasmine.createSpyObj('PortfolioService', ['getExperiences', 'getProjects', 'getWritings']);
    
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SectionDetailsComponent
      ],
      providers: [
        { provide: PortfolioService, useValue: portfolioServiceSpy },
        { provide: ActivatedRoute, useValue: { params: of({}) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDetailsComponent);
    component = fixture.componentInstance;
    portfolioService = TestBed.inject(PortfolioService) as jasmine.SpyObj<PortfolioService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
