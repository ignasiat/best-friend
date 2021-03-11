import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DogComponent } from './pages/dog/dog.component'
import { DogsComponent } from './pages/dogs/dogs.component'
import { HomeComponent } from './pages/home/home.component'
import { UserComponent } from './pages/user/user.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'dog/:dogId', component: DogComponent },
  { path: 'user/:userId', component: UserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
