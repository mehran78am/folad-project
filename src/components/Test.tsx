// UserList.tsx
import React from 'react';
import { useUserContext } from './UserContext';

const Test: React.FC = () => {
    const { users, loading, error } = useUserContext();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <img src={user.imageUrl} alt={user.username} style={{ width: '50px', height: '50px' }} />
                    <h2>{user.username}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </li>
            ))}
        </ul>
    );
};

export default Test;
