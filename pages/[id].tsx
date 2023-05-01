/*
ブログ/自己紹介/曲/アルバム...のPageデータからサイトをビルド時に作成。

*/
import React, { ReactNode, useEffect, useState } from "react";
import { client, Blog, getItemsHook, getItemsAsync } from "../libs/newt";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import MyHead from "../components/MyHead";

interface Props {page: Blog}

interface Params extends ParsedUrlQuery {id: string}

export default function PageId( {page}:Props) {
    return (
        <div className="App">
            <MyHead siteName={page.title} description={page.abstruct}/>
            <h1 className="ContentItem">{page.title}</h1>
            <div className="prose text-black pt-7"
                dangerouslySetInnerHTML={{
                    __html: `${page.text}`,
                }}
            />
        </div>
    );
}
  
export const getStaticPaths : GetStaticPaths<Params> = async () => {
    const contents  = await getItemsAsync<Blog>("homepage","blog");

    const paths = contents.map(content => `/${content._id}`);
    return { paths, fallback: false };
};

export const getStaticProps : GetStaticProps<Props,Params> = async ({params}) => {
    if(!params) throw new Error("params is undefined")
    const id = params.id;
    const page = await client.getContent<Blog>({ appUid:"homepage",modelUid:"blog", contentId: id });

    return {
        props: {
            page: page,
        },
    };
};