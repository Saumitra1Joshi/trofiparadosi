import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CartdetailsComponent } from './pages/user/cartdetails/cartdetails.component';
import { CheckoutComponent } from './pages/user/checkout/checkout.component';
import { DishdetailsComponent } from './pages/user/dishdetails/dishdetails.component';
import { DisheslistComponent } from './pages/user/disheslist/disheslist.component';
import { OrderhistoryComponent } from './pages/user/orderhistory/orderhistory.component';
import { OrderinitemComponent } from './pages/user/orderinitem/orderinitem.component';
import { PaymentComponent } from './pages/user/payment/payment.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [

  {
    path: 'payment',
    component: PaymentComponent,
    pathMatch: 'full'
  },
  {
    path: 'cartdetails',
    component: CartdetailsComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'userdashboard',
    component: UserdashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard],
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: 'restaurantcategory/:id',
    component: DisheslistComponent
  },
  {
    path: 'restaurantcategory',
    component: DisheslistComponent
  },
  {
    path: 'dishes',
    component: DisheslistComponent
  },
  {path: 'search/:keyword', 
  component: DisheslistComponent},
  {
    path:'dishes/:id',
    component:DishdetailsComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent,
    canActivate: [NormalGuard]
  },
  {
    path:'orderhistory',
    component:OrderhistoryComponent,
    canActivate: [NormalGuard]
  },
  {
    path:'OrderinItem/:id',
    component:OrderinitemComponent,
    canActivate: [NormalGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
