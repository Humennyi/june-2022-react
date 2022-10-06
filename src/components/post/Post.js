import React from 'react';

const Post = ({post}) => {

    return (
        <div>
            {post.id} -- {post.body}
        </div>
    )
}
export {Post};