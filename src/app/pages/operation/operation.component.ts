import {Component, OnInit} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.scss'
})
export class OperationComponent implements OnInit{

  displayedColumns: string[] = ['id', 'hostname'];
  dataSource!: MatTableDataSource<any>;


  vms = [
    { id: 1, hostname: 'vm-001.example.com' },
    { id: 2, hostname: 'vm-002.example.com' },
    { id: 3, hostname: 'vm-003.example.com' }
  ];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.vms);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
