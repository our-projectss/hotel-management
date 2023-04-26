import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageComponent } from './manage/manage.component';
import { RoomComponent } from './home/modules/room/room.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManageComponent,
    RoomComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
