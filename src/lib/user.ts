import { toast } from 'sonner';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  createdAt: string;
  updatedAt: string;
}

// In a real application, this would be replaced with API calls to a backend
const USERS_KEY = 'waygo_users';

export const userService = {
  // Get all users
  getAllUsers: (): User[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  // Get user by email
  getUserByEmail: (email: string): User | undefined => {
    const users = userService.getAllUsers();
    return users.find(user => user.email === email);
  },

  // Create new user
  createUser: (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): User => {
    const users = userService.getAllUsers();
    
    // Check if user already exists
    if (users.some(user => user.email === userData.email)) {
      throw new Error('User with this email already exists');
    }

    const newUser: User = {
      ...userData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return newUser;
  },

  // Update user
  updateUser: (userId: string, userData: Partial<User>): User => {
    const users = userService.getAllUsers();
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const updatedUser = {
      ...users[userIndex],
      ...userData,
      updatedAt: new Date().toISOString(),
    };

    users[userIndex] = updatedUser;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return updatedUser;
  },

  // Delete user
  deleteUser: (userId: string): void => {
    const users = userService.getAllUsers();
    const filteredUsers = users.filter(user => user.id !== userId);
    localStorage.setItem(USERS_KEY, JSON.stringify(filteredUsers));
  },

  // Login user
  login: (email: string, password: string): User => {
    const user = userService.getUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.password !== password) {
      throw new Error('Invalid password');
    }
    return user;
  },
}; 