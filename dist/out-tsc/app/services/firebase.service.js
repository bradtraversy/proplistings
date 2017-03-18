var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
var FirebaseService = (function () {
    function FirebaseService(af) {
        this.af = af;
        this.folder = 'listingimages';
        this.listings = this.af.database.list('/listings');
    }
    FirebaseService.prototype.getListings = function () {
        return this.listings;
    };
    FirebaseService.prototype.getListingDetails = function (id) {
        this.listing = this.af.database.object('/listings/' + id);
        return this.listing;
    };
    FirebaseService.prototype.addListing = function (listing) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var _loop_1 = function (selectedFile) {
            var path = "/" + this_1.folder + "/" + selectedFile.name;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                listing.image = selectedFile.name;
                listing.path = path;
                return _this.listings.push(listing);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_1(selectedFile);
        }
    };
    FirebaseService.prototype.updateListing = function (id, listing) {
        return this.listings.update(id, listing);
    };
    FirebaseService.prototype.deleteListing = function (id) {
        return this.listings.remove(id);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFire])
], FirebaseService);
export { FirebaseService };
//# sourceMappingURL=../../../../src/app/services/firebase.service.js.map