import { connect } from 'react-redux';

import { CalendarComponent } from './../components/calendar';

const mapStateToProps = (state) => (
    {
        date: state.date.date,
        month: state.date.month,
        year: state.date.year,
    }
);

export default connect(
    mapStateToProps,
)(CalendarComponent);
