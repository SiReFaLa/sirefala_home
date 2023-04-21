import { client, Page } from "../../libs/microcms";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
    page: Page
  }
  
// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
interface Params extends ParsedUrlQuery {
    id: string
}

export default function PageId( {page}:Props) {
    return (
        <main>
        <h1>{page.title}</h1>
        <p>{page.publishedAt}</p>
        <div
            dangerouslySetInnerHTML={{
            __html: `${page.text}`,
            }}
        />
        </main>
    );
}
  
// 静的生成のためのパスを指定します
export const getStaticPaths : GetStaticPaths<Params> = async () => {
    const {contents} = await client.getList<Page>({ endpoint: "page" });

    const paths = contents.map(content => `/pages/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps : GetStaticProps<Props,Params> = async ({params}) => {
    if(!params) throw new Error("params is undefined")
    const id = params.id;
    const page = await client.get<Page>({ endpoint: "page", contentId: id });
    console.log(page.title)

    return {
        props: {
            page: page,
        },
    };
};