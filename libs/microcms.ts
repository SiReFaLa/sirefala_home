import { createClient} from "microcms-js-sdk"
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate
} from "microcms-js-sdk";

export type Member = {
    name: string;
    youtubeID: string;
    niconicoID: string;
    bilibiliID: string;
    twitterID: string;
    instagramID: string;
    tiktokID: string;
    comment: string;
    iconImage: MicroCMSImage;
    details: string;
} & MicroCMSDate;

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.B_MICROCMS_SERVICE_DOMAIN || "",
    apiKey: process.env.B_MICROCMS_API_KEY || "",
});

export const getMemberList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Member>({
     endpoint: "member",
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




