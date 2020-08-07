import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from 'src/app/shared/components';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  openLogIn(){
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
      height: '600px',
    })
  }

  goToHome(){
    
    this.router.navigate(['/home']);
  }

}
