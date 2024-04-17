export default class Podcast {
    // This belongs to the class, not the object
    // All other places should reference this with ClassName.type
    static type= 'Podcast';
    static icon= 'bi bi-mic-fill';

    // define type using getter so it is not modifiable
    get type(){
        return Podcast.type;
    }
    get icon(){
        return Podcast.icon;
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

    get podcastIframeUrl(){
        return 'https://embed.podcasts.apple.com/us/podcast/id'+this.id;
    }

    get highestQualityImage(){ // Get the highest quality image
        if(this.artworkUrl600){
            return this.artworkUrl600;
        }else if(this.artworkUrl100){
            return this.artworkUrl100;
        }else if(this.artworkUrl60){
            return this.artworkUrl60;
        }else{
            return this.artworkUrl30;
        }
    }

    get formattedPrice(){
        if(this.trackPrice === 0){
            return "FREE";
        }
        switch(this.currency){
            case "USD":
                return "$"+this.trackPrice;
            default:
                return '!!NO CURRENCY!!';
        }
    }

    get formattedTrackNumber(){
        if(this.trackCount > 0){
            return this.trackCount;
        //     TODO: Get collection count? Is this it or another API request
        }else{
            return false;
        }
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
    collectionViewUrl = "";
    feedUrl = "";
    trackViewUrl = "";
    artworkUrl30 = "";
    artworkUrl60 = "";
    artworkUrl100 = "";
    collectionPrice = "";
    trackPrice = "";
    collectionHdPrice = "";
    releaseDate = "";
    collectionExplicitness = "";
    trackExplicitness = "";
    trackCount = "";
    trackTimeMillis = "";
    country = "";
    currency = "";
    primaryGenreName = "";
    contentAdvisoryRating = "";
    artworkUrl600 = "";
    genreIds = [];
    genres = [];
}
