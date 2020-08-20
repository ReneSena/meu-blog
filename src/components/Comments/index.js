import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styled';

const Comments = ({ url, title }) => {
    const completeURL = `${url}`
    return(
        <S.CommentWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="renesena"
                identifier={completeURL}
                title={title}
                url={completeURL}
            />
            );
        </S.CommentWrapper>
    );
}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Comments;