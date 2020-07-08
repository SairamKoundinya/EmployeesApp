import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatMenuModule,
      MatCardModule,
      MatPaginatorModule,
      MatSortModule,
      MatToolbarModule,
      MatTooltipModule
   ],
   exports: [
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatMenuModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatTooltipModule,
      MatToolbarModule
   ],
   providers: [
   ]
})

export class AngularMaterialModule { }