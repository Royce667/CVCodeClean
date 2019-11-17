import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatGridListModule, MatDatepickerModule,
        MatStepperModule,   MatCheckboxModule, MatButtonModule,
        MatIconModule, MatCardModule, MatSelectModule, MatSliderModule} from '@angular/material'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
      



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,        BrowserAnimationsModule,        MatStepperModule,
    MatFormFieldModule,    MatInputModule,                MatGridListModule,
    MatFormFieldModule,    MatInputModule,                MatDatepickerModule,
    MatCheckboxModule,      MatButtonModule,               MatIconModule,
    MatCardModule,          MatSelectModule,               FormsModule,
    CommonModule,            MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
