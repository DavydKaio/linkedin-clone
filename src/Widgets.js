import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div class="widgets__article">
      <div class="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div class="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div class="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA react is back", "Top News - 9099 readers")}
      {newsArticle("Coronavirus: UK updates", "Top News - 886 readers")}
      {newsArticle("Tesla hits new heights", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin Break $22k", "Crypto - 8000 readers")}
      {newsArticle("Is redux too good?", "Code - 123 readers")}
      {newsArticle("PAPA react launches course?!", "Top News - 6503 readers")}
    </div>
  );
}

export default Widgets;
