import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {SwitchesCreateAction} from '../../store/switches-actions';

@Component({
  selector: 'sh-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddDeviceComponent>,
              private store: Store<any>) {
  }

  public ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      deviceId: [null, Validators.required],
      apiKey: [null, Validators.required],
    });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(new SwitchesCreateAction(this.form.value));
    }
  }
}
