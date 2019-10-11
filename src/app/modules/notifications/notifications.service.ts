import {Injectable} from '@angular/core';
import {NotificationsModule} from './notifications.module';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: NotificationsModule
})
export class NotificationsService {

  private snackBarOptions: MatSnackBarConfig = {
    duration: 30000,
  };

  public constructor(private snackBar: MatSnackBar) {

  }

  public success(title: string, message: string): void {
    this.snackBar.open(message, title, {...this.snackBarOptions, panelClass: 'notification-success'});
  }

  public error(title: string, message: string): void {
    this.snackBar.open(message, title, {...this.snackBarOptions, panelClass: 'notification-error'});
  }
}
