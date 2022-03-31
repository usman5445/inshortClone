import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function NewsCard(props) {
  const theme = useTheme();

  return (
    <Card
      className="card"
      sx={{
        display: "flex",
        padding: "10px",
        boxShadow: "0 0 5px",
        margin: "20px",
        width: "60%",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 300, width: 300, borderRadius: "5px" }}
        image={props.imgurl}
        alt="News image"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <b>short</b> by {props.author} / {props.publishedAt}
          </Typography>
          <Typography variant="h6" color="GrayText">
            {props.disc}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <b>
              read more at{" "}
              <a href={props.readmurl} target="_blank">
                {props.source}
              </a>
            </b>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
