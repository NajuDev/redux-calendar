import React from 'react';

import { MONTH_NAMES } from './../constants/month-names.constants';

export const CalendarComponent = (
    {
        month,
        year
    }
) => {

    return (
        <div>
            <h1>{ MONTH_NAMES[month] } { year }</h1>
            <table>
                <thead>
                    <tr>
                        <td>Sunday</td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )
};
