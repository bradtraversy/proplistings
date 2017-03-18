var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
var AddListingComponent = (function () {
    function AddListingComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddListingComponent.prototype.ngOnInit = function () {
    };
    AddListingComponent.prototype.onAddSubmit = function () {
        var listing = {
            title: this.title,
            city: this.city,
            owner: this.owner,
            bedrooms: this.bedrooms,
            price: this.price,
            type: this.type
        };
        this.firebaseService.addListing(listing);
        this.router.navigate(['listings']);
    };
    return AddListingComponent;
}());
AddListingComponent = __decorate([
    Component({
        selector: 'app-add-listing',
        templateUrl: './add-listing.component.html',
        styleUrls: ['./add-listing.component.css']
    }),
    __metadata("design:paramtypes", [FirebaseService,
        Router])
], AddListingComponent);
export { AddListingComponent };
//# sourceMappingURL=../../../../../src/app/components/add-listing/add-listing.component.js.map