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
      // tslint:disable-next-line: no-string-literal
      this.crewManifest = jsonData['personnel'];
    }, err => {
      console.error(err);
    }, () => {
      console.log(this.crewManifest);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  public crewManCard(event): void {
    const crewManName: string = this.nameAsClass(event.srcElement.dataset.indexNumber);
    const crewMan = document.getElementsByClassName('crewManName');
    for (let i = 0; i < crewMan.length; i++) {
      // if (document.getElementsByClassName('crewManName')[i].classList === crewManName) {

      // }
      console.log(document.getElementsByClassName('crewManName')[i].classList);
    }
  }

  public nameAsClass(crewManName: string): string {
    if (crewManName) {
      return crewManName.toLowerCase().split(' ').join('-');
    }
  }

  public openCard(event): void {
    console.log(event);
    console.log(event.path.h2.innerHtml);
    const cardId = event.srcElement.dataset.indexNumber;
    console.log((document.getElementById(cardId) as HTMLElement)
  );
    // (document.getElementById(cardId) as HTMLElement).classList.toggle('card-open');
  }
}
