import React, { Component } from 'react';
import './Detail.css';
import {ReviewDisplay} from './ReviewDisplay';

class Review extends Component {

    render() {
        return (
            <div  >
                <ReviewDisplay />
            </div>
        );
    }
}

export default Review;