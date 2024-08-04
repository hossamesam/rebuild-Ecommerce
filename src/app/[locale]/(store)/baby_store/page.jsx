"use client";
import Tshirt from "../../(components)/T-shirt";
import baby from "@/../../public/oldproject/baby.json";
import { Box } from "@mui/material";

import { usePathname } from "next/navigation";

export default function Home() {
  const router = usePathname();
  return (
    <main>
      <Box
        sx={{
          mt: "0px",
          mb: "50px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr  ",
            sm: "1fr 1fr  ",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr ",
            xl: "1fr 1fr 1fr 1fr 1fr 1fr  ",
          },
        }}>
        {baby.map((product) => (
          <Tshirt
            src={product.imageSrc}
            alt={product.imageAlt}
            href={product.href}
            key={product.id}
            id={product.id}
            name={product.name}
            color={product.color}
            price={product.price}
            description={product.description}
            kind={router}></Tshirt>
        ))}
      </Box>
    </main>
  );
}
