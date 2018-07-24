import React, { Component } from 'react';
import './Adventure.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdventureHeader from '../AdventureHeader/AdventureHeader';
import AdventureInfo from '../AdventureInfo/AdventureInfo';
import AdventureComment from '../AdventureComment/AdventureComment';
import AdventureLocation from '../AdventureLocation/AdventureLocation';
import AdventurePhoto from '../AdventurePhoto/AdventurePhoto';
import AdventureWeather from '../AdventureWeather/AdventureWeather';
import AdventureToDo from '../AdventureToDo/AdventureToDo';

class Adventure extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Adventure">
                <AdventureHeader adventure={this.props.location.state.adventure} />
                <AdventurePhoto adventure={this.props.location.state.adventure} />
                <AdventureInfo adventure={this.props.location.state.adventure} activity={this.props.location.state.adventure.activities[0]} />
                <AdventureWeather lat={this.props.location.state.adventure.lat} lon={this.props.location.state.adventure.lon} />
                <AdventureComment adventure={this.props.location.state.adventure} />
                <AdventureLocation lat={this.props.location.state.adventure.lat} lon={this.props.location.state.adventure.lon} />   
                {this.props.user && <AdventureToDo adventure={this.props.location.state.adventure} />}
            </div>
        );
    }
}

Adventure.propTypes = {
    location: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
      user : state.user,
    };
  }

export default connect(mapStateToProps)(Adventure);