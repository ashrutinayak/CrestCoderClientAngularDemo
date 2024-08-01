import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateModelComponent } from './modules/crud/create-model/create-model.component';
import { CrudComponent } from './modules/crud/crud.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
   CreateModelComponent,
   CrudComponent
    
  ],
  imports: [
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [CreateModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
