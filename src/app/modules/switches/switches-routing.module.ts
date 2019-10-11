import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SwitchesListComponent} from './components/list/switches-list.component';
import {SwitchesListResolverService} from './resolvers/switches-list-resolver.service';
import {DeviceDetailsComponent} from './components/device-details/device-details.component';
import {SwitchesStateConnectorsModule} from './store/state-connectors/switches-state-connectors.module';
import {GuardsModule} from './guards/guards.module';

const routes: Routes = [
  {
    path: '',
    resolve: {
      devices: SwitchesListResolverService,
    },
    children: [
      {
        path: 'list',
        component: SwitchesListComponent,
      },
      {
        path: 'device/:id',
        component: DeviceDetailsComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'list',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GuardsModule,
    SwitchesStateConnectorsModule,
  ],
  exports: [RouterModule],
  providers: [
    SwitchesListResolverService
  ]
})
export class SwitchesRoutingModule {
}
