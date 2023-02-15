import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutAuthorDialogComponent } from './about-author-dialog/about-author-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AboutAuthorDialogComponent, { width: '500px' });
  }
}
