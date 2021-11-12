import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SpecialComponent } from './special/special.component';
import { AboutComponent } from './about/about.component';
import { BestComponent } from './best/best.component';
import { HistoryComponent } from './history/history.component';
@NgModule({
  declarations: [
    AppComponent,
    
    SpecialComponent,
         AboutComponent,
         BestComponent,
         HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'special', component: SpecialComponent},
      {path: 'about', component: AboutComponent},
      {path: 'best', component: BestComponent},
      {path: 'history', component: HistoryComponent},
                                 
        

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
