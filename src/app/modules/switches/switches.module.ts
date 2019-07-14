import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchesApiService} from './api/switches-api.service';
import {SwitchesListComponent} from './components/list/switches-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SwitchesRoutingModule} from './switches-routing.module';
import {StoreModule} from '@ngrx/store';
import {SWITCHES_STATE_NAME, switchesReducer} from './store/switches-reducer';
import {MatButtonModule, MatButtonToggleModule, MatCardModule, MatDividerModule, MatIconModule} from '@angular/material';
import {SwitchStatusComponent} from './components/switch-status/switch-status.component';
import {EffectsModule} from '@ngrx/effects';
import {SwitchesEffectsService} from './store/switches-effects.service';
import {TrueFalseComponent} from './components/true-false/true-false.component';
import {DeviceOnOffComponent} from './components/device-on-off/device-on-off.component';
import {ServerWebsocketService} from './websocket/server-websocket.service';
import {SwitchesRenameEffectsService} from './store/switches-rename-effects.service';
import {SmartHomeCoreModule} from '../../core/smart-home-core.module';
import {DeviceBoxComponent} from './components/device-box/device-box.component';
import {ErrorResponseInterceptorService} from './api/error-response-interceptor.service';
import {DeviceOutletRenameEffectsService} from './store/device-outlet-rename-effects.service';
import {SwitchesStateConnectorService} from './store/state-connectors/switches-state-connector.service';

@NgModule({
  declarations: [SwitchesListComponent, SwitchStatusComponent, TrueFalseComponent, DeviceOnOffComponent, DeviceBoxComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      DeviceOutletRenameEffectsService,
      SwitchesEffectsService,
      SwitchesRenameEffectsService,
    ]),
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    SmartHomeCoreModule,
    StoreModule.forFeature(SWITCHES_STATE_NAME, switchesReducer),
    SwitchesRoutingModule,
  ],
  providers: [
    ServerWebsocketService,
    SwitchesApiService,
    SwitchesRenameEffectsService,
    SwitchesStateConnectorService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptorService, multi: true},
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SwitchesModule {
}
