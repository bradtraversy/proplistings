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
import { Router, ActivatedRoute } from '@angular/router';
var EditListingComponent = (function () {
    function EditListingComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.title = listing.title;
            _this.owner = listing.owner;
            _this.city = listing.city;
            _this.bedrooms = listing.bedrooms;
            _this.price = listing.price;
            _this.type = listing.type;
        });
    };
    EditListingComponent.prototype.onEditSubmit = function () {
        var listing = {
            title: this.title,
            owner: this.owner,
            city: this.city,
            bedrooms: this.bedrooms,
            price: this.price,
            type: this.type
        };
        this.firebaseService.updateListing(this.id, listing);
        this.router.navigate(['/listings']);
    };
    return EditListingComponent;
}());
EditListingComponent = __decorate([
    Component({
        selector: 'app-edit-listing',
        templateUrl: './edit-listing.component.html',
        styleUrls: ['./edit-listing.component.css']
    }),
    __metadata("design:paramtypes", [FirebaseService,
        Router,
        ActivatedRoute])
], EditListingComponent);
export { EditListingComponent };
//# sourceMappingURL=../../../../../src/app/components/edit-listing/edit-listing.component.js.map