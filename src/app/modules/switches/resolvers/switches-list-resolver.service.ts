import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {SwitchDeviceDto} from '../interfaces/switch-device.interface';
import {Observable} from 'rxjs';
import {SwitchesApiService} from '../api/switches-api.service';
import {tap} from 'rxjs/operators';
import {SwitchesDeviceListStateConnectorInterface} from '../interfaces/switches-device-list-state-connector.interface';
import {switchesStateConnectorParamName} from '../const/switches.consts';

@Injectable({
  providedIn: 'root'
})
export class SwitchesListResolverService implements Resolve<SwitchDeviceDto[]> {
  constructor(private switchesApiService: SwitchesApiService) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SwitchDeviceDto[]> {
    const switchesDeviceListStateConnector: SwitchesDeviceListStateConnectorInterface = route.parent.data[switchesStateConnectorParamName];

    return this.switchesApiService.fetchList()
      .pipe(
        tap((devices) => {
          switchesDeviceListStateConnector.setDevices(devices);
        })
      );
  }
}
