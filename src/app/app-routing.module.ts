import { NgModule } from '@angular/core';
import { GuardsCheckStart, RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';
import { GradezComponent } from './projects/gradez/gradez.component';
import { FranklinregionalComponent } from './projects/franklinregional/franklinregional.component';
import { LifecounterComponent } from './projects/lifecounter/lifecounter.component';
import { FrameitComponent } from './projects/frameit/frameit.component';
import { FastmoviephotosComponent } from './projects/fastmoviephotos/fastmoviephotos.component';
import { GraphgameComponent } from './projects/graphgame/graphgame.component';
import { WordsandmusicComponent } from './projects/wordsandmusic/wordsandmusic.component';
import { VehicleappComponent } from './projects/vehicleapp/vehicleapp.component';
import { RockpaperscissorsComponent } from './projects/rockpaperscissors/rockpaperscissors.component';
import { PinballpriceComponent } from './projects/pinballprice/pinballprice.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/gradez', component: GradezComponent },
  { path: 'projects/franklinregional', component: FranklinregionalComponent },
  { path: 'projects/lifecounter', component: LifecounterComponent },
  { path: 'projects/frameit', component: FrameitComponent },
  { path: 'projects/fastmoviephotos', component: FastmoviephotosComponent },
  { path: 'projects/graphgame', component: GraphgameComponent },
  { path: 'projects/wordsandmusic', component: WordsandmusicComponent },
  { path: 'projects/vehicleapp', component: VehicleappComponent },
  { path: 'projects/rockpaperscissors', component: RockpaperscissorsComponent },
  { path: 'projects/pinballprice', component: PinballpriceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
