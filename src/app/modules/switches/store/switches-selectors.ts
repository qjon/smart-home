import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SWITCHES_STATE_NAME, SwitchesState} from './switches-reducer';
import {SwitchDeviceModel} from '../models/switch-device-model';

const switchesFeatureSelector = createFeatureSelector<SwitchesState>(SWITCHES_STATE_NAME);
const switchesDeviceListSelector = createSelector(switchesFeatureSelector, (s: SwitchesState): SwitchDeviceModel[] => s.ids.map(id => new SwitchDeviceModel(s.devices[id])));
const deviceSelector = createSelector(
  switchesFeatureSelector,
  (s: SwitchesState, params: { deviceId: string }): SwitchDeviceModel => s.devices[params.deviceId] ? new SwitchDeviceModel(s.devices[params.deviceId]) : null
);

export const switchesSelectors = {
  deviceSelector,
  switchesFeatureSelector,
  switchesDeviceListSelector,
};
