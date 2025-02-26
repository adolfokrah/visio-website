import Link from "next/link";
import { Block } from "visio-cms-lib/types";


type PostsPorps = {
    externalData: {
        posts: {
            userId: number;
            id: number;
            title: string;
            body: string;
        }[];
    }
}

const Posts: Block<PostsPorps> = ({externalData}) => {
    return (
        <div>
            <h1>Posts List</h1>
            <div className="grid grid-cols-4 gap-4">
                {externalData?.posts?.map((post) => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} className="text-2xl font-bold hover:text-primary">{post.title}</Link>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

Posts.Schema = {
    name: 'Posts',
    id:'posts',
    defaultPropValues: {
        externalData: {
            posts: []
        }
    },
    sideEditingProps: []
}

export default Posts;