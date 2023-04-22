import React, { ReactNode, useEffect, useState } from "react";
import { MicroCMSQueries } from "microcms-js-sdk";
import { Page, getList } from "../libs/microcms";
import LoadingWindow from "./LoadingWindow";
import Link from "next/link";

interface PageListProps{
    limit?:number
    kinds:string
}

export default function PageList({limit, kinds}:PageListProps){
    const [contents, setContents] = useState<Page[] | undefined>(undefined);
    useEffect(() => {
        const fetchData = async () => {
            const queries : MicroCMSQueries = {
                limit : limit,
                filters : "kinds[contains]"+kinds,
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
                    <div key={album.title} >
                        <div key={album.title} className="ContentSubItem">
                            <h3 key={`${album.title}h3`}> {album.title} </h3>
                            <div className="IconImage">
                                <Link href={`/${album.id}`}>
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
                                </Link>
                            </div>
                            <a className="AbstractArea">{album.abstruct}</a>
                        </div>
                    </div>
                    )
                })
            }
        </div></>
    )
}