// class LibraryItem {
//     constructor(media) {
//         const STATUSES = {IN: 'in', OUT: 'out', LOST: 'lost'};
//
//         this.media = media;
//
//         // set the default status
//         media.status = LibraryItem.STATUSES.IN;
//
//         // methods
//         media.checkIn = function () {
//             this.status = LibraryItem.STATUSES.IN;
//         }
//
//         media.checkOut = function () {
//             this.status = LibraryItem.STATUSES.OUT;
//         }
//
//         media.isAvailable = function () {
//             return this.status === LibraryItem.STATUSES.IN;
//         }
//     }
//
// }
//
// export default LibraryItem;


function LibraryItem(media) {
    const STATUSES = {IN: 'in', OUT: 'out', LOST: 'lost'};

    // set the default status
    media.status = STATUSES.IN;

    // methods
    media.checkIn = function () {
        this.status = STATUSES.IN;
    }

    media.checkOut = function () {
        this.status = STATUSES.OUT;
    }

    media.isAvailable = function () {
        return this.status === STATUSES.IN;
    }

    return media;
}

export default LibraryItem;