import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SwitchDeviceModel} from '../../models/switch-device-model';
import {
  SwitchesChangeStatusAction,
  SwitchesOnOffAction,
  SwitchesRenameAction,
  SwitchesRenameErrorAction,
  SwitchesRenameOutletAction,
  SwitchesRenameSuccessAction
} from '../../store/switches-actions';
import {SwitchDto, SwitchStatus} from '../../interfaces/switch-device.interface';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {SwitchesState} from '../../store/switches-reducer';
import {SwitchesRenameEffectsService} from '../../store/switches-rename-effects.service';

@Component({
  selector: 'sh-device-box',
  templateUrl: './device-box.component.html',
  styleUrls: ['./device-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceBoxComponent implements OnInit {

  @Input()
  public device: SwitchDeviceModel;

  constructor(private store: Store<SwitchesState>,
              private switchesRenameEffects: SwitchesRenameEffectsService) {
  }

  ngOnInit() {
  }

  public rename(name: string): void {
    this.store.dispatch(new SwitchesRenameAction({deviceId: this.device.id, name}));
  }

  public renameSwitch(outlet: number, name: string): void {
    this.store.dispatch(new SwitchesRenameOutletAction({deviceId: this.device.id, outlet, name}));
  }

  public toggle(switchStatus: SwitchDto) {
    this.store.dispatch(new SwitchesChangeStatusAction({deviceId: this.device.id, switch: switchStatus}));
  }

  public onOff(state: boolean): void {
    const status = state ? SwitchStatus.ON : SwitchStatus.OFF;

    this.store.dispatch(new SwitchesOnOffAction({deviceId: this.device.id, status}));
  }

  public getDeviceRenameErrorEffect(): Observable<SwitchesRenameErrorAction> {
    return this.switchesRenameEffects.renameError$
      .pipe(
        filter((action: SwitchesRenameErrorAction) => action.payload.deviceId === this.device.id)
      );
  }

  public getDeviceRenameSuccessEffect(): Observable<SwitchesRenameSuccessAction> {
    return this.switchesRenameEffects.renameSuccess$
      .pipe(
        filter((action: SwitchesRenameSuccessAction) => action.payload.deviceId === this.device.id)
      );
  }
}
