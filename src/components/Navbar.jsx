import React from "react";
import { Box, Divider, Typography } from "@mui/material";

import goi from "../assets/goi.svg";
import icargoi from "../assets/icar.svg";
import vistaar_new_logo from "../assets/vistaar_new_logo.svg";
import power_dg from "../assets/power_dg.svg";

const Navbar = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "90px",
          padding: "0px 25px 0px 25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "73%",
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
            <img src={power_dg} alt="powered by dg" width={"100%"} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#00AB55",
          height: "50px",
          textAlign: "left",
          paddingLeft: "24px",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Roboto !important",
            fontSize: "16px",
            fontWeight: 500,
            cursor: "pointer",
            padding: "12px",
          }}
        >
          Home
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
