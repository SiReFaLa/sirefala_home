import {useEffect, useState} from "react";
import {createClient, Content, Contents} from "newt-client-js"
import { Query } from "newt-client-js/dist/types/types";
import { type } from "os";

type NewtContent = {
	_id: string;
    _sys: {
      createdAt: string;
      updatedAt: string;
      customOrder: string;
      raw: {
        createdAt: string;
        updatedAt: string;
        firstPublishedAt: string;
        publishedAt: string;
      };
    };
}

export type Member = {
    
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
  } & NewtContent;

export type Blog = {
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
    writer: Member;
    tag: string;
    relatedpage: string[];
    abstruct: string;
    text: string;
  } & NewtContent;

type NewtItem = Blog | Member;

// API取得用のクライアントを作成
export const client = createClient({
    spaceUid: process.env.B_NEWT_SPACE_UID || "",
    token: process.env.B_NEWT_CDN_API_TOKEN || "",
});

export const getItemsHook = <T extends NewtItem>(appUid : string,modelUid :string, query?: Query) => {
	const [contents, setContents] = useState<T[] | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			const contents = await client.getContents<T>({
				appUid,
				modelUid,
				query
			});
			setContents(contents.items);
		};
    	fetchData();
  	}, []);
	if(!contents){
		return undefined;
	}else{
		return contents;
	}
};

export const getItemsAsync = async <T extends NewtItem>(appUid : string,modelUid :string, query?: Query) => {
	const contents = await client.getContents<T>({
		appUid,
		modelUid,
		query
	});
	
	return contents.items;
};






