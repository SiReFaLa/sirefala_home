import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiNiconico, SiBilibili } from "react-icons/si";
import { Member, getList } from "../libs/microcms";
import LoadingWindow from "./LoadingWindow";


export type SNSData = {
  id:
    | "youtubeID"
    | "niconicoID"
    | "bilibiliID"
    | "twitterID"
    | "tiktokID"
    | "instagramID";
  url: string;
  icon: ReactNode;
};

const SNSList: SNSData[] = [
  {
    id: "youtubeID",
    url: "https://www.youtube.com/channel/",
    icon: <FaYoutube />,
  },
  {
    id: "niconicoID",
    url: "https://www.nicovideo.jp/user/",
    icon: <SiNiconico />,
  },
  {
    id: "bilibiliID",
    url: "https://space.bilibili.com/",
    icon: <SiBilibili />,
  },
  { id: "twitterID", url: "https://twitter.com/", icon: <FaTwitter /> },
  {
    id: "instagramID",
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  { id: "tiktokID", url: "https://www.tiktok.com/@", icon: <FaTiktok /> },
];

function ShowSNSIcon(member: Member) {
  return (
    <div className="flex flex-row">
      {SNSList
      .filter((sns)=>{
        return member[sns.id];
      })
      .map((sns) => (
        <Link className ="m-2" href={sns.url + member[sns.id]} key = {sns.id} target="_blank" rel="noreferrer">
          {sns.icon}
        </Link>
      ))}
    </div>
  );
}



export default function MemberList() {
  const [contents, setContents] = useState<Member[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const { contents } = await getList<Member>("member");
      setContents(contents);
    };
    fetchData();
  }, []);

  if (!contents) {
    return <LoadingWindow/>
  }
  
  return (
    <>
    <div>
      {
      contents.map((member) => {
        return (
          <div key={member.name} className="ContentSubItem">
            <h3 key={`${member.name}h3`}> {member.name} </h3>
            <div className="IconImage">
              {member.iconImage ? (
                <img
                  alt=""
                  src={member.iconImage.url}
                  style={{
                    width: "15vw",
                    height: "auto",
                  }}
                />
              ) : (
                ""
              )}
            </div>
            <a className="AbstractArea">{member.comment}</a>
            {ShowSNSIcon(member)}
          </div>
        )
      })}
    </div>
    </>
  );
}

