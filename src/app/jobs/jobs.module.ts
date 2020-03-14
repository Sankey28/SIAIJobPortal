import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { ShortlistedComponent } from './shortlisted/shortlisted.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { MaterialModule } from '../core/material.module';



@NgModule({
  declarations: [
    PostedJobsComponent,
    ShortlistedComponent,
    InterviewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PostedJobsComponent,
    ShortlistedComponent,
    InterviewsComponent
  ]
})
export class JobsModule { }
