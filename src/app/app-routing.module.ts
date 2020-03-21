import { CrewManifestComponent } from './crew-manifest/crew-manifest.component';
import { FleetComponent } from './fleet/fleet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    component: CrewManifestComponent,
    path: 'crewmanifest'
  },
  {
    component: FleetComponent,
    path: 'ship-fleet'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
