import { Component, Input } from '@angular/core'
import { Dog } from 'src/app/core/models/Dog'

@Component({
  selector: 'app-dog-card-content',
  templateUrl: './dog-card-content.component.html',
  styleUrls: ['./dog-card-content.component.scss']
})
export class DogCardContentComponent {
    @Input() dog: Dog
}
