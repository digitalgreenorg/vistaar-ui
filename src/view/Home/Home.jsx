import React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocalStyle from "./Home.module.css";
import GlobalStyles from "../../Global.module.css";
import { Col, Row } from "react-bootstrap";
import modi from "../../assets/modi.png";
import qrcode from "../../assets/qrcode.png";
import insight1 from "../../assets/insight1.svg";
import insight2 from "../../assets/insight2.svg";
import insight3 from "../../assets/insight3.svg";
import insight4 from "../../assets/insight4.svg";
import micro1 from "../../assets/micro1.jpeg";
import micro2 from "../../assets/micro2.jpeg";
import micro3 from "../../assets/micro3.jpeg";
import microsite_point1 from "../../assets/microsite_point1.svg";
import microsite_point2 from "../../assets/microsite_point2.svg";
import microsite_point3 from "../../assets/microsite_point3.svg";
import microsite_point4 from "../../assets/microsite_point4.svg";
import bihar from "../../assets/bihar.jpeg";
import gaya from "../../assets/gaya.png";

import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ParticipantCard from "../../components/ParticipantCard/ParticipantCard";

let resources = "contents";
let resource = "content";
let Resources = "Contents";
let Resource = "Content";

const Home = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const miniLaptop = useMediaQuery(theme.breakpoints.down("lg"));
  const laptop = useMediaQuery(theme.breakpoints.down("xl"));
  const desktop = useMediaQuery(theme.breakpoints.up("xl"));
  const largeDesktop = useMediaQuery(theme.breakpoints.up("xxl"));

  const responsive_top_row = {
    padding: mobile || tablet ? "0px 10px" : "40px 40px 0px 40px",
  };
  console.log(
    miniLaptop,
    laptop,
    desktop,
    theme.breakpoints.down("lg"),
    theme.breakpoints.up("xl")
  );
  return (
    <Box>
      <Box
        sx={{ width: "100%" }}
        className={
          (mobile
            ? LocalStyle.container_mobile
            : tablet
            ? LocalStyle.container_tablet
            : desktop
            ? LocalStyle.container_desktop
            : LocalStyle.container_large) + " mainBoxForGuestHome"
        }
      >
        <Row
          className={
            mobile && tablet
              ? LocalStyle.top_row_in_home_mobile
              : LocalStyle.top_row_in_home
          }
          style={responsive_top_row}
        >
          <Col xs={12} sm={12} md={4} xl={4}>
            <img src={modi} style={{ width: "100%", height: "100%" }} />
          </Col>
          <Col xs={12} sm={12} md={8} xl={8}>
            <Box
              className={`d-flex ${mobile || tablet ? "flex-column" : ""}`}
              sx={{ marginTop: "70px" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "32px",
                    fontWeight: "700",
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "left",
                    color: "#3D4A52",
                  }}
                >
                  Virtually Integrated Systems to Access Agricultural Resources
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "22px",
                    fontWeight: "400",
                    lineHeight: "27px",
                    letterSpacing: "0px",
                    textAlign: "left",
                    color: "#3D4A52",
                    marginTop: "14px",
                  }}
                >
                  Where Technology and Agriculture intertwine, creating a
                  network of Departments, Farmers, and FLEWs.
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: mobile ? "5px" : "-21px",
                  textAlign: mobile ? "center" : "",
                }}
              >
                <img src={qrcode} style={{ height: "220px" }} />
              </Box>
            </Box>
            <Box
              className={
                mobile
                  ? LocalStyle.buttonContainer_mobile
                  : tablet
                  ? LocalStyle.buttonContainer_tablet
                  : LocalStyle.cover_btn_container
              }
              sx={{
                display: "flex",
                justifyContent: mobile ? "center" : "end",
                marginRight: mobile ? "0px" : "23px",
              }}
            >
              <Button
                id="home-get-started-btn"
                data-testid={"home-get-started-btn-test"}
                className={`${
                  mobile || tablet
                    ? LocalStyle.primaryButton_mobile
                    : LocalStyle.primaryButton
                } ${LocalStyle.scan_button}`}
                sx={{ color: "#000000 !important" }}
                disabled
              >
                Scan for bot
              </Button>
            </Box>
          </Col>
        </Row>
        <Box
          sx={{
            margin:
              mobile || tablet || miniLaptop
                ? "20px 20px 0px 10px"
                : "-45px 40px 0px 40px",
            position: mobile || tablet || miniLaptop ? "" : "absolute",
            // top: "63vh",
            left: 0,
            zIndex: 10,
          }}
        >
          <Row
            style={{
              gap: mobile ? "0px" : "0px",
              rowGap: mobile || tablet || miniLaptop ? "20px" : "0px",
              justifyContent: "center",
            }}
          >
            <Col xs={12} sm={12} md={5} xl={3}>
              <Card className={`${LocalStyle.insight_card}`}>
                <Box className={`${LocalStyle.insight_card_child}`}>
                  <Box>
                    <img src={insight1} />
                  </Box>
                  <Typography className={`${LocalStyle.insight_card_text}`}>
                    Increase efficiency of your Frontline workers
                  </Typography>
                </Box>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={5} xl={3}>
              <Card className={`${LocalStyle.insight_card}`}>
                <Box className={`${LocalStyle.insight_card_child}`}>
                  <Box>
                    <img src={insight2} />
                  </Box>
                  <Typography className={`${LocalStyle.insight_card_text}`}>
                    Host and manage content in one place
                  </Typography>
                </Box>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={5} xl={3}>
              <Card className={`${LocalStyle.insight_card}`}>
                <Box className={`${LocalStyle.insight_card_child}`}>
                  <Box>
                    <img src={insight3} />
                  </Box>
                  <Typography className={`${LocalStyle.insight_card_text}`}>
                    Create tasks and trainings for your Frontline workers in one
                    place
                  </Typography>
                </Box>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={5} xl={3}>
              <Card className={`${LocalStyle.insight_card}`}>
                <Box className={`${LocalStyle.insight_card_child}`}>
                  <Box>
                    <img src={insight4} />
                  </Box>
                  <Typography className={`${LocalStyle.insight_card_text}`}>
                    Incentivise your Frontline worker by measuring impact
                    created
                  </Typography>
                </Box>
              </Card>
            </Col>
          </Row>
        </Box>
      </Box>
      {/* resource */}
      <Box
        sx={{
          margin:
            mobile || tablet
              ? "10px 25px"
              : miniLaptop
              ? "60px 144px"
              : laptop
              ? "160px 144px 60px 144px"
              : "160px 144px 60px 144px",
          textAlign: mobile || tablet ? "" : "left",
        }}
      >
        <Typography
          className={`${LocalStyle.title} ${GlobalStyles.bold600} ${GlobalStyles.size32} ${GlobalStyles.highlighted_text} text-left`}
        >
          {Resources}
        </Typography>
        <Typography
          className={`${LocalStyle.textDescription} text-left ${GlobalStyles.bold400} ${GlobalStyles.size22} ${GlobalStyles.highlighted_text}`}
        >
          {Resource} discovery is the key to unlocking awareness and growth by
          identifying unknowns and efficiently delivering valuable information
          about best practices, pests and disease managements, schemes etc
          benefiting farmers.
        </Typography>
        <Box
          className={
            mobile
              ? LocalStyle.resource_main_box_mobile
              : tablet
              ? LocalStyle.resource_main_box_tablet
              : miniLaptop
              ? LocalStyle.resource_main_box_tablet
              : LocalStyle.resource_main_box
          }
        >
          {[0, 1, 2, 3, 4].map(() => {
            return <ResourceCard />;
          })}
        </Box>
        <Row
          style={{
            margin: "50px auto",
            paddingBottom: "10px",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "16px",
              width: "368px",
              background: "#00A94F",
              borderRadius: "8px",
              textTransform: "none",
              padding: "15px 30px",
              "&:hover": {
                backgroundColor: "#00A94F",
                color: "#fffff",
              },
            }}
            variant="contained"
          >
            View all Content
          </Button>
        </Row>
      </Box>
      <Box
        className={
          mobile
            ? LocalStyle.center_banner_mobile
            : tablet
            ? LocalStyle.center_banner_tablet
            : desktop
            ? LocalStyle.center_banner_desktop
            : LocalStyle.center_banner
        }
      >
        <Box>
          <img
            src={micro1}
            width={mobile ? "152px" : "none"}
            height={"250px"}
            loading="lazy"
          />
        </Box>
        <Box>
          <Typography
            className={`${LocalStyle.title} ${GlobalStyles.bold500} ${
              mobile
                ? GlobalStyles.size12
                : tablet || miniLaptop
                ? GlobalStyles.size16
                : largeDesktop
                ? GlobalStyles.size28
                : GlobalStyles.size28
            } ${GlobalStyles.highlighted_text_in_home} ${
              mobile
                ? ""
                : tablet
                ? LocalStyle.lineheight_27
                : LocalStyle.lineheight_39
            } ${mobile ? LocalStyle.mt45 : ""}`}
            sx={{
              width:
                mobile || miniLaptop || desktop || largeDesktop
                  ? "auto !important"
                  : "350px !important",
              marginRight: mobile || tablet || miniLaptop ? "" : "28px",
            }}
          >
            With Content distribution great things will happen
            <br />
            <Button
              style={{
                unset: "all",
              }}
              className={LocalStyle.contact_us_button_home}
              onClick={() => history.push("/home/contact")}
            >
              Contact us
            </Button>
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{ width: "90%" }}
            className={`${
              mobile
                ? LocalStyle.descriptionSm
                : tablet || miniLaptop
                ? LocalStyle.descriptionMd
                : desktop
                ? LocalStyle.descriptionlg
                : largeDesktop
                ? LocalStyle.descriptionXlg
                : LocalStyle.description
            } ${GlobalStyles.bold400} ${
              tablet || miniLaptop ? GlobalStyles.size12 : GlobalStyles.size22
            } ${GlobalStyles.highlighted_text_in_home}`}
          >
            <b style={{ fontWeight: "bold" }}></b>
            We enable seamless content upload of all formats, and builds unified
            approach. The platforms integrate all data or content across all
            states and departments and effectively delivers to front line
            workers in a conversational format enhancing its usability and
            value.
            <b style={{ fontWeight: "bold" }}></b>
          </Typography>
        </Box>
      </Box>
      {/* rest */}
      <Box className="">
        {/* mainBoxForGuestHome */}
        <div
          style={{
            marginTop: "50px",
            padding: mobile || tablet ? "0px 25px" : "0px 144px",
          }}
        >
          <div className={LocalStyle.participanttitleContainer}>
            <Typography
              style={{ textAlign: "left" }}
              className={`${LocalStyle.title} ${GlobalStyles.bold600} ${GlobalStyles.size32} ${GlobalStyles.highlighted_text}`}
            >
              States (or) Organisations
            </Typography>
            <Typography
              className={`${LocalStyle.textDescription} text-left ${GlobalStyles.bold400} ${GlobalStyles.size22} ${GlobalStyles.highlighted_text}`}
            >
              <b style={{ fontWeight: "bold" }}></b>
              Organisations who facilitate their own partners with content for
              efficient content distribution.
              <b style={{ fontWeight: "bold" }}></b>
            </Typography>
          </div>
          <Box
            className={
              mobile
                ? LocalStyle.resource_main_box_mobile
                : tablet
                ? LocalStyle.resource_main_box_tablet
                : miniLaptop
                ? LocalStyle.resource_main_box_tablet
                : LocalStyle.resource_main_box
            }
          >
            {[0, 1, 2].map((index) => {
              return (
                <ParticipantCard
                  isCosteward={true}
                  image={bihar}
                  title={"Bihar"}
                  subTitle1="Content"
                  subTitle2={"No.of partners"}
                  subTitle1Value={
                    <span>{"Videos " + 1 + ", " + "Pdfs " + 1}</span>
                  }
                  subTitle2Value={3}
                  index={index}
                />
              );
            })}
          </Box>
          <Box sx={{ marginTop: "50px" }}>
            <Row
              style={{
                paddingBottom: "10px",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  fontFamily: "Arial",
                  fontWeight: 700,
                  fontSize: "16px",
                  width: "368px",
                  background: "#00A94F",
                  borderRadius: "8px",
                  textTransform: "none",
                  padding: "15px 30px",
                  "&:hover": {
                    backgroundColor: "#00A94F",
                    color: "#fffff",
                  },
                }}
                variant="contained"
              >
                View all States (or) Organisations
              </Button>
            </Row>
          </Box>
        </div>

        <div
          style={{
            padding: mobile || tablet ? "0px 25px" : "0px 144px",
            marginTop: "25px",
          }}
          className={LocalStyle.participanttitleContainer}
        >
          <Typography
            style={{ textAlign: "left" }}
            className={`${LocalStyle.title} ${GlobalStyles.bold600} ${GlobalStyles.size32} ${GlobalStyles.highlighted_text}`}
          >
            Partners
          </Typography>
          <Typography
            className={`${LocalStyle.textDescription} text-left ${GlobalStyles.bold400} ${GlobalStyles.size22} ${GlobalStyles.highlighted_text}`}
          >
            <b style={{ fontWeight: "bold" }}></b>
            Organisations that has the public or private content and can uplod
            into system seamlessly.
            <b style={{ fontWeight: "bold" }}></b>
          </Typography>
        </div>
        <div style={{ padding: mobile || tablet ? "0px 25px" : "0px 144px" }}>
          <Box
            className={
              mobile
                ? LocalStyle.resource_main_box_mobile
                : tablet
                ? LocalStyle.resource_main_box_tablet
                : miniLaptop
                ? LocalStyle.resource_main_box_tablet
                : LocalStyle.resource_main_box
            }
          >
            {[0, 1, 2].map((index) => {
              return (
                <ParticipantCard
                  image={gaya}
                  title={"KVK Gaya"}
                  subTitle1="Content"
                  subTitle2={"Root user"}
                  subTitle1Value={
                    <span>{"Videos " + 1 + ", " + "Pdfs " + 1}</span>
                  }
                  subTitle2Value={"Charlie Put"}
                  index={index}
                />
              );
            })}
          </Box>
        </div>
        <Box sx={{ marginTop: "50px" }}>
          <Row
            style={{
              paddingBottom: "10px",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                fontFamily: "Arial",
                fontWeight: 700,
                fontSize: "16px",
                width: "368px",
                background: "#00A94F",
                borderRadius: "8px",
                textTransform: "none",
                padding: "15px 30px",
                "&:hover": {
                  backgroundColor: "#00A94F",
                  color: "#fffff",
                },
              }}
              variant="contained"
            >
              View all Partners
            </Button>
          </Row>
        </Box>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: mobile || tablet ? "10px 25px" : "0px 144px",
          }}
        >
          <Col xs={12} sm={12} md={12} xl={6} xxl={6}>
            <div className={`${LocalStyle.titleContainer}`}>
              <Typography
                className={`${LocalStyle.lastTitle} line-height-0 text-left ${GlobalStyles.bold600} ${GlobalStyles.size28} ${GlobalStyles.highlighted_text}`}
                sx={{ textAlign: "left" }}
              >
                Driving Insights, Thriving Community
              </Typography>
              <Typography
                className={`${LocalStyle.textDescription} ${GlobalStyles.bold400} ${GlobalStyles.size22} ${GlobalStyles.highlighted_text}`}
              >
                <b style={{ fontWeight: "bold" }}></b>
                Foster data-driven decisions by unifying all departments and
                organisations to seamlessly share their content repository and
                unlock their true potential by delivering value.
                <b style={{ fontWeight: "bold" }}></b>
              </Typography>
            </div>
            <Row>
              <Col
                className={`${
                  mobile
                    ? LocalStyle.pointContainer_mobile
                    : LocalStyle.pointContainer
                }`}
                style={{ marginLeft: tablet ? "15px" : "0px" }}
                xl={6}
              >
                <span className={LocalStyle.greenBox}>
                  <img src={microsite_point1} />
                </span>
                <span className="text-left">Strengthen Collaboration </span>
              </Col>
              <Col
                className={`${
                  mobile
                    ? LocalStyle.pointContainer_mobile
                    : LocalStyle.pointContainer
                }`}
                style={{ marginLeft: tablet ? "15px" : "0px" }}
                xl={6}
              >
                <span className={LocalStyle.greenBox}>
                  <img src={microsite_point2} />
                </span>
                <span className="text-left">Unleash the Power of Content</span>
              </Col>
            </Row>
            <Row>
              <Col
                className={`${
                  mobile
                    ? LocalStyle.pointContainer_mobile
                    : LocalStyle.pointContainer
                }`}
                style={{ marginLeft: tablet ? "15px" : "0px" }}
                xl={6}
              >
                <span className={LocalStyle.greenBox}>
                  <img src={microsite_point3} />
                </span>
                <span className="text-left">
                  Enable data-driven decision making
                </span>
              </Col>
              <Col
                className={`${
                  mobile
                    ? LocalStyle.pointContainer_mobile
                    : LocalStyle.pointContainer
                }`}
                style={{ marginLeft: tablet ? "15px" : "0px" }}
                xl={6}
              >
                <span className={LocalStyle.greenBox}>
                  <img src={microsite_point4} />
                </span>
                <span className="text-left">Scale-up your impact </span>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} xl={6} xxl={6}>
            <img
              className={
                mobile
                  ? LocalStyle.micrositeLogo_mobile
                  : LocalStyle.micrositeLogo
              }
              src={micro2}
              loading="lazy"

              // style={{style}}
            />
          </Col>
        </Row>
        <Row className="mt-30">
          <Col style={{ margin: "25px auto" }}>
            <Typography
              className={`${LocalStyle.title} ${LocalStyle.centeredAlignTitle} ${GlobalStyles.bold500} ${GlobalStyles.size32} ${GlobalStyles.highlighted_text} d-block`}
            >
              <b style={{ fontWeight: "bold" }}></b>
              Maximise impact by exploring the ultimate platform for data-driven
              solutions!
              <b style={{ fontWeight: "bold" }}></b>
            </Typography>
          </Col>
        </Row>
        <Row
          style={{
            margin: "50px auto",
            paddingBottom: "10px",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "16px",
              width: "368px",
              background: "#00A94F",
              borderRadius: "8px",
              textTransform: "none",
              padding: "15px 30px",
              "&:hover": {
                backgroundColor: "#00A94F",
                color: "#fffff",
              },
            }}
            variant="contained"
          >
            Get Started
          </Button>
        </Row>
      </Box>
      <Box>
        <div
          className={
            mobile || tablet
              ? LocalStyle.image_container_mobile
              : LocalStyle.image_container
          }
        >
          <img
            className={
              largeDesktop ? LocalStyle.image_for_big : LocalStyle.image
            }
            src={micro3}
            width={"100%"}
            loading="lazy"
          />
        </div>
      </Box>
    </Box>
  );
};

export default Home;
