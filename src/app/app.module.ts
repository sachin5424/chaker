import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_http/interceptor';
import { FORBIDDENPageComponent } from './forbidden-page/forbidden-page.component';



@NgModule({
  declarations: [
    AppComponent,
    FORBIDDENPageComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
       useClass:AuthInterceptor,
       multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
