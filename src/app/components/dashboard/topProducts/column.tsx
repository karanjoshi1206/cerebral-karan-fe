"use client";

import { ITopProduct } from "@/models/dashboard";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { Star } from "lucide-react";
import { ReactNode } from "react";

export const columns: ColumnDef<ITopProduct>[] = [
  {
    accessorKey: "Product",
    header: () => {
      return <span className="font-semibold text-sm">Product</span>;
    },
    cell: (cell: CellContext<ITopProduct, unknown>) => {
      return <span className="font-semibold text-lg">{cell?.renderValue() as ReactNode}</span>;
    }
  },
  {
    accessorKey: "sold_amount",
    header: () => {
      return <span className="font-semibold text-sm">Sold amount</span>;
    },
    cell: (cell: CellContext<ITopProduct, unknown>) => {
      return <span className="font-semibold text-md text-gray-500">{cell?.renderValue() as ReactNode}</span>;
    }
  },
  {
    accessorKey: "unit_price",
    header: "Unit Price",
    cell: (cell: CellContext<ITopProduct, unknown>) => {
      return <span className="font-semibold text-md text-gray-500">{cell?.renderValue() as ReactNode}</span>;
    }
  },
  {
    accessorKey: "revenue",
    header: () => {
      return <span className="font-semibold text-sm">Revenue</span>;
    },
    cell: (cell: CellContext<ITopProduct, unknown>) => {
      return <span className="font-semibold text-md text-gray-500">{cell?.renderValue() as ReactNode}</span>;
    }
  },
  {
    accessorKey: "rating",
    header: () => {
      return <span className="font-semibold text-sm">Rating</span>;
    },
    cell: (cell: CellContext<ITopProduct, unknown>) => {
      return (
        <div className="flex gap-1 items-center">
          <Star fill="#feaa55" color="#feaa55" size={14} />
          <span className="font-semibold text-md text-black">{cell?.renderValue() as ReactNode}</span>
        </div>
      );
    }
  }
];
