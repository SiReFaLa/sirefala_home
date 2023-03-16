import React from "react";
import data from "./basicData.json"
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok
} from "react-icons/fa" 
import {SiNiconico} from "react-icons/si"

const SNSList = [
  {ID:"youtubeID",URL:"https://www.youtube.com/channel/",ICON:<FaYoutube />},
  {ID:"niconicoID",URL:"https://www.nicovideo.jp/user/",ICON:<SiNiconico />},
  {ID:"twitterID",URL:"https://twitter.com/",ICON:<FaTwitter />},
  {ID:"instagramID",URL:"https://www.instagram.com/",ICON:<FaInstagram />},
  {ID:"tiktokID",URL:"https://www.tiktok.com/@",ICON:<FaTiktok />},
];

function ShowSNSIcon(m){
  const r = [];
  SNSList.forEach(snsit=>{  
    if(m[snsit.ID]){
      r.push(
        <a href = {snsit.URL+m[snsit.ID]} target="_blank" rel="noreferrer">
        {snsit.ICON}
        </a>
      )
    }
  })
  return r;
}

function MemberItem(){
    return (data.members.map(it =>
      
        <div key = {it.name} className="ContentSubItem">
          <h3 key = {it.name+"h3"} > {it.name} </h3> 
          <div className="ContentSubSubItem">
            {ShowSNSIcon(it)}
          </div>
          {it.comment}
          {it.imgLink ? <img src={it.imgLink} width="100" height="100"/> : ""}
        </div>
      )
    )
}

export default MemberItem

/*   <a href = {'https://www.youtube.com/channel/'+it.youtubeID} target="_blank" rel="noreferrer">
                {
                  it.youtubeID ? <FaYoutube /> : ''
                }
              </a>
              
              <a href = {'https://twitter.com/'+it.twitterID} target="_blank" rel="noreferrer">
                {
                  it.twitterID ? <FaTwitter  /> : ''
                }
              </a> */
