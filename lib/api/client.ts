import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para añadir el token
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Interceptor para manejar errores de autenticación
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Token expirado, redirigir a login
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
        }
        return Promise.reject(error);
    }
);

export default apiClient;