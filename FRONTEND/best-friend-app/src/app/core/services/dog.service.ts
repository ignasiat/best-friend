import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Dog } from '../models/Dog'
import { Color } from '../models/Color'
import { Breed } from '../models/Breed'
import { User } from '../models/User'
import { SignIn } from '../models/Sign-In'

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

  fetchShelters (): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.dogsApi}/user/shelter`)
  }

  addDog (newDog: Dog): Observable<Dog> {
    return this.httpClient.post<Dog>(`${this.dogsApi}/dog`, newDog)
  }

  signIn (signInData: SignIn): Observable<User> {
    return this.httpClient.post<User>(`${this.dogsApi}/auth/login`, signInData)
  }

  signOut (): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(`${this.dogsApi}/auth/logout`)
  }

  updateApiDog (dogId: string, newData: Dog): Observable<Dog> {
    return this.httpClient.put<Dog>(`${this.dogsApi}/dog/${dogId}`, newData)
  }

  deleteApiDog (dogId: string): Observable<Dog> {
    return this.httpClient.delete<Dog>(`${this.dogsApi}/dog/${dogId}`)
  }
}
