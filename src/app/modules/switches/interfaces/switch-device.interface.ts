export enum SwitchStatus {
  ON = 'on',
  OFF = 'off',
}

export interface SwitchDto {
  switch: SwitchStatus;
  outlet: number;
}

export interface SwitchNameDto extends SwitchDto {
  name: string;
}

export interface SwitchDeviceParamsDto {
  switches: SwitchNameDto[];
  configure: SwitchDto[];
  staMac: string;
}

export interface SwitchDeviceLastUpdateDto {
  deviceid: string;
  action: string;
  params: SwitchDeviceParamsDto;
}

export interface SwitchDeviceDto {
  deviceid: string;
  apiKey: string;
  model: string;
  name?: string;
  version: string;
  isSingleSwitch: boolean;
  isConnected: boolean;
  lastStatusChangeTimestamp: string;
  params: {
    switches: SwitchNameDto[];
    configuration: SwitchDto[];
  };
  rawMessageLastUpdate: SwitchDeviceLastUpdateDto;
}


export interface SwitchDeviceChangeSettingsDto {
  apiKey: string;
  model: string;
  name?: string;
  switches: {
    outlet: number;
    name: string;
  }[];
}
