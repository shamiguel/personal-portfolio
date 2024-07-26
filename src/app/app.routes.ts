import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { WritingComponent } from './writing/writing.component';
import { ProjectsComponent } from './projects/projects.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'writings', component: WritingComponent},
    {path: 'projects', component: ProjectsComponent},
];
