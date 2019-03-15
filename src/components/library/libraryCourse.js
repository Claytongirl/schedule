import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="libraryCourse">
                <label className="library_course__title">Problem Solving></label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* arrow component */}
                { Icon('fas fa-plus-circle', 'library-course__action') }
                <div className="library-course__description">
                <label>Course Desription</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum iaculis sapien eu sagittis. Sed accumsan, urna non mattis faucibus, dui diam imperdiet mi, commodo commodo lacus dui vel felis.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;