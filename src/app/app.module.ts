import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterButtonComponent } from './module1/counter-button/counter-button.component';
import { CounterDisplayComponent } from './module1/counter-display/counter-display.component';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter/counter.reducer';
import { CustomCounterComponent } from './module1/custom-counter/custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BlogModule } from './module2-blog/blog.module';
import { HomeComponent } from './home/home.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { CounterViewComponent } from './module1/counter-view/counter-view.component';
import { AppState } from './shared/store/AppStores.state';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './shared/store/blog/blog.effect';
import { AppEffects } from './shared/store/global/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    CounterViewComponent,

    HomeComponent, LoadingSpinnerComponent, MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),

    BlogModule

    ,

    StoreModule.forRoot(AppState),
    ReactiveFormsModule,
    HttpClientModule,
    //StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BlogEffects,AppEffects]),
    // StoreRouterConnectingModule.forRoot(
    //   {serializer:Customserializer}
    // )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
