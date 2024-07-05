import { useState, useEffect } from "react";

export default function Api() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { users: fetchedUsers } = await fetch('https://dummyjson.com/users').then(res => res.json());
                setUsers(fetchedUsers);
            } catch (error) {
                console.error(error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.firstName}</li>)}
        </ul>
    )
}