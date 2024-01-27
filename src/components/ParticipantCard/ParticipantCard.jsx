import React from "react";
import { Box, Card, useMediaQuery, useTheme } from "@mui/material";
import LocalStyle from "./ParticipantCard.module.css";

const ParticipantCard = (props) => {
  const {
    image,
    title,
    subTitle1,
    subTitle2,
    subTitle1Value,
    subTitle2Value,
    index,
  } = props;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Card
        id={`${title ? title : "title"}-card-${index ? index : ""}`}
        className={LocalStyle.card}
      >
        <div className={LocalStyle.img_container}>
          <img
            className={mobile ? LocalStyle.imgSm : LocalStyle.img}
            id={`${title ? title : "title"}-card-img-${index ? index : ""}`}
            src={image}
            alt="new"
          />
        </div>
        <div
          id={`${title ? title : "title"}-card-title-${index ? index : ""}`}
          className={
            mobile || tablet
              ? LocalStyle.content_title_sm
              : LocalStyle.content_title
          }
        >
          {title ? title : ""}
        </div>
        <div className={LocalStyle.displayFlex}>
          <div className={LocalStyle.content_text}>
            <div
              id={`${title ? title : "subtitle1"}-card-subtitle1-${
                index ? index : ""
              }`}
              className={
                mobile ? LocalStyle.content_text1_sm : LocalStyle.content_text1
              }
            >
              {subTitle1 ? subTitle1 : ""}
            </div>
            <div
              id={`${title ? title : "subtitle2"}-card-subtitle2-${
                index ? index : ""
              }`}
              className={
                mobile ? LocalStyle.content_text2_sm : LocalStyle.content_text2
              }
            >
              {subTitle1Value ? subTitle1Value : 0}
            </div>
          </div>
          <div className={LocalStyle.content_text}>
            <div
              id={`${title ? title : "subtitle3"}-card-subtitle3-${
                index ? index : ""
              }`}
              className={
                mobile ? LocalStyle.content_text1_sm : LocalStyle.content_text1
              }
            >
              {subTitle2 ? subTitle2 : ""}
            </div>
            <div
              id={`${title ? title : "subtitle4"}-card-subtitle4-${
                index ? index : ""
              }`}
              className={
                mobile ? LocalStyle.content_text2_sm : LocalStyle.content_text2
              }
            >
              {subTitle2Value || subTitle2Value == 0 ? subTitle2Value : ""}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ParticipantCard;
