import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-title',
  templateUrl: './view-title.component.html',
  styleUrls: ['./view-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTitleComponent {
  @Input() title = '';
}
