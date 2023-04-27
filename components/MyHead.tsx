import Head from "next/head";
import { NextPage } from "next";
import { type } from "os";

interface MyHeadProps{
    path?:string
    siteName?:string
    thumbnailUrl?:string
    description?:string
}

const MyHead : NextPage<MyHeadProps> = (
    {path, siteName, thumbnailUrl, description}
)=>{
    path = path===undefined
        ?"https://sirefala.github.io/sirefala_home/"
        :path
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

            <meta property="og:url" content={path} />
            <meta property="og:title" content={siteName} />
            <meta property="og:site_name" content={"しれふぁら！"} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={thumbnailUrl} />
        </Head>
    )
}

export default MyHead