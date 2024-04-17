import LibraryItem from "@/models/LibraryItemModel.js";

export default class LibraryCollection {
    _arr;

    constructor(arr) {
        // Load array if provided.
        // Load empty array if one was not provided.
        if (!Array.isArray(arr)) {
            arr = [];
        }

        this._arr = arr;
        // return this for chaining
        return this;
    }

    // Methods for using the collection.
    add(publication){
        const newLibraryItem = new LibraryItem(publication);
        // newLibraryItem.id = publication.id;
        console.log("publication.id", publication.id);

        // newLibraryItem.id = @@@
        this._arr.push(newLibraryItem);
        return this;
        // arr.add = function(media){
        //     this.push(new LibraryItem(media));
        // }
    };

    remove(publication){
        console.log("remove publication", publication);
        console.log("this._findItem(publication)", publication.id);
        return this._arr.splice(this._findItem(publication), 1);
    };

    contains(publication){
        return this._findItem(publication) >= 0;
    };

    get count(){
        return this._arr.length;
    }

    get items(){
        return [...this._arr]
    }

    // Internal function for finding books.
    // Assumes all books have an id.
    _findItem(publication){
        return this._arr.findIndex(function(item){
            return item.id === publication.id;
        });
    };

}
