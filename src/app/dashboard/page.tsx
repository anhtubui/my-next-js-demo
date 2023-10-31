import React from 'react';

export default function Dashboard() {
    return (
        <div>
            <h1>
                {'Hello world 123, This is heading'}
            </h1>

            <button disabled={true}>
                {'Button'}
            </button>

            <p
                className={'test-blue'}
                data-testid="paragraph-blue"
            >
                {'this is paragraph'}
            </p>
        </div>
    )
};
