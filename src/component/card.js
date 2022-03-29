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

export default function NewsCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", padding: "10px", boxShadow: "0 0 5px" }}>
      <CardMedia
        component="img"
        sx={{ height: 300, width: 300, borderRadius: "5px" }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaq8qB42XH1AE15dsLHrT72lhCycYlF73UQ&usqp=CAU"
        alt="Live from space album cover"
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
            My mother lied for 26-27 years of my life about naming me after
            SRK's character: Rahul
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <b>short</b> by Anmol Sharma / 02:54 pm on 29 Mar 2022,Tuesday
          </Typography>
          <Typography variant="h6" color="GrayText">
            India batter KL Rahul, in a recent interview, said he realised that
            his mother lied to him for 26-27 years of his life about naming him
            after Shah Rukh Khan's character 'Rahul' as she was the actor's fan.
            He added his friend told him that Shah Rukh's first character as
            Rahul was in 1993-1994, while he was born in 1992.
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <b>read more at Times Now</b>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
