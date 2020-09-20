import React from 'react';

class Imagecard extends React.Component {

    constructor() {
        super();
        this.imageRef = React.createRef();   /*create ref object to refer to some HTML element, img in this case.*/
    }

    /* grid row end specifies how many rows will the element take to render. 
     We get the width of the image via Ref system and then we do the calculation
    */

    render() {
        const { alt_description: description, id, urls } = this.props.image;
        return (<div style={{ 'grid-row-end': `span ${this.state.spans}` }}>
            <img alt={description} src={urls.regular} key={id} ref={this.imageRef} />
        </div>
        );
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan); /* we add load listener so that the method is fired only after 
                                                                      image is fully loaded. Else clientHeight will return 0 
                                                                      */
    }

    setSpan = () => {
        let height = this.imageRef.current.clientHeight;
        this.setState({ spans: Math.ceil(height / 10) });
    }
}

export default Imagecard;