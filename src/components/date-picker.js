import React, { Component } from 'react';
import DatePicker from 'material-ui-pickers/DatePicker';

class CustomDatePicker extends Component {
    state = {
        value: null,
    }

    handleChange = date => {
        this.setState({
            value: date,
        });
    }

    render() {
        return (
            <DatePicker
                value={this.state.value}
                onChange={this.handleChange}
                format="DD.MM.YYYY"
                {...this.props}
            />
        )
    }
}

export default CustomDatePicker;
