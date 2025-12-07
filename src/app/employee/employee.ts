import { Component } from '@angular/core';

interface EmployeeInfo {
  id: number;
  name: string;
  gender: string;
  email: string;
  position: string;
  badge?: string;
  status: string;
  salary: number;
}

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  employees: EmployeeInfo[] = [
    {
      id: 1,
      name: 'Nurse Joy',
      gender: 'Female',
      email: 'Joy@pokecenter.com',
      position: 'Head Nurse',
      badge: 'Kanto',
      status: 'Active',
      salary: 50000, 
    },
    {
      id: 2,
      name: 'Chansey',
      gender: 'Female',
      email: 'Chansey@pokecenter.com',
      position: 'Assistant Nurse',
      badge: 'Johto',
      status: 'Active',
      salary: 40000,
    },
    {
      id: 3,
      name: 'Comfey',
      gender: 'Female',
      email: 'Comfey@pokecenter.com',
      position: 'Trainee Nurse',
      badge: 'Alola',
      status: 'Active',
      salary: 45000,
    },
    {
      id: 4,
      name: 'Audino',
      gender: 'Female',
      email: 'Audino@pokecenter.com',
      position: 'Medical Specialist',
      badge: 'Unova',
      status: 'Inactive',
      salary: 30000,
    },
    {
      id: 5,
      name: 'Blissey',
      gender: 'Female',
      email: 'Blissey@pokecenter.com',
      position: 'Senior Nurse',
      badge: 'Sinnoh',
      status: 'Active',
      salary: 55000,
    },
  ];

  glowingId: number | null = null;

  playSound(staff: any) {
    const audio = new Audio('assets/recovery.mp3');
    
    this.glowingId = staff.id;
    
    audio.addEventListener('ended', () => {
    this.glowingId = null;
    });
  
    audio.play();
  }
}
