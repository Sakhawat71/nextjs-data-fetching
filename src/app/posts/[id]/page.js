import Link from "next/link";

export const generateStaticParams = async () => {
    // return [{id:'1'},{id:"5"}]
    const res = await fetch(`http://localhost:5000/posts`);
    const posts = await res.json();

    const ids = posts.map((post) => {
        return {
            id: post.id + '',
        }
    });

    return ids;
}


const PostDetails = async ({ params }) => {
    // console.log(params.id);

    const res = await fetch(`http://localhost:5000/posts/${params.id}`)
    const post = await res.json();
    console.log(post);

    return (
        <div>
            <div className="card  w-96">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <div className="card-actions justify-end">
                        <Link href={'/posts'}><button className="btn btn-primary">Go Home</button></Link>
                        <button className="btn btn-ghost">{post.likeCount}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;