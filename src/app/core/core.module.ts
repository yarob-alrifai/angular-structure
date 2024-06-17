import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToUpperCasePipe } from './pipes/to-upper-case.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HeaderInterceptor } from './interceptors/header.interceptor';

@NgModule({
  declarations: [ToUpperCasePipe],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
