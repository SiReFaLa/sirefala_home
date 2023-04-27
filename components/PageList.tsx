import React, { ReactNode, useEffect, useState } from "react";
import { Blog, getList } from "../libs/newt";
import LoadingWindow from "./LoadingWindow";
import Link from "next/link";
import { Query } from "newt-client-js/dist/types/types";

interface PageListProps{
    limit?:number
    kinds:string
}

export default function PageList({limit, kinds}:PageListProps){
    const [contents, setContents] = useState<Blog[] | undefined>(undefined);
    useEffect(() => {
        const fetchData = async () => {
            const queries : Query = {
                limit : limit,
            }
            const contents = (await getList<Blog>("homepage","blog",queries)).items;
            setContents(contents);
        };
        fetchData();
    }, []);

    if (!contents) {
        return <LoadingWindow/>
    }

    if(contents.length===0){
        return <a>No Content</a>
    }

    return(
        <><div>
            {
                contents.filter(blog=>{
                    return blog.tag.includes(kinds)
                }).map((blog) => {
                    return (
                    <div key={blog.title} >
                        <div key={blog.title} className="ContentSubItem">
                            <h3 key={`${blog.title}h3`}> {blog.title} </h3>
                            <div className="IconImage">
                                <Link href={`/${blog._id}`}>
                                    {blog.thumbnail ? (
                                        <img
                                            alt=""
                                            src={blog.thumbnail.src}
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
                            <a className="AbstractArea">{blog.abstruct}</a>
                        </div>
                    </div>
                    )
                })
            }
        </div></>
    )
}