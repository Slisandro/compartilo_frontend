'use client';

import { useEffect, useState } from 'react';
import { ridesService } from '@/lib/api/rides';
import { useAuth } from '@/lib/hooks/useAuth';
// import RideCard from '@/components/rides/RideCard';
// import RideFilters from '@/components/rides/RideFilters';
import { useRouter } from 'next/navigation';

interface Ride {
    id: string;
    driver_id: string;
    origin: string;
    destination: string;
    departure_time: string;
    available_seats: number;
    price: number;
    description?: string;
    vehicle_type?: string;
    status: string;
    driver?: {
        id: string;
        name: string;
        email: string;
        rating_avg: number;
    };
}

export default function DashboardPage() {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();
    const [rides, setRides] = useState<Ride[]>([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        origin: '',
        destination: '',
        date: '',
        seats: '',
    });

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }
        fetchRides();
    }, [isAuthenticated, filters]);

    const fetchRides = async () => {
        try {
            setLoading(true);
            const response = await ridesService.findAll({
                origin: filters.origin || undefined,
                destination: filters.destination || undefined,
                date: filters.date || undefined,
                seats: filters.seats ? parseInt(filters.seats) : undefined,
            });
            setRides(response.data || []);
        } catch (error) {
            console.error('Error fetching rides:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return null; // Redirige al login
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    ¡Bienvenido, {user?.name}!
                </h1>
                <p className="text-gray-600">
                    Encuentra viajes compartidos disponibles
                </p>
            </div>

            {/* <RideFilters filters={filters} setFilters={setFilters} /> */}

            {loading ? (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
                    <p className="mt-2 text-gray-600">Cargando viajes...</p>
                </div>
            ) : rides.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600">No hay viajes disponibles</p>
                    <button
                        onClick={() => router.push('/rides/create')}
                        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Publicar un viaje
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* {rides.map((ride) => (
                        <RideCard
                            key={ride.id}
                            ride={ride}
                            onClick={() => router.push(`/rides/${ride.id}`)}
                        />
                    ))} */}
                </div>
            )}
        </div>
    );
}