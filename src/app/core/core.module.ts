import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';

import { HomePageService } from './serviсe/homePage.service';
import { HomePageState } from './storage/store/homepage.state';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([HomePageState], {
      executionStrategy: NoopNgxsExecutionStrategy,
    }),
  ],

  providers: [
    HomePageService,
  ],
  declarations: []
})
export class CoreModule { }
