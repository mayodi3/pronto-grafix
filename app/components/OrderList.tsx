"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Order = {
  id: string;
  date: string;
  status: "Received" | "In Production" | "Ready for Delivery" | "Delivered";
  total: number;
};

export function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // TODO: Fetch orders from Appwrite
    const mockOrders: Order[] = [
      { id: "001", date: "2023-05-01", status: "Received", total: 150.0 },
      { id: "002", date: "2023-05-05", status: "In Production", total: 200.0 },
      {
        id: "003",
        date: "2023-05-10",
        status: "Ready for Delivery",
        total: 175.5,
      },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "Received"
                    ? "default"
                    : order.status === "In Production"
                    ? "secondary"
                    : order.status === "Ready for Delivery"
                    ? "destructive"
                    : "outline"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              ${order.total.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
