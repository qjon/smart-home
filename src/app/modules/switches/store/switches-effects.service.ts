import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  SwitchActionTypes,
  SwitchesChangeStatusAction,
  SwitchesChangeStatusErrorAction,
  SwitchesChangeStatusSuccessAction,
  SwitchesOnOffAction,
  SwitchesOnOffSuccessAction
} from './switches-actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {SwitchesApiService} from '../api/switches-api.service';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchesEffectsService {

  @Effect({dispatch: true})
  public changeStatus = this.actions$
    .pipe(
      ofType(SwitchActionTypes.ChangeStatus),
      switchMap((action: SwitchesChangeStatusAction) => {
        return this.switchesApiService.changeStatus(action.payload.deviceId, action.payload.switch)
          .pipe(
            map(() => {
              const deviceId = action.payload.deviceId;
              const switchStatus = action.payload.switch;

              return new SwitchesChangeStatusSuccessAction({deviceId, switch: switchStatus});
            }),
            catchError(() => of(new SwitchesChangeStatusErrorAction()))
          );
      })
    );

  @Effect({dispatch: true})
  public onOff = this.actions$
    .pipe(
      ofType(SwitchActionTypes.OnOff),
      switchMap((action: SwitchesOnOffAction) => {
        const {deviceId, status} = action.payload;

        return this.switchesApiService.toggleAll(deviceId, status)
          .pipe(
            map(() => new SwitchesOnOffSuccessAction({deviceId, status}))
          );
      })
    );

  constructor(protected actions$: Actions,
              protected switchesApiService: SwitchesApiService) {
  }
}
