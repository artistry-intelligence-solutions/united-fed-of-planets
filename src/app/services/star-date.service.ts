import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarDateService {

  constructor() { }

  public starDate() {

    const today = new Date();

    // b: base date
    // c: star date year
    // d: day
    // m: month number
    // n: number of days in year
    // y: year

    const b = 2323;
    const c = 0.00;
    const d = today.getDate();
    const m = today.getMonth() + 1;
    const n = 365;
    const y = today.getFullYear();
    const stardate = c + (1000 * (y - b)) + ((1000 / n) * (m + d - 1));

    return Math.round(stardate * 100) / 100;
  }
}
