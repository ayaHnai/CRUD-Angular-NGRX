
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { loadblog, deleteblog } from 'src/app/shared/store/blog/blog.action';
import { BlogModel, Blogs } from 'src/app/shared/store/blog/blog.model';
import { getbloginfo } from 'src/app/shared/store/blog/blog.selector';
import { loadspinner } from 'src/app/shared/store/global/app.actions';
import { AppStateModel } from 'src/app/shared/store/global/app.model';
import { AddblogComponent } from '../addblog/addblog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  implements OnInit {
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog,private router:Router) {

  }

  bloglist !: BlogModel[];
  bloginfo !: Blogs;

  ngOnInit(): void {
    this.store.dispatch(loadspinner({ isloaded: true }));
    setTimeout(() => {
      this.store.dispatch(loadblog());
      this.store.dispatch(loadspinner({ isloaded: false }));
      
    },100);
    this.store.select(getbloginfo).subscribe(item => {
      //this.bloglist = item;
      this.bloginfo = item;
    });

  }

  AddBlog() {
    this.OpenPopup(0, 'Add Blog');
  }

  OpenPopup(id: any, title: any, isedit = false) {
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit
      }
    })
  }

  EditBlog(id: any) {
    //this.OpenPopup(id, 'Edit Blog', true);
    this.router.navigate(['blog/edit/'+id])
  }

  RemoveBlog(id: any) {
    if (confirm("Are you sure want to remove?")) {
      this.store.dispatch(loadspinner({ isloaded: true }));
      setTimeout(() => {
        this.store.dispatch(deleteblog({ id: id }));
        
      }, 2000);
      
    }
  }

}
