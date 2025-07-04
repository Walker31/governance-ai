import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Role definitions with permissions
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user'
};

export const PERMISSIONS = {
  // Template permissions
  VIEW_TEMPLATES: 'view_templates',
  CREATE_TEMPLATES: 'create_templates',
  EDIT_TEMPLATES: 'edit_templates',
  DELETE_TEMPLATES: 'delete_templates',
  
  // Response permissions
  VIEW_RESPONSES: 'view_responses',
  CREATE_RESPONSES: 'create_responses',
  EDIT_RESPONSES: 'edit_responses',
  DELETE_RESPONSES: 'delete_responses',
  
  // User management
  MANAGE_USERS: 'manage_users'
};

// Permission mapping for each role
const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    PERMISSIONS.VIEW_TEMPLATES,
    PERMISSIONS.CREATE_TEMPLATES,
    PERMISSIONS.EDIT_TEMPLATES,
    PERMISSIONS.DELETE_TEMPLATES,
    PERMISSIONS.VIEW_RESPONSES,
    PERMISSIONS.CREATE_RESPONSES,
    PERMISSIONS.EDIT_RESPONSES,
    PERMISSIONS.DELETE_RESPONSES,
    PERMISSIONS.MANAGE_USERS
  ],
  [ROLES.USER]: [
    PERMISSIONS.VIEW_TEMPLATES,
    PERMISSIONS.CREATE_RESPONSES
  ]
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const userWithPermissions = {
      ...userData,
      permissions: ROLE_PERMISSIONS[userData.role] || []
    };
    setUser(userWithPermissions);
    localStorage.setItem('user', JSON.stringify(userWithPermissions));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    return user.permissions.includes(permission);
  };

  const hasRole = (role) => {
    if (!user) return false;
    return user.role === role;
  };

  const isAdmin = () => hasRole(ROLES.ADMIN);
  const isUser = () => hasRole(ROLES.USER);

  const value = {
    user,
    login,
    logout,
    hasPermission,
    hasRole,
    isAdmin,
    isUser,
    loading,
    ROLES,
    PERMISSIONS
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 