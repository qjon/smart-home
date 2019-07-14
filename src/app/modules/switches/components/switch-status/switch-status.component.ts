import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SwitchDto, SwitchStatus} from '../../interfaces/switch-device.interface';
import {MatButtonToggleChange} from '@angular/material';
import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {SwitchModel} from '../../models/switch-model';
import {SwitchesRenameOutletErrorAction, SwitchesRenameOutletSuccessAction} from '../../store/switches-actions';
import {DeviceOutletRenameEffectsService} from '../../store/device-outlet-rename-effects.service';

@Component({
  selector: 'sh-switch-status',
  templateUrl: './switch-status.component.html',
  styleUrls: ['./switch-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchStatusComponent implements OnInit {
  @Input()
  public switchModel: SwitchModel;

  @Input()
  public deviceId: string;

  @Input()
  public isEnabled = false;

  @Output()
  public change = new EventEmitter<SwitchDto>();

  @Output()
  public onRename = new EventEmitter<string>();

  @Input()
  public renameError$: Observable<any>;

  @Input()
  public renameSuccess$: Observable<any>;

  public onValue = SwitchStatus.ON;

  public availableValues = SwitchStatus;

  constructor(private deviceOutletRenameEffectsService: DeviceOutletRenameEffectsService) {
  }

  ngOnInit() {
  }

  public toggle(change: MatButtonToggleChange): void {
    this.change.emit({outlet: this.switchModel.outlet, switch: change.value});
  }

  public getDeviceSwitchRenameErrorEffect(): Observable<any> {
    return this.deviceOutletRenameEffectsService.outletRenameError$
      .pipe(
        filter((action: SwitchesRenameOutletErrorAction) => action.payload.deviceId === this.deviceId && action.payload.outlet === this.switchModel.outlet)
      );
  }

  public getDeviceSwitchRenameSuccessEffect(): Observable<any> {
    return this.deviceOutletRenameEffectsService.outletRenameSuccess$
      .pipe(
        filter((action: SwitchesRenameOutletSuccessAction) => action.payload.deviceId === this.deviceId && action.payload.outlet === this.switchModel.outlet),
        tap((action: SwitchesRenameOutletSuccessAction) => console.log(action.payload, this.deviceId, this.switchModel.outlet)),
      );
  }
}
