import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { authGuard } from '../guard/auth.guard';

const routes: Routes = [
    {path:"blogView",component:BlogComponent,canActivate:[authGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
