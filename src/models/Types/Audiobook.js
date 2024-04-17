export default class Audiobook {
    // This belongs to the class, not the object
    // All other places should reference this with ClassName.type
    static type= 'Audiobook';
    static icon= 'bi bi-journal-bookmark-fill'; //'bi bi-journal-bookmark-fill'

    // define type using getter so it is not modifiable
    get type(){
        return Audiobook.type;
    }
    get icon(){
        return Audiobook.icon;
    }

    // Standard for all used in libraryItem
    get displayTitle(){
        return this.collectionName;
    }
    // get displayLink(){
    //     return this.artistViewUrl;
    // }

    get id(){
        return this.collectionId;
    }


    get formattedPrice(){
        switch(this.currency){
            case "USD":
                return "$"+this.collectionPrice;
            default:
                return '!!NO CURRENCY!!';
        }
    }

    wrapperType = "";
    artistId = "";
    collectionId = "";
    artistName = "";
    collectionName = "";
    collectionCensoredName = "";
    artistViewUrl = "";
    collectionViewUrl = "";
    artworkUrl60 = "";
    artworkUrl100 = "";
    collectionPrice = "";
    collectionExplicitness = "";
    trackCount = "";
    copyright = "";
    country = "";
    currency = "";
    releaseDate = "";
    primaryGenreName = "";
    previewUrl = "";
    description = "";
}
