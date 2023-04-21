import React, { ReactNode, useEffect, useState } from "react";
import { MicroCMSQueries } from "microcms-js-sdk";
import { Page, getList } from "../libs/microcms";
import LoadingWindow from "./LoadingWindow";
import Link from "next/link";

export default function AlbumList(){
    const [contents, setContents] = useState<Page[] | undefined>(undefined);
    useEffect(() => {
        const fetchData = async () => {
            const queries : MicroCMSQueries = {
                limit:3,
                filters:"kinds[contains]アルバム"
            }
            const { contents } = await getList<Page>("page", queries);
            setContents(contents);
        };
        fetchData();
    }, []);

    if (!contents) {
        return <LoadingWindow/>
    }

    return(
        <><div>
            {
                contents.map((album) => {
                    return (
                    <div key={album.title} className="ContentSubItem">
                        <h3 key={`${album.title}h3`}> {album.title} </h3>
                        <div className="IconImage">
                        {album.thumbnail ? (
                            <img
                                alt=""
                                src={album.thumbnail.url}
                                style={{
                                    width: "15vw",
                                    height: "auto",
                                }}
                            />
                        ) : (
                            ""
                        )}
                        </div>
                        <a className="AbstractArea">{album.abstruct}</a>
                        
                    </div>
                    )
                })
            }
        </div></>
    )
}