import { createClient } from "microcms-js-sdk"
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

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
   }
   
if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
   });