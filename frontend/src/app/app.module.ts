import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { DisheslistComponent } from './pages/user/disheslist/disheslist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RestaurantlistComponent } from './pages/user/restaurantlist/restaurantlist.component';
import { SearchComponent } from './components/search/search.component';
import { DishdetailsComponent } from './pages/user/dishdetails/dishdetails.component';
import { CardstatusComponent } from './components/cardstatus/cardstatus.component';
import { CartdetailsComponent } from './pages/user/cartdetails/cartdetails.component';
import { PaymentComponent } from './pages/user/payment/payment.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CheckoutComponent } from './pages/user/checkout/checkout.component';
import { OrderhistoryComponent } from './pages/user/orderhistory/orderhistory.component';
import { OrderinitemComponent } from './pages/user/orderinitem/orderinitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    UserdashboardComponent,
    DisheslistComponent,
    ProfileComponent,
    RestaurantlistComponent,
    SearchComponent,
    DishdetailsComponent,
    CardstatusComponent,
    CartdetailsComponent,
    PaymentComponent,
    AboutusComponent,
    ContactusComponent,
    CheckoutComponent,
    OrderhistoryComponent,
    OrderinitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders,LoginService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
