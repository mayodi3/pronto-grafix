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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Order = {
  id: string;
  customerName: string;
  date: string;
  status: "Received" | "In Production" | "Ready for Delivery" | "Delivered";
  total: number;
};

export function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // TODO: Fetch orders from Appwrite
    const mockOrders: Order[] = [
      {
        id: "001",
        customerName: "John Doe",
        date: "2023-05-01",
        status: "Received",
        total: 150.0,
      },
      {
        id: "002",
        customerName: "Jane Smith",
        date: "2023-05-05",
        status: "In Production",
        total: 200.0,
      },
      {
        id: "003",
        customerName: "Bob Johnson",
        date: "2023-05-10",
        status: "Ready for Delivery",
        total: 175.5,
      },
    ];
    setOrders(mockOrders);
  }, []);

  const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
    // TODO: Update order status in Appwrite
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customerName}</TableCell>
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
            <TableCell>
              <Select
                onValueChange={(value) =>
                  handleStatusChange(order.id, value as Order["status"])
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Update Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Received">Received</SelectItem>
                  <SelectItem value="In Production">In Production</SelectItem>
                  <SelectItem value="Ready for Delivery">
                    Ready for Delivery
                  </SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
