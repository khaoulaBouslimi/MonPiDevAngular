import { Component, OnInit } from '@angular/core';
import { TrainingSession } from '../training-session';
import { TrainingsessionService } from '../trainingsession.service';

@Component({
  selector: 'app-traininsession-list',
  templateUrl: './traininsession-list.component.html',
  styleUrls: ['./traininsession-list.component.css']
})
export class TraininsessionListComponent implements OnInit {

  listOfTrainingSessions : any;
  form: boolean;
  t : TrainingSession;
  closeResult : string;

  constructor(private tsService : TrainingsessionService) { }

  ngOnInit(): void {

    this.getTrainingSessions();
    this.t = {
      idTS : null,
      title : null,
      dateDebut:null,
      dateFin: null,
      dure : null,
      localisation: null,
      DescriptionOfTS: null
    
    }
  }

  private getTrainingSessions(){
    this.tsService.getALLTrainingSessions().subscribe(data => this.listOfTrainingSessions = data
    )
  }

}
