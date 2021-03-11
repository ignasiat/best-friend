import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id = this.activatedRoute.snapshot.params.userId

  constructor (private activatedRoute: ActivatedRoute) { }

  ngOnInit (): void {
  }
}
