import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <div>
                <img src={location.state.poster}/>
                <div>
                    <h3>
                        - TITLE: {location.state.title}
                        </h3>
                </div>

                <div><h4>
                    - YEAR: {location.state.year}
                </h4></div>
                <div><h5>-SUMMARY: {location.state.summary}
                </h5></div>
            </div>;

        } else {
            return null;
        }
        }
}

export default Detail;