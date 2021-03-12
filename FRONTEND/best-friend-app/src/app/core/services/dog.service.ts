import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Dog } from '../models/Dog'
import { Color } from '../models/Color'
import { Breed } from '../models/Breed'

@Injectable({
  providedIn: 'root'
})
export class DogService {
  dogsApi = 'http://localhost:5000/api'

  constructor (
    private httpClient: HttpClient
  ) {

  }

  fetchDogs (): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(`${this.dogsApi}/dog`)
  }

  fetchBreeds (): Observable<Breed[]> {
    return this.httpClient.get<Breed[]>(`${this.dogsApi}/breed`)
  }

  fetchColors (): Observable<Color[]> {
    return this.httpClient.get<Color[]>(`${this.dogsApi}/color`)
  }
}
