"use client";
import {
  Alert,
  Box,
  Button,
  CardActions,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CircleIcon from "@mui/icons-material/Circle";
import {
  AlignJustify,
  X,
  CircleUserRound,
  ShoppingCart,
  CheckIcon,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { myShoping } from "@/Redux/shopSlice";
import { AlertStatus } from "./Alerts/Alerts";

function Tshirt({ kind, src, alt, id, href, name, color, price, description }) {
  const [alert, setalert] = useState(false);
  const tooltip = (
    <Stack container gap={0.5} direction="row">
      <CircleIcon sx={{ color: "black" }} />
      <CircleIcon sx={{ color: "white" }} />
      <CircleIcon sx={{ color: "red" }} />
      <CircleIcon sx={{ color: "silver" }} />
    </Stack>
  );

  return (
    <div className="w-full  flex flex-col justify-center items-center  ">
      <Card
        key={id}
        sx={{
          borderRadius: "10px",
          maxHeight: "900px",
          maxWidth: "300px",
          ml: "2vw",
          mt: "30px",
        }}
      >
        <Link href={`${kind}/${id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{
                paddingTop: "10px",
                maxHeight: "300px",
                minHeight: "220px",
                objectFit: "fill",
              }}
              image={src}
              alt={alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  height: "50px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions
          sx={{ position: "relative", display: "flex", padding: "7px" }}
        >
          <Box>
            <Typography variant="h5" color="text.secondary">
              {price}
            </Typography>
          </Box>
          <Tooltip
            title={tooltip}
            placement="top-start"
            sx={{ position: "absolute", left: "0px" }}
          >
            <IconButton>
              <ColorLensIcon color="primary" />
            </IconButton>
          </Tooltip>
          <IconButton
            id="b1"
            onClick={() => {
              setalert(true);
              const basket =
                (localStorage?.getItem("item") != null) | undefined
                  ? JSON.parse(localStorage?.getItem("item"))
                  : [];

              if (basket.length != 0) {
                let item = basket.filter((e) => {
                  return e.id == id;
                });
                if (item != 0) {
                  let index = basket.findIndex((i) => i.id == id);
                  item[0].count = item[0].count + 1;
                  basket[index] = item[0];
                } else {
                  basket.push({ id: id, count: 1 });
                }
              } else {
                basket.push({ id: id, count: 1 });
              }
              localStorage.setItem("item", JSON.stringify(basket));
            }}
            sx={{ position: "absolute", left: "40px" }}
          >
            <ShoppingCart />
            {alert && <AlertStatus Status={"Success"} Text="تم اضافة المنتج بنجاح" />}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Tshirt;
{
  /* <div>
<div key={key} className="group relative">
  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-50 lg:aspect-none group-hover:opacity-75 lg:h-80">
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-fit  object-center"
    />
  </div>
  <div className="mt-4 flex justify-between">
    <div>
      <h3 className="text-sm text-whit">
        <a href={href}>
          <span aria-hidden="true" className="absolute inset-0" />
          {name}
        </a>
      </h3>
      <p className="mt-1 text-sm text-gray-200">{color}</p>
    </div>
    <p className="text-sm font-medium text-gray-100">{price}</p>
  </div>
</div>
</div> */
}
