
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { BlogModel } from './store/blog/blog.model';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  constructor(private http: HttpClient) { }
  haveaccess() {
    return true;
  }

  GetAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>("http://localhost:3000/Blogs")
  }

  CreateBlog(bloginput: BlogModel) {
    return this.http.post("http://localhost:3000/Blogs", bloginput).pipe(
      tap(()=>{
        this.http.get<BlogModel>("http://localhost:3000/Blogs?_limit=1&_sort=id&_order=desc");
      })
    )
  }

  UpdateBlog(bloginput: BlogModel) {
    return this.http.put("http://localhost:3000/Blogs/"+bloginput.id, bloginput);
  }

  DeleteBlog(blogid:number) {
    return this.http.delete("http://localhost:3000/Blogs/"+blogid);
  }

}