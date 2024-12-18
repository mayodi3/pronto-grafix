"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InventoryManagement } from "@/app/components/InventoryManagement";
import { OrderManagement } from "@/app/components/OrderManagement";
import { ReportingTools } from "@/app/components/ReportingTools";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-6 px-3">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          Admin Dashboard
        </motion.h1>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="orders">Order Management</TabsTrigger>
            <TabsTrigger value="inventory">Inventory Management</TabsTrigger>
            <TabsTrigger value="reports">Reporting Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>
                  View and manage customer orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <OrderManagement />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>Manage stock levels and items</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryManagement />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reporting Tools</CardTitle>
                <CardDescription>Generate and view reports</CardDescription>
              </CardHeader>
              <CardContent>
                <ReportingTools />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
