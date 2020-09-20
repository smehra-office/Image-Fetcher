import React from 'react';
import unsplash from '../API/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] };

    async requestImages(term) {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ 'marginTop': '10px' }}>
                <SearchBar searchCallback={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }

    onSearchSubmit = (term) => {
        this.requestImages(term);
    }
}

export default App;