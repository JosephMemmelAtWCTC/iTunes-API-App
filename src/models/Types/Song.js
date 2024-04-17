export default class Song {
    // This belongs to the class, not the object
    // This should be the only place the string 'Book' is defined.
    // All other places should reference this with ClassName.type
    static type= 'Song';
    static icon= 'bi bi-music-note';

    // define type using getter so it is not modifiable
    get type(){
        return Song.type;
    }
    get icon(){
        return Song.icon;
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



    get formattedPrice(){
        switch(this.currency){
            case "USD":
                return "$"+this.trackPrice;
            default:
                return '!!NO CURRENCY!!';
        }
    }

    get formattedLength(){
        // const millsAsDate = new Date(this.trackTimeMillis);
        let formattedDate = '';
        // let formattedDate = (millsAsDate.getHours()>0? millsAsDate.getHours()+"h ":"")
        //                          + (millsAsDate.getMinutes()>0? millsAsDate.getMinutes()+"m ":"")
        //                          + (millsAsDate.getSeconds()>0? millsAsDate.getSeconds()+"s":"");

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
        if(seconds > 0){
            formattedDate += (seconds+"s ");
        }
        return formattedDate.trim();
    }

    wrapperType= '';
    kind= '';
    artistId= '';
    collectionId= '';
    trackId= '';
    artistName= '';
    collectionName= '';
    trackName= '';
    collectionCensoredName= '';
    trackCensoredName= '';
    artistViewUrl= '';
    collectionViewUrl= '';
    trackViewUrl= '';
    previewUrl= '';
    artworkUrl30= '';
    artworkUrl60= '';
    artworkUrl100= '';
    collectionPrice= '';
    trackPrice= '';
    releaseDate= '';
    collectionExplicitness= '';
    trackExplicitness= '';
    discCount= '';
    discNumber= '';
    trackCount= '';
    trackNumber= '';
    trackTimeMillis= '';
    country= '';
    currency= '';
    primaryGenreName= '';
    contentAdvisoryRating= '';
    isStreamable= '';
    get thumbnail(){
        return this.artworkUrl100;
        // return this.volumeInfo.imageLinks?.thumbnail?.replace('&edge=curl', '');
    }

    // set thumbnail(value){
    //     return this.volumeInfo.imageLinks.thumbnail = value;
    // }
}
