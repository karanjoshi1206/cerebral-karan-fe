"use client";

import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import useSheetData from "@/app/hooks/useSheetData";
import { columns } from "./column";

function TopProducts() {
  const [data, setData] = useState<any[]>([]);
  const { sheetData } = useSheetData();

  useEffect(() => {
    if (sheetData?.sheet2) setData(sheetData?.sheet2);
  }, [sheetData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Top Products</div>

        <button className="rounded-full  flex items-center border-gray-300 border-2 p-2 text-xs md:p-2 md:px-4 md:text-sm gap-1">
          <span> Full results</span>
        </button>
      </div>
      <Table className="border-none">
        <TableHeader className="border-b-2">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="border-none" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow className="border-none" key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default TopProducts;
