import {SwitchDeviceDto, SwitchDto, SwitchStatus} from '../interfaces/switch-device.interface';
import {Action} from '@ngrx/store';

export enum SwitchActionTypes {
  Load = '[Switches] Load',
  ChangeStatus = '[Switches] Change status',
  ChangeStatusError = '[Switches] Change status error',
  ChangeStatusSuccess = '[Switches] Change status success',
  ChangeConnectionStatus = '[Switches] Change connection status',
  OnOff = '[Switches] Turn on/off',
  OnOffSuccess = '[Switches] Turn on/off success',
  OpenCreateDialog = '[Switches] Open create dialog',
  Rename = '[Switches] Rename device',
  RenameError = '[Switches] Rename device error',
  RenameSuccess = '[Switches] Rename device success',
  RenameOutlet = '[Switches] Rename device outlet',
  RenameOutletError = '[Switches] Rename device outlet error',
  RenameOutletSuccess = '[Switches] Rename device outlet success',
  Update = '[Switches] Update device'
}

export class SwitchesLoadAction implements Action {
  readonly type = SwitchActionTypes.Load;

  constructor(public payload: { devices: SwitchDeviceDto[] }) {

  }
}

export class SwitchesChangeStatusAction implements Action {
  readonly type = SwitchActionTypes.ChangeStatus;

  constructor(public payload: { deviceId: string, switch: SwitchDto }) {

  }
}

export class SwitchesChangeStatusErrorAction implements Action {
  readonly type = SwitchActionTypes.ChangeStatusError;
  public payload = {};
}

export class SwitchesChangeStatusSuccessAction implements Action {
  readonly type = SwitchActionTypes.ChangeStatusSuccess;

  constructor(public payload: { deviceId: string, switch: SwitchDto }) {

  }
}

export class SwitchesChangeConnectionStatusAction implements Action {
  readonly type = SwitchActionTypes.ChangeConnectionStatus;

  constructor(public payload: { deviceId: string, isConnected: boolean }) {

  }
}

export class SwitchesOnOffAction implements Action {
  readonly type = SwitchActionTypes.OnOff;

  constructor(public payload: { deviceId: string, status: SwitchStatus }) {

  }
}

export class SwitchesOpenCreateDialogAction implements Action {
  readonly type = SwitchActionTypes.OpenCreateDialog;
}

export class SwitchesOnOffSuccessAction implements Action {
  readonly type = SwitchActionTypes.OnOffSuccess;

  constructor(public payload: { deviceId: string, status: SwitchStatus }) {

  }
}

export class SwitchesRenameAction implements Action {
  readonly type = SwitchActionTypes.Rename;

  constructor(public payload: { deviceId: string, name: string }) {

  }
}

export class SwitchesRenameErrorAction implements Action {
  readonly type = SwitchActionTypes.RenameError;

  constructor(public payload: { deviceId: string }) {

  }
}

export class SwitchesRenameSuccessAction implements Action {
  readonly type = SwitchActionTypes.RenameSuccess;

  constructor(public payload: { deviceId: string }) {

  }
}

export class SwitchesRenameOutletAction implements Action {
  readonly type = SwitchActionTypes.RenameOutlet;

  constructor(public payload: { deviceId: string, outlet: number, name: string }) {

  }
}

export class SwitchesRenameOutletErrorAction implements Action {
  readonly type = SwitchActionTypes.RenameOutletError;

  constructor(public payload: { deviceId: string, outlet: number }) {

  }
}

export class SwitchesRenameOutletSuccessAction implements Action {
  readonly type = SwitchActionTypes.RenameOutletSuccess;

  constructor(public payload: { deviceId: string, outlet: number }) {

  }
}

export class SwitchesUpdateAction implements Action {
  readonly type = SwitchActionTypes.Update;

  constructor(public payload: { deviceId: string, params: any }) {

  }
}

export type SwitchesAction =
  SwitchesLoadAction
  | SwitchesChangeStatusAction
  | SwitchesChangeStatusErrorAction
  | SwitchesChangeStatusSuccessAction
  | SwitchesChangeConnectionStatusAction
  | SwitchesOnOffAction
  | SwitchesOnOffSuccessAction
  | SwitchesOpenCreateDialogAction
  | SwitchesRenameAction
  | SwitchesRenameErrorAction
  | SwitchesRenameSuccessAction
  | SwitchesRenameOutletAction
  | SwitchesRenameOutletErrorAction
  | SwitchesRenameOutletSuccessAction
  | SwitchesUpdateAction
  ;
