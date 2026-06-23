import { getRequiredRole } from '@/lib/core/session';
import React from 'react';

const TenantLayout = ({children}) => {
    getRequiredRole("tenant")
    return (
        <div>
            {children}
        </div>
    );
};

export default TenantLayout;