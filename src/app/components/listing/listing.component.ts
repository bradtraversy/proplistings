import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id:any;
  listing: any;
  imageUrl:any;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.listing.path);
      storageRef.child(this.listing.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });

    });
  }

  onDeleteClick(){
    this.firebaseService.deleteListing(this.id);

    this.router.navigate(['/listings']);
  }

}
