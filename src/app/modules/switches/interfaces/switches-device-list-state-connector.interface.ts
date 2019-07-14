import {Observable} from 'rxjs';
import {SwitchDeviceModel} from '../models/switch-device-model';
import {SwitchDeviceDto} from './switch-device.interface';

export interface SwitchesDeviceListStateConnectorInterface {
  devices$: Observable<SwitchDeviceModel[]>;

  setDevices(devices: SwitchDeviceDto[]): void;
}
