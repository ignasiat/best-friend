import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Dog } from '../models/Dog'
import { Color } from '../models/Color'
import { Breed } from '../models/Breed'
import { User } from '../models/User'
import { SignIn } from '../models/Sign-In'
import { urlApiDog, urlApiBreed, urlApiColor, urlApiUserShelter, urlApiSignIn, urlApiSignOut } from '../../constants/url'

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor (
    private httpClient: HttpClient
  ) {

  }

  fetchDogs (): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(urlApiDog)
  }

  fetchBreeds (): Observable<Breed[]> {
    return this.httpClient.get<Breed[]>(urlApiBreed)
  }

  fetchColors (): Observable<Color[]> {
    return this.httpClient.get<Color[]>(urlApiColor)
  }

  fetchShelters (): Observable<User[]> {
    return this.httpClient.get<User[]>(urlApiUserShelter)
  }

  addDog (newDog: Dog): Observable<Dog> {
    return this.httpClient.post<Dog>(urlApiDog, newDog)
  }

  signIn (signInData: SignIn): Observable<User> {
    return this.httpClient.post<User>(urlApiSignIn, signInData)
  }

  signOut (): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(urlApiSignOut)
  }

  updateApiDog (dogId: string, newData: Dog): Observable<Dog> {
    return this.httpClient.put<Dog>(`${urlApiDog}/${dogId}`, newData)
  }

  deleteApiDog (dogId: string): Observable<Dog> {
    return this.httpClient.delete<Dog>(`${urlApiDog}/${dogId}`)
  }
}
