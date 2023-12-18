import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterViewComponent } from './module1/counter-view/counter-view.component';
import { authGuard } from './guard/auth.guard';
import { BlogModule } from './module2-blog/blog.module';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"counter",component:CounterViewComponent,canActivate:[authGuard]},
  {path:"blog", loadChildren:()=>BlogModule},
 // {path:"blog/edit/:id",component:EditblogComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
