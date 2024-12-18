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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, Trash2 } from "lucide-react";

type InventoryItem = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  reorderLevel: number;
};

export function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    quantity: 0,
    reorderLevel: 0,
  });

  useEffect(() => {
    // TODO: Fetch inventory from Appwrite
    const mockInventory: InventoryItem[] = [
      {
        id: "001",
        name: "T-Shirt",
        category: "Apparel",
        quantity: 100,
        reorderLevel: 20,
      },
      {
        id: "002",
        name: "Mug",
        category: "Promotional",
        quantity: 50,
        reorderLevel: 10,
      },
      {
        id: "003",
        name: "Sticker",
        category: "Promotional",
        quantity: 500,
        reorderLevel: 100,
      },
    ];
    setInventory(mockInventory);
  }, []);

  const handleAddItem = () => {
    // TODO: Add new item to Appwrite
    const newId = (parseInt(inventory[inventory.length - 1]?.id || "000") + 1)
      .toString()
      .padStart(3, "0");
    setInventory([...inventory, { ...newItem, id: newId }]);
    setNewItem({ name: "", category: "", quantity: 0, reorderLevel: 0 });
  };

  const handleUpdateQuantity = (id: string, change: number) => {
    // TODO: Update quantity in Appwrite
    setInventory(
      inventory.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const handleDeleteItem = (id: string) => {
    // TODO: Delete item from Appwrite
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <Input
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
          }
        />
        <Input
          type="number"
          placeholder="Reorder Level"
          value={newItem.reorderLevel}
          onChange={(e) =>
            setNewItem({ ...newItem, reorderLevel: parseInt(e.target.value) })
          }
        />
        <Button onClick={handleAddItem}>Add Item</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Reorder Level</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.reorderLevel}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    onClick={() => handleUpdateQuantity(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleUpdateQuantity(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
