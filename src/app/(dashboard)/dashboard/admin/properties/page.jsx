// src/app/(dashboard)/dashboard/admin/properties/page.js
import { getUserSession } from '@/lib/core/session';
import { getProperties } from '@/lib/api/properties';
import AdminPropertiesClient from './AdminPropertiesClient';

// page.js
export default async function AdminPropertiesPage({ searchParams }) {
    const filter = await searchParams;
    const session = await getUserSession();

    if (!session?.id) {
        return (
            <div className="p-8 text-center">
                <p className="text-gray-500">Please log in to view properties.</p>
            </div>
        );
    }

    const querySearch = new URLSearchParams(filter);
    const queryString = querySearch.toString();

    // Fetch filtered results AND all three status counts in parallel
    const [filteredResult, allResult, approvedResult, pendingResult, rejectedResult] = await Promise.all([
        getProperties(queryString),
        getProperties("perPage=1"),
        getProperties("status=approved&perPage=1"),
        getProperties("status=pending&perPage=1"),
        getProperties("status=rejected&perPage=1"),
    ]);

    const { properties, total } = filteredResult || {};

    const globalStats = {
        total: allResult?.total || 0,
        approved: approvedResult?.total || 0,
        pending: pendingResult?.total || 0,
        rejected: rejectedResult?.total || 0,
    };

    return (
        <AdminPropertiesClient
            properties={properties || []}
            total={total || 0}
            filter={filter}
            adminId={session.id}
            globalStats={globalStats}
        />
    );
}