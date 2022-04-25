import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainingsessionComponent } from './create-trainingsession/create-trainingsession.component';
import { TraininsessionListComponent } from './traininsession-list/traininsession-list.component';

const routes: Routes = [
  { path: "trainingSession", component: TraininsessionListComponent },
  { path: "createTs", component: CreateTrainingsessionComponent },
  
  { path: "", redirectTo: "trainingSession", pathMatch: "full"  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
