import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './components/header/header.component'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { HomeComponent } from './pages/home/home.component'
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http'
import { DogsComponent } from './pages/dogs/dogs.component'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { DogComponent } from './pages/dog/dog.component'
import { UserComponent } from './pages/user/user.component'
import { DogCardComponent } from './components/dog-card/dog-card.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ReactiveFormsModule } from '@angular/forms'
import { DogFormComponent } from './pages/dog-form/dog-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DogsComponent,
    DogComponent,
    UserComponent,
    DogCardComponent,
    DogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
