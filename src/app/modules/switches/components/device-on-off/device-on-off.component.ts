import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sh-device-on-off',
  templateUrl: './device-on-off.component.html',
  styleUrls: ['./device-on-off.component.scss']
})
export class DeviceOnOffComponent {
  @Output()
  public toggle = new EventEmitter<boolean>();

  @Input()
  public isEnabled = false;

  public turnOn(): void {
    this.toggle.emit(true);
  }

  public turnOff(): void {
    this.toggle.emit(false);
  }

}
