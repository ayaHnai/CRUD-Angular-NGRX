import {routerReducer} from '@ngrx/router-store'
import { counterReducer } from './counter/counter.reducer'
import { blogReducer } from './blog/blog.reducer'
import { AppReducer } from './global/app.reducers'

export const AppState={
    counter:counterReducer,
    blog:blogReducer,
    app:AppReducer,
    router:routerReducer
}