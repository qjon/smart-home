import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SwitchDto, SwitchStatus} from '../../interfaces/switch-device.interface';
import {MatButtonToggleChange} from '@angular/material';
import {Observable, of} from 'rxjs';
import {filter} from 'rxjs/operators';
import {SwitchModel} from '../../models/switch-model';

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

  public onValue = SwitchStatus.ON;

  public availableValues = SwitchStatus;

  constructor() {
  }

  ngOnInit() {
  }

  public toggle(change: MatButtonToggleChange): void {
    this.change.emit({outlet: this.switchModel.outlet, switch: change.value});
  }

  public getDeviceSwitchRenameErrorEffect(): Observable<any> {
    return of(false)
      .pipe(
        filter((x) => !!x)
      );
  }

  public getDeviceSwitchRenameSuccessEffect(): Observable<any> {
    return of(false)
      .pipe(
        filter((x) => !!x)
      );
  }

}
