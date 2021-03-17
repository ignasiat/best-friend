import { Component, Input } from '@angular/core'
import { Dog } from 'src/app/core/models/Dog'

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent {
  @Input() dog: Dog
}
