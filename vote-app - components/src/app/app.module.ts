import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { PointsComponent } from './components/points/points.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    ArticleFormComponent,
    ArticleListComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
