import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SwitchDeviceDto, SwitchDto, SwitchStatus} from '../interfaces/switch-device.interface';

@Injectable({
  providedIn: 'root'
})
export class SwitchesApiService {

  protected host = '';

  constructor(protected httpClient: HttpClient) {
  }

  public fetchList(): Observable<SwitchDeviceDto[]> {
    return this.httpClient.get<SwitchDeviceDto[]>(this.host + '/api/devices');
  }

  public changeStatus(deviceId: string, switchStatus: SwitchDto): Observable<any> {
    return this.httpClient.put<any>(this.host + `/api/devices/${deviceId}`, {switches: [switchStatus]});
  }

  public rename(deviceId: string, name: string): Observable<any> {
    return this.httpClient.put<any>(this.host + `/api/devices/${deviceId}/rename`, {name});
  }

  public renameSwitch(deviceId: string, outlet: string, name: string): Observable<any> {
    return this.httpClient.put<any>(this.host + `/api/devices/${deviceId}/outlet/${outlet.toString()}/rename`, {name});
  }

  public toggleAll(deviceId: string, state: SwitchStatus): Observable<boolean> {
    return this.httpClient.put<boolean>(this.host + `/api/devices/${deviceId}`, {
      switches: [
        {switch: state, outlet: 0},
        {switch: state, outlet: 1},
        {switch: state, outlet: 2},
        {switch: state, outlet: 3},
      ]
    });
  }
}
