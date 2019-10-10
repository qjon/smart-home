import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {SwitchesOpenCreateDialogAction} from '../../modules/switches/store/switches-actions';

@Component({
  selector: 'sh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store<any>) {
  }

  public onClickAdd(): void {
    this.store.dispatch(new SwitchesOpenCreateDialogAction());
  }

}
