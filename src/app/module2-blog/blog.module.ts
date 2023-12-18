import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BlogRoutingModule } from "./blog.routing";
import { AddblogComponent } from "./addblog/addblog.component";
import { BlogComponent } from "./blog/blog.component";
import { EditblogComponent } from "./editblog/editblog.component";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { BlogEffects } from "../shared/store/blog/blog.effect";
import { AppEffects } from "../shared/store/global/app.effects";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AddblogComponent,
    BlogComponent,
    EditblogComponent
   
  ],
  imports: [
   // BrowserModule,
   CommonModule,
    MaterialModule,
    FormsModule,
   // BrowserAnimationsModule,
    BlogRoutingModule,
    ReactiveFormsModule,

    //StoreRouterConnectingModule.forRoot(),
    //EffectsModule.forRoot([BlogEffects,AppEffects]),


  ],
  providers: []
})
export class BlogModule { }
