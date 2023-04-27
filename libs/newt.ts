import {createClient, Content, Contents} from "newt-client-js"
import { Query } from "newt-client-js/dist/types/types";

export type Member = {
    _id: string;
    _sys: {
      createdAt: string;
      updatedAt: string;
      raw: {
        createdAt: string;
        updatedAt: string;
        firstPublishedAt: string;
        publishedAt: string;
      };
    };
    name: string;
    youtubeID: string;
    niconicoID: string;
    bilibiliID: string;
    twitterID: string;
    instagramID: string;
    tiktokID: string;
    comment: string;
    details: Blog;
    iconImage: {
      _id: string;
      src: string;
      fileType: string;
      fileSize: number;
      fileName: string;
      width: number;
      height: number;
    };
    race: "しれふぁら！" | "イラストレーター" | "Webエンジニア";
  };

export type Blog = {
    _id: string;
    _sys: {
      createdAt: string;
      updatedAt: string;
      raw: {
        createdAt: string;
        updatedAt: string;
        firstPublishedAt: string;
        publishedAt: string;
      };
    };
    title: string;
    thumbnail: {
      _id: string;
      src: string;
      fileType: string;
      fileSize: number;
      fileName: string;
      width: number;
      height: number;
    };
    writer: string;
    tag: string;
    relatedpage: string[];
    abstruct: string;
    text: string;
  }

// API取得用のクライアントを作成
export const client = createClient({
    spaceUid: process.env.B_NEWT_SPACE_UID || "",
    token: process.env.B_NEWT_CDN_API_TOKEN || "",
});

export const getList = async <T>(appUid : string,modelUid :string, query?: Query) => {
    const listData = await client.getContents<T>({
     appUid,
     modelUid,
     query
    });
    
    return listData;
};




