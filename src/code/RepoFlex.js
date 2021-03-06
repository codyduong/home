import React from 'react';
import LangBar from './RepoLangBar.js'

const RepoFlex = (props) => {
  const flexContainerStyle = {
    display: "flex",
    flexWrap: "wrap", 
    flexDirection: "row"
  }

  const repoInner = {
    width: "100%",
    height: "100%",
    borderRadius: "25px",
    border: "2px solid #777777",
    padding: "10px"
  }

  const repositoryFlex = props.repoData.map((row, index) => {
    const order = require('./Config.json').Whitelist[row.name] ?? null
    const display = require('./Config.json').Whitelist[row.name] ? "flex" : null

    const repoOuter = {
      width: "calc(100% - 3.25%)",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px 0px 5px 0px",
      order: order
    }
    return display ? (
      <div style={repoOuter} key={index}>
        <div style={repoInner}>
          <h1><a href={row.html_url} title="Github Repository">{row.name}</a></h1>
          {row.description}
          <br></br>
          <br></br>
          <div style={{width: '100%', marginLeft:"auto", marginRight:"auto"}}>
            <LangBar 
              languages = {row.languages ?? null} //Only used when RepoFetch fails, and defaults to FallbackRepos (in config) or Repos.js
              languages_url={row.languages_url} 
            />
          </div>
        </div>
      </div>
    ) : null
  })

  return <div id="repoFlex" style={flexContainerStyle}>{repositoryFlex}</div>
}

export default RepoFlex;