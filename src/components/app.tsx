import React from 'react';

export interface Props {
    message: string;
}

export default ({ message }: Props) => <h1>{message}</h1>;
