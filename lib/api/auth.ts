import apiClient from './client';

interface LoginCredentials {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
    name: string;
}

interface AuthResponse {
    user: {
        id: string;
        email: string;
        name: string;
    };
    session: {
        access_token: string;
        refresh_token: string;
        expires_at: number;
    };
}

export const authService = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
        const { data } = await apiClient.post<AuthResponse>('/auth/login', credentials);
        return data;
    },

    register: async (userData: RegisterData): Promise<AuthResponse> => {
        const { data } = await apiClient.post<AuthResponse>('/auth/register', userData);
        return data;
    },

    getProfile: async () => {
        const { data } = await apiClient.get('/auth/profile');
        return data;
    },

    logout: async () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    },
};