import { getRequiredRole } from '@/lib/core/session';
import React from 'react';

const OwnerLayout = ({children}) => {
    getRequiredRole("owner")
    return (
        <div>
            {children}
        </div>
    );
};

export default OwnerLayout;