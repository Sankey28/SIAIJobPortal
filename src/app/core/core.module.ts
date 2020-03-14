import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { JobsModule } from '../jobs/jobs.module';



@NgModule({
  declarations: [
    MenuComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    JobsModule,
    HttpClientModule
  ],
  exports:[
    MenuComponent,
    SearchComponent,
    FormsModule
  ]
})
export class CoreModule { }
