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
import {SwitchesSettingsEffectsService} from './store/switches-settings-effects.service';
import {SmartHomeCoreModule} from '../../core/smart-home-core.module';
import {DeviceBoxComponent} from './components/device-box/device-box.component';
import {ErrorResponseInterceptorService} from './api/error-response-interceptor.service';
import {AddDeviceComponent} from './components/add-device/add-device.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NotificationsModule} from '../notifications/notifications.module';
import {DeviceDetailsComponent} from './components/device-details/device-details.component';
import {SwitchesStateConnectorsModule} from './store/state-connectors/switches-state-connectors.module';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {LastUpdateComponent} from './components/last-update/last-update.component';

@NgModule({
  declarations: [
    AddDeviceComponent,
    DeviceBoxComponent,
    DeviceOnOffComponent,
    SwitchesListComponent,
    SwitchStatusComponent,
    TrueFalseComponent,
    DeviceDetailsComponent,
    LastUpdateComponent,
  ],
  entryComponents: [
    AddDeviceComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      SwitchesEffectsService,
      SwitchesSettingsEffectsService,
    ]),
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    NotificationsModule,
    ReactiveFormsModule,
    SmartHomeCoreModule,
    StoreModule.forFeature(SWITCHES_STATE_NAME, switchesReducer),
    SwitchesRoutingModule,
    SwitchesStateConnectorsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [
    ServerWebsocketService,
    SwitchesApiService,
    SwitchesSettingsEffectsService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptorService, multi: true},
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SwitchesModule {
}
