import {SwitchDeviceDto, SwitchDto, SwitchNameDto} from '../interfaces/switch-device.interface';
import {SwitchModel} from './switch-model';

export class SwitchDeviceModel {
  public get id(): string {
    return this.data.deviceid;
  }

  public get name(): string {
    return this.data.name || this.data.model;
  }

  public get isConnected(): boolean {
    return this.data.isConnected;
  }

  public get status(): SwitchDto[] {
    return this.data.params.switches;
  }

  public switches = new Map<number, SwitchModel>();

  constructor(protected data: SwitchDeviceDto) {
    this.status.forEach((s: SwitchNameDto) => {
      this.switches.set(s.outlet, new SwitchModel(s));
    });
  }

  public getSwitchesOutlet(): Iterable<number> {
    return this.switches.keys();
  }
}
