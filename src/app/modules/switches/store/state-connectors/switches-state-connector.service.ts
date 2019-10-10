import {Injectable} from '@angular/core';
import {SwitchesStateConnectorInterface} from '../../interfaces/switches-state-connector.interface';
import {select, Store} from '@ngrx/store';
import {switchesSelectors} from '../switches-selectors';
import {SwitchDeviceDto} from '../../interfaces/switch-device.interface';
import {SwitchesLoadAction, SwitchesOpenCreateDialogAction} from '../switches-actions';

@Injectable({
  providedIn: 'root'
})
export class SwitchesStateConnectorService implements SwitchesStateConnectorInterface {

  public devices$ = this.store
    .pipe(
      select(switchesSelectors.switchesDeviceListSelector),
    );
  
  constructor(protected store: Store<any>) {
  }

  public setDevices(devices: SwitchDeviceDto[]): void {
    this.store.dispatch(new SwitchesLoadAction({devices}));
  }

  public openAddDeviceDialog(): void {
    this.store.dispatch(new SwitchesOpenCreateDialogAction());
  }

}
