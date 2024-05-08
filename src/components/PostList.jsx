import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import classes from "./PostList.module.css";

function PostList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} id={post.id} />)}
            </ul>)}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet</h2>
                    <p>Start adding some</p>
                </div>
            )}
        </>
    );
}

export default PostList;