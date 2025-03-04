import { Component } from '@angular/core';
import {  } from '@angular/core';

@Component({
  selector: 'app-teacher',
  imports: [],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  teachers: Teacher[] = [];
}
class Teacher {
  id: number;
  name: string;
  schoolName: string;
  isHeadTeacher: boolean;
  assignedSubject: string;
  salary: number;
  joiningData: Date;
  isAggressive: boolean;

  constructor(
    id: number,
    name: string,
    schoolName: string,
    isHeadTeacher: boolean,
    assignedSubject: string,
    salary: number,
    joiningData: Date,
    isAggressive: boolean
  ) {
    this.id = id;
    this.name = name;
    this.schoolName = schoolName;
    this.isHeadTeacher = isHeadTeacher;
    this.assignedSubject = assignedSubject;
    this.salary = salary;
    this.joiningData = joiningData;
    this.isAggressive = isAggressive;
  }
}



