import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogState,
} from '@angular/material/dialog';
import { AboutAuthorDialogComponent } from './about-author-dialog/about-author-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private currentDialogRef: MatDialogRef<AboutAuthorDialogComponent> | null =
    null;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogExists = this.currentDialogRef !== null;
    const isDialogClosed =
      this.currentDialogRef?.getState() === MatDialogState.CLOSED;

    if (!dialogExists || isDialogClosed) {
      this.currentDialogRef = this.dialog.open(AboutAuthorDialogComponent, {
        width: '500px',
      });
    }
  }
}
