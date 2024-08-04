"use client";
import Image from "next/image";
import Tshirt from "../../(components)/T-shirt";
import man from "@/../../public/oldproject/man.json";
import { Box } from "@mui/material";

import { usePathname } from "next/navigation";
import { KingBed } from "@mui/icons-material";

export default function Home() {
  const router = usePathname();

  return (
    <main>
      <Box className="inset-x-10">
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
            kind={router}></Tshirt>
        ))}
      </Box>
    </main>
  );
}
