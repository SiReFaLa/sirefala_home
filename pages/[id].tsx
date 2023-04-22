/*
ブログ/自己紹介/曲/アルバム...のPageデータからサイトをビルド時に作成。

*/

import { client, Page } from "../libs/microcms";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import MyHead from "../components/MyHead";

interface Props {page: Page}

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
    const {contents} = await client.getList<Page>({ endpoint: "page" });

    const paths = contents.map(content => `/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps : GetStaticProps<Props,Params> = async ({params}) => {
    if(!params) throw new Error("params is undefined")
    const id = params.id;
    const page = await client.get<Page>({ endpoint: "page", contentId: id });

    return {
        props: {
            page: page,
        },
    };
};