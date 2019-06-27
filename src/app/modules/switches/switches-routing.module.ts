import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SwitchesListComponent} from './components/list/switches-list.component';
import {SwitchesListResolverService} from './resolvers/switches-list-resolver.service';

const routes: Routes = [
  {
    path: 'list',
    component: SwitchesListComponent,
    resolve: {
      devices: SwitchesListResolverService,
    }
  },
  {
    path: '**',
    redirectTo: 'list',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchesRoutingModule {
}
