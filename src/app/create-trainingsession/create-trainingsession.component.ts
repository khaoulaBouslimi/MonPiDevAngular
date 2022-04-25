import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingSession } from '../training-session';
import { TrainingsessionService } from '../trainingsession.service';

@Component({
  selector: 'app-create-trainingsession',
  templateUrl: './create-trainingsession.component.html',
  styleUrls: ['./create-trainingsession.component.css']
})
export class CreateTrainingsessionComponent implements OnInit {


  ts : TrainingSession = new TrainingSession();

  constructor(private tsService : TrainingsessionService,
    private router: Router) { }

  ngOnInit(): void {

    
  }

  saveTs(){
    this.tsService.createTrainingSession(this.ts).subscribe(data => {
      console.log(data);
      this.goToTsList();
    },
    error => console.log(error));
  }

  goToTsList(){
    this.router.navigate(['/trainingSession']);
  }

  onSubmit(){
    console.log(this.ts);
    this.saveTs();
  }




}
