import { Component } from '@angular/core';

@Component({
  selector: 'app-crew-manifest',
  templateUrl: './crew-manifest.component.html',
  styleUrls: ['./crew-manifest.component.scss']
})
export class CrewManifestComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
