import { Component, OnDestroy, OnInit } from '@angular/core';
import { Crewman } from './../interfaces/crewman.module';
import { DataService } from '../services/data.service';
import { Definitions } from './../interfaces/definitions';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crew-manifest',
  templateUrl: './crew-manifest.component.html',
  styleUrls: ['./crew-manifest.component.scss']
})

export class CrewManifestComponent implements OnInit, OnDestroy {

  private crewManifest: Crewman[];
  private subscription: Subscription;

  private myUrl = '/assets/meta-data/data.json';

  constructor(
    private data: DataService
  ) {
    this.subscription = this.data.retriveDefinitions().subscribe(stream => {
      console.log(stream);
    });

    this.data.retriveDefinitions().subscribe((jsonData: Definitions[]) => {
      this.crewManifest = jsonData['personnel'][0];
    }, err => {
      console.error(err);
    }, () => {
      console.log(this.crewManifest);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
