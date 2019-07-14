import {Injectable} from '@angular/core';
import {StateConnectorInterface} from '../../../../core/interafces/state-connector';
import {SwitchesStateConnectorInterface} from '../../interfaces/switches-state-connector.interface';
import {select, Store} from '@ngrx/store';
import {switchesSelectors} from '../switches-selectors';
import {SwitchDeviceDto} from '../../interfaces/switch-device.interface';
import {SwitchesLoadAction} from '../switches-actions';

@Injectable({
  providedIn: 'root'
})
export class SwitchesStateConnectorService implements StateConnectorInterface<SwitchesStateConnectorInterface> {

  constructor(protected store: Store<any>) {
  }

  public getStateConnector(): SwitchesStateConnectorInterface {
    return {
      devices$: this.store
        .pipe(
          select(switchesSelectors.switchesDeviceListSelector),
        ),

      setDevices: (devices: SwitchDeviceDto[]): void => {
        this.store.dispatch(new SwitchesLoadAction({devices}));
      }
    };
  }
}
