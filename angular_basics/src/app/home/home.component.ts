import { Component, inject } from '@angular/core';
import { Person } from '../person';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,StudentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){
    console.log('Constructor is called')
    this.students = this.studentService.getPersons();
    console.log(this.students);
  }

  students:Person[] = [];
  studentService: DataService = inject(DataService);
}
