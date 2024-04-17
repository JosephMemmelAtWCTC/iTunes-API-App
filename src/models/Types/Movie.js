export default class Movie {
    // This belongs to the class, not the object
    // All other places should reference this with ClassName.type
    static type= 'Movie';
    static icon= 'bi bi-film';

    // define type using getter so it is not modifiable
    get type(){
        return Movie.type;
    }
    get icon(){
        return Movie.icon;
    }

    // Standard for all used in libraryItem
    get displayTitle(){
        return this.trackName;
    }
    get displayLink(){
        return this.trackViewUrl;
    }

    get id(){
        return this.trackId;
    }

    get formattedBuyPrice(){
        return this.formattedPrice(this.trackPrice);
    }
    get formattedRentPrice(){
        return this.formattedPrice(this.trackRentalPrice);
    }

    formattedPrice(price){
        if(price === 0){
            return "FREE";
        }
        switch(this.currency){
            case "USD":
                return "$"+price;
            default:
                return '!!NO CURRENCY!!';
        }
    }

    get formattedLength(){
        let formattedDate = '';
        let seconds = Math.round(this.trackTimeMillis / 1_000);
        let minutes = Math.floor(seconds / 60);
        seconds %= 60;
        const hours = Math.floor(minutes / 60);
        minutes %= 60;

        if(hours > 0){
            formattedDate += (hours+"h ");
        }
        if(minutes > 0){
            formattedDate += (minutes+"m ");
        }
        // if(seconds > 0){
        //     formattedDate += (seconds+"s ");
        // }
        return formattedDate.trim();
    }

    wrapperType = "";
    kind = "";
    collectionId = "";
    trackId = "";
    artistName = "";
    collectionName = "";
    trackName = "";
    collectionCensoredName = "";
    trackCensoredName = "";
    collectionArtistId = "";
    collectionArtistViewUrl = "";
    collectionViewUrl = "";
    trackViewUrl = "";
    previewUrl = "";
    artworkUrl30 = "";
    artworkUrl60 = "";
    artworkUrl100 = "";
    collectionPrice = "";
    trackPrice = "";
    trackRentalPrice = "";
    collectionHdPrice = "";
    trackHdPrice = "";
    trackHdRentalPrice = "";
    releaseDate = "";
    collectionExplicitness = "";
    trackExplicitness = "";
    discCount = "";
    discNumber = "";
    trackCount = "";
    trackNumber = "";
    trackTimeMillis = "";
    country = "";
    currency = "";
    primaryGenreName = "";
    contentAdvisoryRating = "";
    shortDescription = "";
    longDescription = "";
    hasITunesExtras = "";
}
