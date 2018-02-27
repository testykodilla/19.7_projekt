import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment, thumbDownComment } from './actions.js';

const mapDispatchToProps = ({
    thumbUpComment,
    thumbDownComment,
});

export default connect(null, mapDispatchToProps)(Comment);
