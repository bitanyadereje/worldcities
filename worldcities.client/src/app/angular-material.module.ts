import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatTableModule,         // ← For mat-table and dataSource
    MatPaginatorModule,     // ← For mat-paginator
    MatSortModule,          // ← For mat-sort-header
    MatInputModule,         // ← For search input
    MatFormFieldModule,     // ← For search input
    MatIconModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }