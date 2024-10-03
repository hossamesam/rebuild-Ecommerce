"use client";
import Image from "next/image";
import Tshirt from "@/app/[locale]/(components)/T-shirt";
import woman from "@/../../public/oldproject/woman.json";
import { Box } from "@mui/material";
import { useParams, usePathname } from "next/navigation";
import axios from "axios";
import { baseUrl } from "@/baseUrl";
import { useEffect, useState } from "react";
import Filter from "@/app/[locale]/(components)/Filters/Filter";
import PaginationUi from "@/app/[locale]/(components)/Pagination/Pagination";
import { CircleCheck, X } from "lucide-react";
import {
    AlertError,
    AlertSucsses,
    AlertStatus,
} from "@/app/[locale]/(components)/Alerts/Alerts";

export default function page() {
    const params = useParams();

    const router = usePathname();
    const [data, setData] = useState([]);
    const [PaginationNum, setPaginationUi] = useState(1);
    const sizeItems = 15;

    usePathname();
    useEffect(() => {
        axios
            .get(`${baseUrl}/api/items?page=${params.idpage - 1}&size=${sizeItems}`)
            .then((res) => {
                setData(res.data);
                setPaginationUi(
                    Math.ceil(res.headers.get("x-total-count") / sizeItems)
                );
            })
            .catch((err) => console.log(err));
    }, []);
    // useEffect(() => {
    //   axios.get(`${baseUrl}/api/attachments/public/127ff87d-07bd-43ba-834d-5666fc4aa2c0`,
    //   )
    //     .then((res) => {
    //       setPhoto(res.data)
    //       console.log("http://localhost:8001/api/attachments/public/127ff87d-07bd-43ba-834d-5666fc4aa2c0"
    //       );

    //     })
    //     .catch((err) => console.log(err))

    // }, [])

    return (
        <>
            <main>
                <div className="flex gap-8 ">
                    <Filter />
                    <Box className="w-full">
                        <Box
                            sx={{
                                mt: "0",
                                mb: "50px",
                                mx: "auto",
                                display: "inline-grid",
                                gridTemplateColumns: {
                                    xs: "1fr ",
                                    sm: "1fr 1fr ",
                                    md: "1fr 1fr 1fr",
                                    lg: "1fr 1fr 1fr 1fr ",
                                    xl: "1fr 1fr 1fr 1fr 1fr  ",
                                },
                            }}
                        >
                            {data.map((res) => {
                                return (
                                    <Tshirt
                                        key={res.id}
                                        id={res.id}
                                        src={
                                            "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/y/27/96e16fa8-e958-4bf7-a0f6-05827e1ce65c.jpg"
                                        }
                                        alt={res.description}
                                        href={"#"}
                                        name={res.nameAr}
                                        color={res.colors}
                                        price={res.sellPrice}
                                        description={res.description}
                                        kind={router}
                                    ></Tshirt>
                                );
                            })}
                        </Box>

                        <div className="flex justify-center items-center  w-full my-20 ">
                            <PaginationUi
                                router={router}
                                count={PaginationNum}
                            ></PaginationUi>
                        </div>
                    </Box>
                </div>
            </main>
        </>
    );
}
