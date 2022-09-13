import React from 'react';

function Album({album}) {
    return (
        <div>
            <p>Title - {album.title}</p>
        </div>
    );
}

export default Album;