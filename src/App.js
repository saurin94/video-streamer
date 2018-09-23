import React, {Component} from 'react';
import SearchBar from './components/search';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Brand from "./components/brand";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_detail";
import YouTubeSearch from 'youtube-api-search';

var API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo : null
        };

        this.videoSearch('skateboards');

    }

    videoSearch(term) {
        YouTubeSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo : videos[0]
            });
        });
    }


    render() {
        return (
            <div className="App">
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-sm-2">
                            <Brand/>
                        </div>
                        <div className="col-sm-8 form-group">
                            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 ml-3 mt-2 col-11">
                            <VideoDetails video={this.state.selectedVideo}/>
                        </div>
                        <div className="col-sm-3">
                            <VideoList
                                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                                videos={this.state.videos}/>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default App;
