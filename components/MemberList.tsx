import React, { ReactNode } from "react";
import { GetServerSideProps } from "next";
import { MicroCMSDate, MicroCMSContentId } from "microcms-js-sdk";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiNiconico, SiBilibili } from "react-icons/si";
import { Member, getMemberList } from "../libs/microcms";
import { error } from "console";

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

type Props = {
  contents:Member[],
};

let contents : Member[] | undefined;

export default function MemberList(){//{contents}:Props) {
  if(!contents){
    throw getMemberList().then((res)=>{
      contents = res.contents;
    })
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
                    width: "200px",
                    height: "auto",
                  }}
                />
              ) : (
                ""
              )}
            </div>
            {member.comment}
            {ShowSNSIcon(member)}
          </div>
        )
      })}
    </div>
    </>
  );
}

