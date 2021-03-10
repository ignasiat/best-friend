import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DogsComponent } from './pages/dogs/dogs.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dogs', component: DogsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
