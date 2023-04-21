import { MicroCMSContentId, createClient} from "microcms-js-sdk"
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate
} from "microcms-js-sdk";

type MicroCMSContents = {
    endpoint: "member"|"page";
}

export type Member = {
    endpoint: "member";
    name: string;
    youtubeID: string;
    niconicoID: string;
    bilibiliID: string;
    twitterID: string;
    instagramID: string;
    tiktokID: string;
    comment: string;
    iconImage: MicroCMSImage;
    details: Page;
    race: "しれふぁら！" | "イラストレーター" | "Webエンジニア";
} & MicroCMSDate & MicroCMSContents;

export type Page = {
    endpoint: "page"
    title: string;
    kinds: "ブログ" | "自己紹介" | "曲" | "アルバム";
    creationDate: MicroCMSDate;
    thumbnail: MicroCMSImage;
    writer: MicroCMSContentId;
    relatedpage: Page[];
    abstruct: string;
    text: string;
} & MicroCMSDate & MicroCMSContents;

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.B_MICROCMS_SERVICE_DOMAIN || "",
    apiKey: process.env.B_MICROCMS_API_KEY || "",
});

export const getList = async <T extends MicroCMSContents>(endpoint : string, queries?: MicroCMSQueries) => {
    const listData = await client.getList<T>({
     endpoint,
     queries,
    });
    
    return listData;
};

export const getMemberDetail = async (
        contentId: string,
        queries?: MicroCMSQueries
    ) => {
        const detailData = await client.getListDetail<Member>({
        endpoint: "member",
        contentId,
        queries,
    });
    return detailData;
};




