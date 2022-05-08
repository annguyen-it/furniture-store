import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebShellModule } from '@furniture-store/web/shell/feature/web-shell';
import { appProvider } from './app.provider';
import { getAppConfigProvider } from '@furniture-store/web/shared/app-config';
import { environment } from '../environments/environment';

const TAIGA_UI = [TuiRootModule, TuiDialogModule, TuiAlertModule];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WebShellModule,
    ...TAIGA_UI,
  ],
  declarations: [AppComponent],
  providers: [getAppConfigProvider(environment), ...appProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
