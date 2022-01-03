import { useEffect, useState } from 'react';
import User from './components/User';

export default function UserList() {
    const USER_LIST_API = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);
        fetch(USER_LIST_API)
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error('Something went wrong');
            })
            .then((res) => setUsers(res))
            .catch((err) => setError(err.message))
            .finally(() => setIsloading(false));
    }, []);

    const renderUserList = () => {
        if (users && Array.isArray(users)) {
            if (users.length === 0) {
                return <span>There are no users</span>;
            }
            return users.map((user) => (
                <User
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    website={user.website}
                    address={user.address}
                />
            ));
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h3>User List</h3>
            <ul>{renderUserList()}</ul>
        </>
    );
}
