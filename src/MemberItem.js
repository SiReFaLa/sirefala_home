import React from "react";
import data from "./basicData.json"

function MemberItem(){
    return (data.members.map(it =>
        <div className="ContentSubItem">
          <a href={() => false} >・ {it.name} </a> 
          
          <a href = {'https://twitter.com/'+it.twitterID} >
            {
              it.twitterID ? '@'+it.twitterID : ''
            }
          </a>
          
        </div>
      )
    )
}

export default MemberItem