import apiClient from './client';

export interface Ride {
    id: string;
    driver_id: string;
    origin: string;
    destination: string;
    departure_time: string;
    available_seats: number;
    price: number;
    description?: string;
    vehicle_type?: string;
    allows_pets?: boolean;
    allows_luggage?: boolean;
    status: 'active' | 'completed' | 'cancelled';
    created_at: string;
    updated_at: string;
}

export interface CreateRideData {
    origin: string;
    destination: string;
    departure_time: string;
    available_seats: number;
    price?: number;
    description?: string;
    vehicle_type?: string;
    allows_pets?: boolean;
    allows_luggage?: boolean;
}

export const ridesService = {
    findAll: async (filters?: {
        origin?: string;
        destination?: string;
        date?: string;
        seats?: number;
        page?: number;
        limit?: number;
    }) => {
        const { data } = await apiClient.get('/rides', { params: filters });
        return data;
    },

    findOne: async (id: string) => {
        const { data } = await apiClient.get(`/rides/${id}`);
        return data;
    },

    create: async (rideData: CreateRideData) => {
        const { data } = await apiClient.post('/rides', rideData);
        return data;
    },

    update: async (id: string, rideData: Partial<CreateRideData>) => {
        const { data } = await apiClient.patch(`/rides/${id}`, rideData);
        return data;
    },

    delete: async (id: string) => {
        const { data } = await apiClient.delete(`/rides/${id}`);
        return data;
    },

    getMyRides: async () => {
        const { data } = await apiClient.get('/rides/my-rides');
        return data;
    },
};