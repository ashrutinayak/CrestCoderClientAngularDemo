import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CrudServiceService } from './crud-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface TableElement {
  name: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {
  displayedColumns: string[] = ['name','action'];
  dataSource = new MatTableDataSource();
  show: boolean = false;
  showdbclick: boolean = false;

  constructor(private folderCrudService: CrudServiceService, private router: Router,  private snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.list();
  }

  // For get all List of given folder
  list() {
    localStorage.setItem('folderName', 'some/other');
    this.show = true;
    this.showdbclick = false;
    this.folderCrudService.list('some/other').subscribe((data) => {
      if(data){
        this.dataSource = data
        this.show = false
      }
      else {
        this.show = false;
        this.snackBar.open('Something was wrong.', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    })
  }

  // Add New Folder
  addNew() {
    this.router.navigate(['/create']);
  }

  // Edit Folder
  edit(name: string) {
    this.router.navigate(['/update', { name: name }])
  }

  // Delete Folder
  delete(name: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this item?' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const pathName = localStorage.getItem('folderName') + '/' + name;
        this.folderCrudService.deleteFolder(pathName).subscribe(() => {
          this.list();
        })
      }
    });
  }

  // Double click function for enter the folder
  onRowDoubleClick(data: TableElement) {
    const path = localStorage.getItem('folderName') + '/' + data.name;
    debugger
    this.show = true;
    this. showdbclick = true;
    localStorage.setItem('folderName', path);
    this.folderCrudService.list(path).subscribe((data) => {
      if(data){
        this.dataSource = data
        this.show = false
      }
      else {
        this.show = false;
        this.snackBar.open('Something was wrong.', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    })
  }

  // Back to main list screen
  backMain() {
    this.list();
  }
}