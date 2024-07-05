const users = [
    'Rodrigo',
    'Maria',
    'José',
    'Raphael',
    'Ugo'
];
  
export default function List() {
    return (
        <ul>
            {users.map(user => <li key={user}>{user}</li>)}
        </ul>
    )
}