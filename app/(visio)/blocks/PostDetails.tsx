"use client"
import { Slot } from "visio-cms-lib";
import { Block, PageBlock } from "visio-cms-lib/types";


type PostPorps = {
    content: PageBlock[]
    pageBlockId?: string;
    externalData?: {
        userId: number;
        id: number;
        title: string;
        relatedPosts: {
            userId: number;
            id: number;
            title: string;
            body: string;
        }[]
    }
}

const Post: Block<PostPorps> = ({externalData, content, pageBlockId=''}) => {
    return (
        <div className="p-4">
            This is the post deails bro
            <h1>{externalData?.title || 'n/a'}</h1>
            <br/>

            {externalData?.relatedPosts && <Slot propName="content" defaultValue={content} pageBlockId={pageBlockId} externalData={{posts: [...externalData.relatedPosts]}} allowedBlockIds={['posts']}/>}
        </div>
    )
}

Post.Schema = {
    name: 'Post Details',
    id:'post-deails',
    defaultPropValues: {
        content: []
    },
    sideEditingProps: []
}

export default Post;