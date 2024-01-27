import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./footer.module.css";
import goi from "../../assets/goi.svg";
import icargoi from "../../assets/icar.svg";
import vistaar_new_logo from "../../assets/vistaar_new_logo.svg";
import power_dg from "../../assets/power_dg.svg";

const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const miniLaptop = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        background: "#F6F7F8",
        display: mobile ? "block" : "flex",
        justifyContent: "center",
        marginTop: "0px",
      }}
    >
      <Box
        sx={{
          padding: mobile || tablet ? "36px 60px" : "36px 130px",
          maxWidth: "1440px",
        }}
      >
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box className="mr10">
                <img src={goi} alt="govt of India" width={"100%"} />
              </Box>
              <Box className="mr10">
                <Divider
                  sx={{
                    background: "#E1D0D0",
                    height: "100%",
                  }}
                  flexItem
                  orientation="vertical"
                />
              </Box>
              <Box className="mr10">
                <img src={icargoi} alt="icar" width={"100%"} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "24px",
                marginLeft: mobile ? "-8px" : "-42px",
                width: "80%",
                justifyContent: "space-around",
              }}
            >
              <Box className="mr10">
                <img src={vistaar_new_logo} alt="HeaderLogo" width={"100%"} />
              </Box>
              <Box className="mr10">
                <Divider
                  sx={{
                    background: "#E1D0D0",
                    height: "100%",
                  }}
                  flexItem
                  orientation="vertical"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <img src={power_dg} alt="powered by dg" width={"100%"} />{" "}
              </Box>
            </Box>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            style={{
              marginTop: mobile || tablet ? "24px" : "",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginLeft: "-8px",
                flexFlow: mobile || miniLaptop ? "wrap" : "",
                gap: mobile || miniLaptop ? "5px 12px" : "",
              }}
            >
              <Typography className={style.new_navItem}>Home</Typography>
              <Typography className={style.new_navItem}>
                FLEW Registry
              </Typography>

              <Typography className={style.new_navItem}>Content</Typography>
              <Typography className={style.new_navItem}>Dashboard</Typography>
            </Box>
            <Box
              sx={{
                color: "#424242",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22px",
                textAlign: "left",
                marginTop: "24px",
              }}
            >
              Developed by Digital Green along with the Ministry of Agriculture
              and ICAR, the Telegram bot 'Vistaar' provides real-time
              agricultural advisories to Extension Agents, aiming to boost farm
              productivity and innovation.
            </Box>
            <Box className={`${style.title3}`}>
              Contact:{" "}
              <span className={style.title3_link}>
                support@digitalgreen.org
              </span>
            </Box>
          </Col>
        </Row>
      </Box>
    </Box>
  );
};

export default Footer;
