'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h1>Users : {users.length}</h1>
            <div className="grid gap-10 mx-16 items-center space-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <div key={user.id} className="card bg-gray-300 mx-auto h-56">
                        <div className="card-body h-full flex flex-col">
                            <h2 className="card-title">{user.name}</h2>
                            <p className="flex-grow">{user.email}</p>
                            <div className="card-actions justify-between">

                                <button className="btn btn-md disabled">{user.username}</button>
                                <Link href={`/posts/${user.id}`} >
                                    <button className="btn">Read more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;