import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { NgbModal, NgbModalOptions, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-photo-modal',
    templateUrl: './photo-modal.component.html',
    styleUrls: ['./photo-modal.component.scss']
})
/**
 * Gui for a general modal (alert).
 */
export class PhotoModalComponent {

    ///////////////
    // CONSTANTS //
    ///////////////


    ////////////////
    // PROPERTIES //
    ////////////////


    /**
     * The modal.
     */
    @ViewChild("modal") modal: any;

    /**
     * Reference of current modal.
     */
    private ngbModalRef: NgbModalRef;

    /**
     * The image urls.
     */
    imageUrls: string[] = [];

    /**
     * Active image index in the imageUrls array
     */
    _activeIndex: number = 0;

    /**
     * Gets the active index.
     * @returns {number}
     */
    get activeIndex(): number {
        return this._activeIndex;
    }

    /**
     * Sets the active index.
     * @param value
     */
    set activeIndex(value: number) {

        // Set index 0 if value is no number or if there is only one image
        if (typeof value !== "number" || this.imageUrls.length <= 1) {
            this._activeIndex = 0;
            return;
        }

        // Fix index value
        if (value < 0) value = this.imageUrls.length - 1; // last index
        else if (value >= this.imageUrls.length) value = 0; // first index

        this._activeIndex = value;

    }



    /////////////
    // METHODS //
    /////////////


    /**
     * Constructor.
     * @param modalService
     * @param changeDetectorRef
     */
    constructor(public modalService: NgbModal, private changeDetectorRef: ChangeDetectorRef) {
    }

    /**
     * Opens a modal with given data.
     * @param imageUrls
     * @param activeIndex
     * @returns {NgbModalRef}
     */
    openWithImages(imageUrls: string[], activeIndex: number): NgbModalRef {

        // Make sure the modal is closed
        if (this.ngbModalRef instanceof NgbModalRef) this.ngbModalRef.close();

        this.imageUrls = imageUrls;
        this.activeIndex = activeIndex;

        this.ngbModalRef = this.open({ size: "lg" });
        return this.ngbModalRef;

    }

    /**
     * Opens a modal.
     * @param options
     * @returns {NgbModalRef}
     */
    open(options?: NgbModalOptions): NgbModalRef {
        let ngbModalRef: NgbModalRef = this.modalService.open(this.modal, options);
        this.changeDetectorRef.detectChanges();
        return ngbModalRef;
    }

    /**
     * Loads the previos image.
     */
    previous() {
        this.activeIndex--;
    }

    /**
     * Loads the next image.
     */
    next() {
        this.activeIndex++;
    }

}
