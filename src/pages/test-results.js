import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
    patient: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    patientName: {
        marginRight: 'auto',
    }
};

const testParameters = {
    patient: {
        name: "Igor Sukhinskii",
        dateOfBirth: "1958-01-18",
    },
    eye: "Left",
    algorithm: "SITA-Standard",
    gridType: "30-2",
    startTime: "2018-02-01T13:12:09.872Z",
    endTime: "2018-02-01T13:17:40.872Z",
    measurements: [
        ['', '', '', 28, 25,  0,  0, '', '', ''],
        ['', '', 30, 31, 28,  0,  0,  0, '', ''],
        ['', 31, 32, 33, 33,  0,  0,  0,  0, ''],
        [31, 30, 32, 34, 33,  0,  0,  0,  0,  0],
        [30, 29, 31, 32, 34,  0,  0,  0,  0,  0],
        [30, 31, 32, 34, 35,  4,  0,  0,  0,  0],
        [32, 33, 32, 34, 33,  0,  0,  0,  0,  0],
        ['', 34, 33, 35, 32,  0,  0,  0,  0, ''],
        ['', '', 33, 32, 33,  0,  0,  0, '', ''],
        ['', '', '', 31, 32,  0,  0, '', '', ''],
    ],
};

const age = (now, dob) => new Date(new Date(now) - new Date(dob)).getUTCFullYear() - 1970;
const date = d => new Date(d).toISOString().slice(0, 10);
const time = t => new Date(t).toISOString().slice(11, 16);
const duration = (start, end) => new Date(new Date(end) - new Date(start)).toISOString().slice(14, 19);

const TestResults = ({ classes }) => (
    <div>
        <div className={classes.patient}>
            <Typography className={classes.patientName}>Name: {testParameters.patient.name}</Typography>
            <Typography>Date of birth: {testParameters.patient.dateOfBirth}</Typography>
        </div>
        <div>
            <Typography>Date: {date(testParameters.startTime)}</Typography>
            <Typography>Time: {time(testParameters.startTime)}</Typography>
            <Typography>Age: {age(testParameters.startTime, testParameters.patient.dateOfBirth)}</Typography>
        </div>
        <div>
            <Typography>Central {testParameters.gridType} test</Typography>
            <Typography>Fixation losses: 0</Typography>
            <Typography>False POS Errors: 0%</Typography>
            <Typography>False NEG Errors: 0%</Typography>
            <Typography>Test duration: {duration(testParameters.startTime, testParameters.endTime)}</Typography>
            <Typography>Algorithm: {testParameters.algorithm}</Typography>
        </div>
        <table>
            <tbody>
                {testParameters.measurements.map((row, i) => (
                    <tr key={"row" + i}>
                        {row.map((value, j) => (
                            <td key={"col" + j}><Typography>{value}</Typography></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default withStyles(styles)(TestResults);
