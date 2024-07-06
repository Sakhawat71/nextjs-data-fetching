// import axios from "axios";

const Posts = async () => {

    const data = await fetch('http://localhost:5000/posts',{
        cache: 'force-cache'
    })
    const posts = await data.json()

    // const res = await axios('http://localhost:5000/posts')
    // const posts2 = await res.data;

    // console.log(posts2);
    // console.log(posts);

    return (
        <div className="">

            <div>
                <h2>Total Post: {posts.length}</h2>
            </div>

            <div className="grid gap-10 mx-16 items-center space-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <div key={post.id} className="card bg-gray-300 mx-auto h-56">
                        <div className="card-body h-full flex flex-col">
                            <h2 className="card-title">{post.title}</h2>
                            <p className="flex-grow">{post.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn">{post.likeCount}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Posts;