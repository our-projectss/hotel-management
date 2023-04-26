import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ManageComponent } from 'src/app/manage/manage.component';
import { RoomComponent } from 'src/app/home/modules/room/room.component';
import { ErrorPageComponent } from 'src/app/shared/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'rooms/:id', component: RoomComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
