import React from "react";
import data from "./basicData.json"

function MemberItem(){
  

    return (data.members.map(it =>
        <p>
          <a href={() => false} >・ {it.name} </a> 

          
          <a href = {'https://twitter.com/'+it.twitterID} >
            {
              it.twitterID ? '@'+it.twitterID : ''
            }
          </a>
          
          
        </p>
      )
    )
}

export default MemberItem