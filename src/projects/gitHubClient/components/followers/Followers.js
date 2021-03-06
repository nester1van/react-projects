import { connect } from 'react-redux';
import UsersCollection from '../usersCollection/UsersCollection';

const mapStateToProps = (state) => ({
    users: state.followers.data
});

export default connect(mapStateToProps)(UsersCollection);