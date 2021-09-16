import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';
import { GradezComponent } from './projects/gradez/gradez.component';
import { FastmoviephotosComponent } from './projects/fastmoviephotos/fastmoviephotos.component';
import { FrameitComponent } from './projects/frameit/frameit.component';
import { FranklinregionalComponent } from './projects/franklinregional/franklinregional.component';
import { GraphgameComponent } from './projects/graphgame/graphgame.component';
import { LifecounterComponent } from './projects/lifecounter/lifecounter.component';
import { PinballpriceComponent } from './projects/pinballprice/pinballprice.component';
import { RockpaperscissorsComponent } from './projects/rockpaperscissors/rockpaperscissors.component';
import { VehicleappComponent } from './projects/vehicleapp/vehicleapp.component';
import { WordsandmusicComponent } from './projects/wordsandmusic/wordsandmusic.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProjectsComponent,
    GradezComponent,
    FastmoviephotosComponent,
    FrameitComponent,
    FranklinregionalComponent,
    GraphgameComponent,
    LifecounterComponent,
    PinballpriceComponent,
    RockpaperscissorsComponent,
    VehicleappComponent,
    WordsandmusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
