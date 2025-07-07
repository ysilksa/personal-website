import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Button({ label, route }) {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate( route )}>
            <span>{ label }</span>
        </button>
    );
}