import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SwitchDeviceModel} from '../../models/switch-device-model';
import {SwitchesChangeStatusAction, SwitchesOnOffAction} from '../../store/switches-actions';
import {SwitchDto, SwitchStatus} from '../../interfaces/switch-device.interface';
import {Store} from '@ngrx/store';
import {SwitchesState} from '../../store/switches-reducer';

@Component({
  selector: 'sh-device-box',
  templateUrl: './device-box.component.html',
  styleUrls: ['./device-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceBoxComponent {

  @Input()
  public device: SwitchDeviceModel;

  constructor(private store: Store<SwitchesState>) {
  }

  public toggle(switchStatus: SwitchDto) {
    this.store.dispatch(new SwitchesChangeStatusAction({deviceId: this.device.id, switch: switchStatus}));
  }

  public onOff(state: boolean): void {
    const status = state ? SwitchStatus.ON : SwitchStatus.OFF;

    this.store.dispatch(new SwitchesOnOffAction({deviceId: this.device.id, status}));
  }

}
