var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
export var firebaseConfig = {
    apiKey: 'AIzaSyBzMDTMDWrBZbUkNC-uSNmQIl5rCbNoqeg',
    authDomain: 'proplistings-1eed8.firebaseapp.com',
    databaseURL: 'https://proplistings-1eed8.firebaseio.com',
    storageBucket: 'proplistings-1eed8.appspot.com',
    messagingSenderId: '605642180089'
};
var firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
};
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'listings', component: ListingsComponent },
    { path: 'listing/:id', component: ListingComponent },
    { path: 'add-listing', component: AddListingComponent },
    { path: 'edit-listing/:id', component: EditListingComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            ListingsComponent,
            NavbarComponent,
            ListingComponent,
            AddListingComponent,
            EditListingComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            FlashMessagesModule,
            AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
            RouterModule.forRoot(appRoutes)
        ],
        providers: [FirebaseService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map