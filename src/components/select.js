import React, { Component } from 'react';
import { string, arrayOf, shape } from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

class Select extends Component {
    propTypes = {
        label: string.isRequired,
        helperText: string,
        className: string,
        options: arrayOf(shape({
            value: string,
            label: string,
        })).isRequired,
    }

    defaultProps = {
        helperText: null,
    }

    static getDerivedStateFromProps({ options }, prevState) {
        return { value: options[0].value };
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    }

    render() {
        const { label, helperText, options, className } = this.props;
        return (
            <TextField
                select
                label={label}
                helperText={helperText}
                value={this.state.value}
                onChange={this.handleChange}
                className={className}
            >
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        )
    }
}

export default Select;
