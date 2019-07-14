import {Injectable} from '@angular/core';
import {StateConnectorInterface} from '../../../../core/interafces/state-connector';
import {SwitchesStateConnectorInterface} from '../../interfaces/switches-state-connector.interface';

@Injectable({
  providedIn: 'root'
})
export class SwitchesStateConnectorService implements StateConnectorInterface<SwitchesStateConnectorInterface> {

  constructor() {
  }

  public getStateConnector(): SwitchesStateConnectorInterface {
    return {};
  }
}
