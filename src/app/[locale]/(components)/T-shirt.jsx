"use client"
import { Alert, Box, Button, CardActions, IconButton, Paper, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CircleIcon from "@mui/icons-material/Circle";
import { AlignJustify, X, CircleUserRound, ShoppingCart, CheckIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { myShoping } from "@/Redux/shopSlice";

// tooltip <تلميحات الالوان> ☟☟☟☟☟☟☟☟☟☟
// const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));



// jsx☟☟☟☟☟☟☟☟☟☟
function Tshirt({ kind, src, alt, id, href, name, color, price, description }) {
  // tooltip <تلميحات الالوان> ☟☟☟☟☟☟☟☟☟☟
  const tooltip = (
    <Stack container gap={0.5} direction="row">
      <CircleIcon sx={{ color: "black" }} />
      <CircleIcon sx={{ color: "white" }} />
      <CircleIcon sx={{ color: "red" }} />
      <CircleIcon sx={{ color: "silver" }} />
    </Stack>
  );
  //


  const dispatch = useDispatch();
  // const myShoping = useSelector((state) => state.shopSlice);
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
        }}>
        <Link href={`${kind}/${id}`}>
          <CardActionArea>
            <CardMedia

              component="img"
              sx={{
                paddingTop: "10px", maxHeight: "300px", minHeight: "220px", objectFit: "fill"
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
                }}>
                {description}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions sx={{ position: "relative", display: "flex", padding: "7px" }}>
          <Box>
            <Typography variant="h5" color="text.secondary">
              {price}
            </Typography>
          </Box>
          <Tooltip title={tooltip} placement="top-start" sx={{ position: "absolute", left: "0px" }} >
            <IconButton>
              <ColorLensIcon color="primary" />
            </IconButton>
          </Tooltip>
          <IconButton id="b1" onClick={() => {
            // console.log(
            //   localStorage.setItem("id", [...new Set((id, localStorage?.getItem("id").split(",")))]),
            // );
            // localStorage.setItem("id", [id, localStorage?.getItem("id")])
            // console.log(Array(localStorage?.getItem("id")?.split(",")));

            const basket = localStorage?.getItem("item") != null | undefined ?
              JSON.parse(localStorage?.getItem("item")) : []

            if (basket.length != 0) {
              let item = basket.filter((e) => {
                return e.id == id
              });
              if (item != 0) {
                let index = basket.findIndex(i => i.id == id);
                item[0].count = item[0].count + 1;
                basket[index] = item[0]
              } else {
                basket.push({ id: id, count: 1 })
              }
            } else {
              basket.push({ id: id, count: 1 })
            }

            localStorage.setItem("item", JSON.stringify(basket))
            // localStorage.setItem("btoa", btoa(JSON.stringify(basket)))
            // localStorage.setItem("atob", atob(btoa(JSON.stringify(basket))))

            // localStorage.getItem("id") == null && localStorage.setItem("id", [id])
            // Array(localStorage.getItem("id").split(",")).map((value, index) => {
            //   id !== value[index] && localStorage.setItem("id", [id, localStorage?.getItem("id")]);
            //   // const x = [...new Set([id, Array(localStorage.getItem("id").split(","))])]
            //   // localStorage.setItem("id", x)
            // })

            // localStorage.setItem("id", [id, localStorage?.getItem("id")]);
            // localStorage.setItem([...new Set((localStorage?.getItem("id")?.split(",")))]);
            // dispatch(myShoping({ kind, src, alt, id, href, name, color, price, description }))
            // console.log((array = localStorage.getItem("id")?.split(",")) => { [...new Set(array)] });
          }} sx={{ position: "absolute", left: "40px" }}>
            <ShoppingCart />
          </IconButton>
        </CardActions>

      </Card >

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
