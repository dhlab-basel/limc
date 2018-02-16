import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { SearchService } from "../../../model/service/search.service";
import { SalsahService } from "../../../model/service/salsah.service";

import { Monument } from "../../../model/resources/monument";
import { PhotoModalComponent } from "./modals/photo-modal.component";
import { Photo } from "../../../model/resources/photo";
import { LimcService } from "../../../model/service/limc.service";
import { Resource } from "../../../model/apiresult/resource";

@Component({
    selector: "app-details",
    templateUrl: "./monument.component.html",
    styleUrls: ["./monument.component.scss"]
})
/**
 * Detail page for a monument.
 */
export class MonumentComponent implements OnInit, OnDestroy {

    ////////////////
    // PROPERTIES //
    ////////////////


    /**
     * The gallery modal element
     */
    @ViewChild("gallery") gallery: PhotoModalComponent;

    /**
     * The current monument.
     */
    monument: Monument = null;

    /**
     * Subscriptions
     * @type {Array}
     */
    subscriptions: Subscription[] = [];


    /////////////
    // METHODS //
    /////////////


    /**
     * Constructor.
     * @param router
     * @param activatedRoute
     * @param salsahService
     * @param searchService
     */
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private limcService: LimcService, private salsahService: SalsahService, private searchService: SearchService) {
    }

    /**
     * NgOnInit.
     */
    ngOnInit() {

        this.limcService.getMonumentByResourceId(2071666).subscribe(
            (monument: Monument) => {
                this.monument = monument;
            }    ,
            (error: any) => {
                console.error(error);
            }
        );

        // Make sure we scroll to the top
        /*
         this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
         document.body.scrollTop = 0;
         });*


        // Subscribe to changes in the search value
        this.subscriptions[0] = this.searchService.searchFinished.subscribe(
            (success: boolean) => {
                if (this.searchService.monuments[0])
                    this.monument = this.searchService.monuments[0];
            }
        );

        // Get the document data
        this.activatedRoute.params.subscribe(params => {
            if (params["id"]) {
                let id = parseInt(params["id"]);
                this.getMonument(id);
            } else {
                this.router.navigate(["search"]);
            }
        });*/

    }

    /**
     * NgOnDestroy.
     */
    ngOnDestroy() {
        //for (let subscription of this.subscriptions) subscription.unsubscribe();
    }

    /**
     * Gets the monument.
     * @param id
     */
    getMonument(id: number) {
/*
        // Get the monument from the list of the search if possible
        this.monument = this.searchService.monuments.find((monument: Monument) => {
            return monument.id === id;
        });

        // Get the monument from the server if necessary
        if (this.monument instanceof Monument) return;

        // No data is available, so we have to search
        this.searchService.search(id + "", 100, 0);


        /*
         // Get detailed information now
         this.salsahService.getResourceById(this.monument.getSalsahId()).subscribe(
         (resource: Resource) => {
         console.log(resource);
         if (resource.props["limc:bibliography"] && resource.props["limc:bibliography"].values && resource.props["limc:bibliography"].values.length > 0)
         this.monument.bibliography = resource.props["limc:bibliography"].values[0];
         if (resource.props["limc:description"] && resource.props["limc:description"].values && resource.props["limc:description"].values.length > 0)
         this.monument.description = resource.props["limc:description"].values[0];
         },
         (error: Error) => {
         console.log(error);
         }
         );*/


    }

    /**
     * Opens the gallery
     * @param activeIndex
     */
    openGallery(activeIndex: number) {
        /*
        let imageUrls: string[] = this.monument.getPhotos().map((photo: Photo): string => {
            return photo.url;
        });
        this.gallery.openWithImages(imageUrls, activeIndex);
        */
    }

}
