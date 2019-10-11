import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {map, take, tap} from 'rxjs/operators';
import {DeviceDetailsStateConnectorService} from '../../store/state-connectors/device-details-state-connector.service';
import {SwitchDeviceModel} from '../../models/switch-device-model';

@Component({
  selector: 'sh-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public switches: FormGroup;

  public device: SwitchDeviceModel;

  public isEditMode = false;

  public deviceModels: string[] = [
    'T1EU',
    'S26E',
  ];

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private deviceDetailsStateConnectorService: DeviceDetailsStateConnectorService) {
  }

  public ngOnDestroy(): void {
    this.deviceDetailsStateConnectorService.setCurrentDeviceId(null);
  }

  public ngOnInit(): void {

    this.switches = this.fb.group({
      o0: [null, Validators.required],
      o1: [null, Validators.required],
      o2: [null, Validators.required],
      o3: [null, Validators.required],
    });

    this.form = this.fb.group({
      name: [null, Validators.required],
      deviceId: [null, Validators.required],
      apiKey: [null, Validators.required],
      model: [null, Validators.required],
      isSingleSwitch: [{value: null, disabled: true}, Validators.required],
      switches: this.switches
    });

    this.disableForm();

    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        tap((id) => console.log(id)),
      )
      .subscribe((id) => this.deviceDetailsStateConnectorService.setCurrentDeviceId(id));

    this.deviceDetailsStateConnectorService.device$
      .pipe(
        take(1) // not refresh form if update from device arrived
      )
      .subscribe((device: SwitchDeviceModel) => {
        this.device = device;

        this.form.reset({
          name: device.name,
          deviceId: device.id,
          apiKey: device.apiKey,
          model: device.model,
          isSingleSwitch: device.isSingleSwitch,
          switches: {
            o0: device.switches.get(0).name,
            o1: device.switches.has(1) ? device.switches.get(1).name : null,
            o2: device.switches.has(2) ? device.switches.get(2).name : null,
            o3: device.switches.has(3) ? device.switches.get(3).name : null,
          }
        });
      });
  }

  public onSubmit(): void {
    console.log(this.form.value);
  }


  private disableForm(): void {
    this.form.disable();
  }

  private enableForm(): void {
    this.form.enable();
    this.form.controls['isSingleSwitch'].disable();

    for (let i = this.device.switches.size; i < 4; i++) {
      this.switches.controls[`o${i}`].disable();
    }
  }

}
