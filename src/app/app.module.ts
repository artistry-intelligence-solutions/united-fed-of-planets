
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuadrantMapComponent, QaudrantDialogueComponent } from './quadrant-map/quadrant-map.component';
import { CrewManifestComponent } from './crew-manifest/crew-manifest.component';
import { FleetComponent } from './fleet/fleet.component';

@NgModule({
  entryComponents: [
    QuadrantMapComponent,
    QaudrantDialogueComponent
  ],
  declarations: [
    AppComponent,
    QuadrantMapComponent,
    QaudrantDialogueComponent,
    CrewManifestComponent,
    FleetComponent
  ],
  bootstrap: [
    AppComponent,
    QuadrantMapComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule
  ],
  providers: [],
})
export class AppModule { }
