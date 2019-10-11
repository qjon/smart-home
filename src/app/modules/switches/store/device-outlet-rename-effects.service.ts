import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {SwitchesApiService} from '../api/switches-api.service';
import {
  SwitchActionTypes,
  SwitchesRenameOutletAction,
  SwitchesRenameOutletErrorAction,
  SwitchesRenameOutletSuccessAction
} from './switches-actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {NotificationsService} from '../../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceOutletRenameEffectsService {

  public outletRenameError$ = this.actions$
    .pipe(
      ofType(SwitchActionTypes.RenameOutletError),
    );

  public outletRenameSuccess$ = this.actions$
    .pipe(
      ofType(SwitchActionTypes.RenameOutletSuccess),
    );


  @Effect({dispatch: true})
  public outletRename$ = this.actions$
    .pipe(
      ofType(SwitchActionTypes.RenameOutlet),
      switchMap((action: SwitchesRenameOutletAction) => {
        const {deviceId, outlet, name} = action.payload;

        return this.switchesApiService.renameSwitch(deviceId, outlet.toString(), name)
          .pipe(
            map(() => new SwitchesRenameOutletSuccessAction({deviceId, outlet})),
            catchError(() => of(new SwitchesRenameOutletErrorAction({deviceId, outlet})))
          );
      })
    );

  @Effect({dispatch: false})
  public outletRenameError = this.outletRenameError$
    .pipe(
      tap(() => this.notificationService.error('Rename Switch', 'Switch name has not been changed'))
    );

  @Effect({dispatch: false})
  public outletRenameSuccess = this.outletRenameSuccess$
    .pipe(
      tap(() => this.notificationService.success('Rename Switch', 'Switch name has been changed'))
    );

  constructor(protected actions$: Actions,
              protected switchesApiService: SwitchesApiService,
              protected notificationService: NotificationsService) {
  }
}
