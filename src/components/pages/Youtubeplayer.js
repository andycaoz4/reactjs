import React, { Component } from 'react';
import SearchBar from './ytplayer/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './ytplayer/video_list';
import VideoDetail from './ytplayer/video_detail';

import '../../css/bootstrap.css';
import '../../css/youtubeplayer.css';

const API_KEY = 'AIzaSyAcnNaPwNaM8bbX2aebAGRGjm2K7xEjGcQ';

class Youtubeplayer extends Component {
    state = {
        currentUserName: '',
        currentUserEmail: ''
    }

    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Accenture News');
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (data) => {
            console.log(data);
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        })
    }

    render() {
        const { currentUserEmail, currentUserName } = this.state;

        return (
            <div className="row zpy-34">
                <div className="top-panel col-12 zp-44">
                    <h1 className="zmb-0">Welcome <br className="d-block d-md-none"/>{ currentUserName }</h1>
                    <p>Email: { currentUserEmail }</p>
                    <p>You have reached the Accenture News on Youtube</p>
                </div>
                <div className="col-12 mx-auto zp-44 zmt-34 video-panel">
                    <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
                    <div className="row">
                        <VideoDetail video={this.state.selectedVideo} />
                        <VideoList 
                            onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
                            videos={this.state.videos} />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Youtubeplayer;