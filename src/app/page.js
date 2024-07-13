import Link from 'next/link';
import React from 'react';

const MainPage = () => {



    return (
        <div className='font-serif'>
            <h1 className='text-7xl text-green-500'>Next app</h1>
            <p>For data fetching</p>

            <div>
                <ul>
                    <li>
                        <Link href="/posts" className='btn btn-sm'>Posts</Link>
                    </li>
                    <li>
                        <Link href="/users" className='btn btn-sm'>Users</Link>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default MainPage;