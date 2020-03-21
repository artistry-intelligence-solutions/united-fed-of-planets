import { Definitions } from './../interfaces/definitions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyValue } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    public http: HttpClient
  ) {}

  public retriveDefinitions() {
    // tslint:disable-next-line: max-line-length
    return this.http.get('/assets/meta-data/data.json').pipe(map((data: Definitions[]) => data));
  }

  valueOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
    return a.value.localeCompare(b.value);
  }
}
