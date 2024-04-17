// more info on factories:
// https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d

import LibraryCollection from "@/models/LibraryCollection.js";
import Song from "@/models/Types/Song.js";
import Audiobook from "@/models/Types/Audiobook.js";
import Podcast from "@/models/Types/Podcast.js";
import Movie from "@/models/Types/Movie.js";
import TVEpisode from "@/models/Types/TVEpisode.js";

export default class LibraryCollectionFactory {
    // Static methods can be called without creating an instance.
    // For example: PublicationCollectionFactory.createFromGoogleBooks(...)
    // will return a new PublicationCollection
    static createFromGoogleBooks(libraryItems){

        const collection = new LibraryCollection();

        libraryItems.forEach(item => {
            let newItem = false;

            console.log("item", item);
            switch(item.wrapperType.toLowerCase()){
                case "track":
                    switch(item.kind.toLowerCase()) {
                        case "song":
                            // This is how you do it when the model doesn't match the data
                            // newItem = new Book();
                            // newItem.volumeInfo.title = volume.volumeInfo.title;

                            // If they all match
                            newItem = Object.assign(new Song(), item);
                            break;
                        case "podcast":
                            newItem = Object.assign(new Podcast(), item);
                            break;
                        case "feature-movie":
                            newItem = Object.assign(new Movie(), item);
                            break;
                        case "tv-episode":
                            newItem = Object.assign(new TVEpisode(), item);
                            break;
                        default:
                            console.warn('No track item.kind.type defined for ' + item.wrapperType.type);
                    }
                    break;
                case "audiobook":
                    newItem = Object.assign(new Audiobook(), item);
                    break;
                default:
                    console.warn('No models defined for ' + item.wrapperType);
            }

            if(newItem){
                collection.add(newItem);
            }
        }); //End of .foreach

        return collection;
    }

    static createFromLocalStorage(items){
        // currently this is no different, but could be in the future
        return this.createFromGoogleBooks(items);
    }
}
