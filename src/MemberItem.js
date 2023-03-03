import React from "react";
import data from "./basicData.json"
import {
  FaTwitter,
  FaYoutube,
} from "react-icons/fa" 

function MemberItem(){
    return (data.members.map(it =>
        <div className="ContentSubItem">
          <h3 href={() => false} > {it.name} </h3> 
          <div className="ContentSubSubItem">
            <a href = {'https://www.youtube.com/channel/'+it.youtubeID} target="_blank" rel="noreferrer">
              {
                it.youtubeID ? <FaYoutube /> : ''
              }
            </a>
            
            <a href = {'https://twitter.com/'+it.twitterID} target="_blank" rel="noreferrer">
              {
                it.twitterID ? <FaTwitter  /> : ''
              }
            </a>
          </div>
        </div>
      )
    )
}

export default MemberItem