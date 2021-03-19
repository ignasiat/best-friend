import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DogFormComponent } from './pages/dog-form/dog-form.component'
import { DogComponent } from './pages/dog/dog.component'
import { DogsComponent } from './pages/dogs/dogs.component'
import { HomeComponent } from './pages/home/home.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { UserComponent } from './pages/user/user.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'dog/:dogId', component: DogComponent },
  { path: 'user/:userId', component: UserComponent },
  { path: 'form/:dogId', component: DogFormComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'profile', component: ProfileComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
