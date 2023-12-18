import { Injectable } from "@angular/core"
import { Actions, act, createEffect, ofType } from "@ngrx/effects"
import { EMPTY, catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs"
import { MatSnackBar } from "@angular/material/snack-bar"
import { MasterServiceService } from "../../master-service.service"
import { ShowAlert, loadspinner } from "../global/app.actions"
import { LOAD_BLOG, addblog, addblogsuccess, deleteblog, deleteblogsuccess, loadblogfail, loadblogsuccess, updateblog, updateblogsuccess } from "./blog.action"
import { BlogModel } from "./blog.model"

@Injectable()
export class BlogEffects {


    constructor(private action$: Actions, private service: MasterServiceService, private _snackbar: MatSnackBar) {

    }
    _lodblog = createEffect(() =>
        this.action$
            .pipe(
                ofType(LOAD_BLOG),
                exhaustMap((action) => {
                    return this.service.GetAllBlogs().pipe(
                        map((data) => {
                            return loadblogsuccess({ bloglist: data });
                            
                        }),
                        catchError((_error) => of(loadblogfail({ Errortext: _error }),loadspinner({isloaded:false})))
                    )
                })
            )
    );

    _AddBlog = createEffect(() =>
        this.action$.pipe(
            ofType(addblog),
            switchMap(action =>
                this.service.CreateBlog(action.bloginput).pipe(
                    switchMap(data => of(
                        addblogsuccess({ bloginput: data as BlogModel }),
                        loadspinner({isloaded:false}),
                        ShowAlert({ message: 'Created successfully.', actionresult: 'pass' })
                    )),
                    catchError((_error) => of(ShowAlert({ message: 'Failed to create blog.', actionresult: 'fail' }),loadspinner({isloaded:false})))
                )
            )
        )
    );

    _UpdateBlog = createEffect(() =>
        this.action$.pipe(
            ofType(updateblog),
            switchMap(action =>
                this.service.UpdateBlog(action.bloginput).pipe(
                    switchMap(res => of(
                        updateblogsuccess({ bloginput: action.bloginput }),
                        loadspinner({isloaded:false}),
                        ShowAlert({ message: 'Updated successfully.', actionresult: 'pass' })
                    )),
                    catchError((_error) => of(ShowAlert({ message: 'Update Failed - Due to' + _error.message, actionresult: 'fail' }),loadspinner({isloaded:false})))
                )
            )
        )
    );

    _DeleteBlog = createEffect(() =>
        this.action$.pipe(
            ofType(deleteblog),
            switchMap(action =>
                this.service.DeleteBlog(action.id).pipe(
                    switchMap(res => of(
                        deleteblogsuccess({ id: action.id }),
                        loadspinner({isloaded:false}),
                        ShowAlert({ message: 'Removed successfully.', actionresult: 'pass' })
                    )),
                    catchError((_error) => of(ShowAlert({ message: 'Failed to remove.', actionresult: 'fail' }),loadspinner({isloaded:false})))
                )
            )
        )
    );


}