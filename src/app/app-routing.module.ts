import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'questionnaire',
    loadChildren: () =>
      import('./questionnaire/questionnaire.module').then(
        (m) => m.QuestionnairePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'questionnaire',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
