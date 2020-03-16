import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostedJobsComponent } from "./posted-jobs/posted-jobs.component";
import { ShortlistedJobsComponent } from "./short-listed-jobs/short-listed-jobs.component";
import { InterviewsComponent } from "./interviews/interviews.component";
import { MaterialModule } from "../core/material.module";

@NgModule({
  declarations: [
    PostedJobsComponent,
    ShortlistedJobsComponent,
    InterviewsComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [PostedJobsComponent, ShortlistedJobsComponent, InterviewsComponent]
})
export class JobsModule {}
