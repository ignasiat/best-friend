import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Dog } from '../models/Dog'
import { DogStoreService } from './dog-store.service'

@Injectable({
  providedIn: 'root'
})
export class DogService {
  dogsApi = 'http://localhost:5000/api/dog'

  constructor (
    private httpClient: HttpClient
  ) {

  }

  fetchDogs (): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(`${this.dogsApi}`)
  }
}
