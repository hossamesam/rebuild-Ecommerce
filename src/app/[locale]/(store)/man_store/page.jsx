"use client";
import Image from "next/image";
import Tshirt from "../../components/T-shirt";
import man from "@/../../public/oldproject/man.json";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { KingBed } from "@mui/icons-material";
import Filter from "../../components/Filters/Filter";

export default function Home() {
  const router = usePathname();

  return (
    <main className="">
      <Box
        sx={{
          display: "inline-grid",
          justifyContent: "center",
          alignItems: "center",
          m: "0 5%",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "1fr 1fr 1fr  ",
            md: "1fr 1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr 1fr 1fr",
          },
        }}
      >
        {man.map((product) => (
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
            kind={router}
          ></Tshirt>
        ))}
      </Box>
    </main>
  );
}
