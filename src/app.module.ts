import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MotorcyclesService } from './motorcycles.service';
import { AppComponent } from './app.component';
import { MotorcyclesEditComponent } from './motorcycles-edit.component';
import { MotorcyclesListComponent } from './motorcycles-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, MotorcyclesEditComponent, MotorcyclesListComponent],
  providers: [MotorcyclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
