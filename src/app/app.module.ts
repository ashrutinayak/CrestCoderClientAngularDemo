import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateModelComponent } from './modules/crud/create-model/create-model.component';
import { CrudComponent } from './modules/crud/crud.component';
import { LoaderComponent } from './modules/loader/loader.component';

@NgModule({
  declarations: [
   AppComponent,
   CreateModelComponent,
   CrudComponent,
   LoaderComponent
    
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports:[MaterialModule],
  providers: [],
  entryComponents: [CreateModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
