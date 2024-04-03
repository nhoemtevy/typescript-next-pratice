"use client"
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';
import LoadingComponent from '../loading';
import { Button } from 'flowbite-react';
import { tree } from 'next/dist/build/templates/app-page';
import { Input } from 'postcss';


type DataRow = {
    id: number;
    username: string;
    image: string;
    email: string;
}

const column: TableColumn<DataRow>[] = [
    {
        name: "id",
        selector: (row) => row.id,
        sortable: true
    },
    {
        name: "username",
        selector: (row) => row.username,
        sortable: true
    },
    {
        name: "email",
        selector: (row) => row.email,
        sortable: true
    },
    {
        name: "image",
        selector: (row) => <img src={row.image} width={100} height={100} />,
    },
    {
        name: "Action",
        cell: (row) => <Button color="danger" >Delete</Button>
    }
];
export default function UserTable() {
    const [data, setUser] = useState([]);
    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    async function fetchData() {
        const data = await fetch ("https://dummyjson.com/users")
        const res = await data.json();
        setUser(res.users);
        setFilterData(res.users);
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!search) {
            setFilterData(data);
            return;
        }
        const result = data.filter((item) => {
            return item.username.toLowerCase().includes(search.toLowerCase)
        })
    })
    const paginationComponentOptions = {
        rowsPerPageText: 'rows per page',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All',
      };
    return (
        <div>
            <DataTable 
            columns={column} 
            data={data} 
            fixedHeader={true}
            fixedHeaderScrollHeight="500px"
            pagination
            progressComponent={<LoadingComponent/>}
            />
        </div>
    )
}
