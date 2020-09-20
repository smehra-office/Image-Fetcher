import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { inputValue: '' };
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" onChange={(e) => this.setState({ inputValue: e.target.value })} value={this.state.inputValue} />
                    </div>
                </form>
            </div>
        );
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchCallback(this.state.inputValue);
    }
}

export default SearchBar;