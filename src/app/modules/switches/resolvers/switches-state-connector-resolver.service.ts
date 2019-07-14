import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {SwitchesStateConnectorInterface} from '../interfaces/switches-state-connector.interface';
import {SwitchesStateConnectorService} from '../store/state-connectors/switches-state-connector.service';

@Injectable({
  providedIn: 'root'
})
export class SwitchesStateConnectorResolverService implements Resolve<SwitchesStateConnectorInterface> {

  constructor(protected switchesStateConnectorService: SwitchesStateConnectorService) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SwitchesStateConnectorInterface {
    return this.switchesStateConnectorService.getStateConnector();
  }
}
