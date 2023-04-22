import Head from "next/head";
import { NextPage } from "next";
import { type } from "os";

interface MyHeadProps{
    siteName?:string
    thumbnailUrl?:string
    description?:string
}

const MyHead : NextPage<MyHeadProps> = (
    {siteName, thumbnailUrl, description}
)=>{
    siteName = siteName===undefined
        ?"しれふぁら！"
        :siteName;

    thumbnailUrl = thumbnailUrl===undefined
        ?"https://images.microcms-assets.io/assets/2fc5d1610bcb4663a5290dce8f4e76db/b96c4c2e372b4a489548fd9f1fbcba08/713_20230315025156.jpg"
        :thumbnailUrl;

    description =  description===undefined
        ?"しれふぁら！のホームページ"
        :description;

    return(
        <Head>
            <title>{siteName}</title>
            <link rel="icon" href={thumbnailUrl}/>
            <meta name="description" content={description}></meta>

            <meta name="twitter:image" content={thumbnailUrl}></meta>
        </Head>
    )
}

export default MyHead