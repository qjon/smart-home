import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {SwitchDeviceDto} from '../interfaces/switch-device.interface';
import {Observable} from 'rxjs';
import {SwitchesApiService} from '../api/switches-api.service';
import {Store} from '@ngrx/store';
import {SwitchesState} from '../store/switches-reducer';
import {tap} from 'rxjs/operators';
import {SwitchesLoadAction} from '../store/switches-actions';

@Injectable({
  providedIn: 'root'
})
export class SwitchesListResolverService implements Resolve<SwitchDeviceDto[]> {


  constructor(private switchesApiService: SwitchesApiService,
              private store: Store<SwitchesState>) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SwitchDeviceDto[]> {
    return this.switchesApiService.fetchList()
      .pipe(
        tap((devices) => {
          this.store.dispatch(new SwitchesLoadAction({devices}));
        })
      );
  }
}
