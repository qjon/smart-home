import {Component, OnInit} from '@angular/core';
import {SwitchesState} from '../../store/switches-reducer';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {switchesSelectors} from '../../store/switches-selectors';
import {SwitchDeviceModel} from '../../models/switch-device-model';
import {SwitchesRenameEffectsService} from '../../store/switches-rename-effects.service';

@Component({
  selector: 'sh-list',
  templateUrl: './switches-list.component.html',
  styleUrls: ['./switches-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesListComponent implements OnInit {

  public device$: Observable<SwitchDeviceModel[]>;

  constructor(private store: Store<SwitchesState>,
              private switchesRenameEffects: SwitchesRenameEffectsService) {
  }

  public ngOnInit(): void {
    this.device$ = this.store
      .pipe(
        select(switchesSelectors.switchesDeviceListSelector),
      );
  }

  public trackSwitch(item: SwitchDeviceModel): string {
    return item.id;
  }
}
