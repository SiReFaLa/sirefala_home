import React, { ReactNode } from "react";
import data, { Member } from "../constants/PersonalData";
import { FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiNiconico, SiBilibili } from "react-icons/si";

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
        <a className ="m-2" href={sns.url + member[sns.id]} key = {sns.id} target="_blank" rel="noreferrer">
          {sns.icon}
        </a>
      ))}
    </div>
  );
}

function MemberList() {
  return (
    <div>
      {data.members.map((it) => (
        <div key={it.name} className="ContentSubItem">
          <h3 key={`${it.name}h3`}> {it.name} </h3>
          <div className="IconImage">
            {it.imgLink ? (
              <img
                alt=""
                src={it.imgLink}
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            ) : (
              ""
            )}
          </div>
          {it.comment}
          {ShowSNSIcon(it)}
        </div>
      ))}
    </div>
  );
}

export default MemberList;
