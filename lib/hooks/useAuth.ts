/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../api/store/authStore';
import { authService } from '../api/auth';

export const useAuth = () => {
    const router = useRouter();
    const { user, token, isAuthenticated, isLoading, setAuth, clearAuth, setLoading } = useAuthStore();

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            const response = await authService.login({ email, password });
            const { user, session } = response;
            setAuth(user, session.access_token);
            router.push('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const register = async (email: string, password: string, name: string) => {
        try {
            setLoading(true);
            const response = await authService.register({ email, password, name });
            const { user, session } = response;
            setAuth(user, session.access_token);
            router.push('/dashboard');
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            clearAuth();
            router.push('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const checkAuth = async () => {
        if (token) {
            try {
                const profile = await authService.getProfile();
                setAuth(profile, token);
            } catch (error) {
                clearAuth();
            }
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return {
        user,
        token,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
    };
};