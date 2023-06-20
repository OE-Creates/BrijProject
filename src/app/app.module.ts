import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { NametranslatePipe } from './pipes/nametranslate.pipe';
import { MoviecardComponent } from './subcomp/moviecard/moviecard.component';
import { SuggestcardComponent } from './subcomp/suggestcard/suggestcard.component';
import { FilterimagePipe } from './pipes/filterimage.pipe';
import { SearchcardComponent } from './subcomp/searchcard/searchcard.component';
import { ReplaceimagePipe } from './pipes/replaceimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    NametranslatePipe,
    MoviecardComponent,
    SuggestcardComponent,
    FilterimagePipe,
    SearchcardComponent,
    ReplaceimagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
