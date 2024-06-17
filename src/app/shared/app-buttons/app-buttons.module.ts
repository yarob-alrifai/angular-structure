import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPrimaryButtonComponent } from './app-primary-button/app-primary-button.component';
import { AppSecondaryButtonComponent } from './app-secondary-button/app-secondary-button.component';

@NgModule({
  declarations: [AppPrimaryButtonComponent, AppSecondaryButtonComponent],
  imports: [CommonModule],
})
export class AppButtonsModule {}
