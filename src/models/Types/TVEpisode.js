export default class TVEpisode {
    // This belongs to the class, not the object
    // All other places should reference this with ClassName.type
    static type= 'TVEpisode';
    static icon= 'bi bi-tv';

    // define type using getter so it is not modifiable
    get type(){
        return TVEpisode.type;
    }
    get icon(){
        return TVEpisode.icon;
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

    formattedPrice(price){
        if(price === 0 || price === -1){
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

    // TODO: Change all to undefined?
    wrapperType = "";
    kind = "";
    artistId = "";
    collectionId = "";
    trackId = "";
    artistName = "";
    collectionName = "";
    trackName = "";
    collectionCensoredName = "";
    trackCensoredName = "";
    artistViewUrl = "";
    collectionViewUrl = "";
    trackViewUrl = "";
    previewUrl = "";
    artworkUrl30 = "";
    artworkUrl60 = "";
    artworkUrl100 = "";
    collectionPrice = "";
    trackPrice = "";
    collectionHdPrice = "";
    trackHdPrice = "";
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
}
