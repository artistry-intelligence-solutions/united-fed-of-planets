
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuadrantMapComponent, QaudrantDialogueComponent } from './quadrant-map/quadrant-map.component';
import { CrewManifestComponent } from './crew-manifest/crew-manifest.component';

@NgModule({
  entryComponents: [
    QuadrantMapComponent,
    QaudrantDialogueComponent
  ],
  declarations: [
    AppComponent,
    QuadrantMapComponent,
    QaudrantDialogueComponent,
    CrewManifestComponent
  ],
  bootstrap: [
    AppComponent,
    QuadrantMapComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  providers: [],
})
export class AppModule { }
