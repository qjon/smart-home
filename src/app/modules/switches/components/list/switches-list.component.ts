import {Component} from '@angular/core';
import {SwitchDeviceModel} from '../../models/switch-device-model';
import {ActivatedRoute} from '@angular/router';
import {SwitchesDeviceListStateConnectorInterface} from '../../interfaces/switches-device-list-state-connector.interface';
import {switchesStateConnectorParamName} from '../../const/switches.consts';

@Component({
  selector: 'sh-list',
  templateUrl: './switches-list.component.html',
  styleUrls: ['./switches-list.component.scss'],
})
export class SwitchesListComponent {
  public deviceListStateConnector: SwitchesDeviceListStateConnectorInterface;

  constructor(private activatedRoute: ActivatedRoute) {
    this.deviceListStateConnector = this.activatedRoute.snapshot.data[switchesStateConnectorParamName];
  }

  public trackSwitch(item: SwitchDeviceModel): string {
    return item.id;
  }
}
