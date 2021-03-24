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
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { HomeComponent } from './pages/home/home.component'
import { DogsComponent } from './pages/dogs/dogs.component'
import { DogComponent } from './pages/dog/dog.component'
import { UserComponent } from './pages/user/user.component'
import { DogCardComponent } from './components/dog-card/dog-card.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { DogFormComponent } from './pages/dog-form/dog-form.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { PopupComponent } from './pages/sign-in/popup/popup.component'
import { UserCardComponent } from './components/user-card/user-card.component'
import { PopupdeleteComponent } from './pages/profile/popupdelete/popupdelete.component'
import { DogCardContentComponent } from './components/dog-card-content/dog-card-content.component'
import { SheltersComponent } from './pages/shelters/shelters.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DogsComponent,
    DogComponent,
    UserComponent,
    DogCardComponent,
    DogFormComponent,
    SignInComponent,
    ProfileComponent,
    PopupComponent,
    UserCardComponent,
    PopupdeleteComponent,
    DogCardContentComponent,
    SheltersComponent
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
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
