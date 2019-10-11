import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {SwitchActionTypes, SwitchesRenameAction, SwitchesRenameErrorAction, SwitchesRenameSuccessAction} from './switches-actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {SwitchesApiService} from '../api/switches-api.service';
import {of} from 'rxjs';
import {NotificationsService} from '../../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class SwitchesRenameEffectsService {
  public renameError$ = this.actions$
    .pipe(
      ofType(SwitchActionTypes.RenameError),
    );

  public renameSuccess$ = this.actions$
    .pipe(
      ofType(SwitchActionTypes.RenameSuccess),
    );


  @Effect({dispatch: true})
  public rename = this.actions$
    .pipe(
      ofType(SwitchActionTypes.Rename),
      switchMap((action: SwitchesRenameAction) => {
        return this.switchesApiService.rename(action.payload.deviceId, action.payload.name)
          .pipe(
            map(() => new SwitchesRenameSuccessAction({deviceId: action.payload.deviceId})),
            catchError(() => of(new SwitchesRenameErrorAction({deviceId: action.payload.deviceId})))
          );
      }),
    );


  @Effect({dispatch: false})
  public renameError = this.renameError$
    .pipe(
      tap(() => this.notificationService.error('Rename', 'Switch name has not been changed'))
    );


  @Effect({dispatch: false})
  public renameSuccess = this.renameSuccess$
    .pipe(
      tap(() => this.notificationService.success('Rename', 'Switch name has been changed'))
    );

  constructor(protected actions$: Actions,
              protected switchesApiService: SwitchesApiService,
              protected notificationService: NotificationsService) {
  }
}
