
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SystemPromptComponent } from './system-prompt.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'system-prompt', component: SystemPromptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
