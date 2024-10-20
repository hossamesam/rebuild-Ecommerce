"use client"
import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import { useRef } from 'react';

export default function PaginationUi({ count, router }: { count: number, router: string, params: { id: string } }) {
  const params = useParams<{ id: string, idpage: string }>()
  const routers = useRouter()

  const [page, setPage] = React.useState(0);
  useEffect(() => {
    setPage(Number(params.idpage))
  }, [params.idpage])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    routers.replace(`${value}`)
  };



  return (
    <Pagination onChange={(handleChange)} dir='ltr' page={page} count={count} color="primary" />
  );
}

{/* <h1>{page}</h1>
      <div onClick={() => { console.log(params.idpage) }}>params.id : {params.idpage}</div> */}