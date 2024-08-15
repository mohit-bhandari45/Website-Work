import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Custom Table components to remove hover effect
const CustomTableHeader = React.forwardRef((props, ref) => (
  <TableHeader ref={ref} {...props} className="bg-primary-foreground" />
))
CustomTableHeader.displayName = "CustomTableHeader"

const CustomTableRow = React.forwardRef((props, ref) => (
  <TableRow ref={ref} {...props} className="border-b transition-colors hover:bg-transparent data-[state=selected]:bg-transparent" />
))
CustomTableRow.displayName = "CustomTableRow"

export default function ProductManagement() {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Product Management</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Add New Product Card */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="Enter product name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="Enter category" />
              </div>
              <Button type="submit">Add Product</Button>
            </form>
          </CardContent>
        </Card>

        {/* Product List Card */}
        <Card>
          <CardHeader>
            <CardTitle>Product List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <CustomTableHeader>
                <CustomTableRow>
                  <TableHead className="font-extrabold text-black">Name</TableHead>
                  <TableHead className="font-extrabold text-black">Price</TableHead>
                  <TableHead className="font-extrabold text-black">Category</TableHead>
                  <TableHead className="font-extrabold text-black">Action</TableHead>
                </CustomTableRow>
              </CustomTableHeader>
              <TableBody>
                <CustomTableRow>
                  <TableCell>Painting</TableCell>
                  <TableCell>$200</TableCell>
                  <TableCell>Art</TableCell>
                  <TableCell>
                    <Button variant="outline">Edit</Button>
                  </TableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <TableCell>Hand crafty</TableCell>
                  <TableCell>$100</TableCell>
                  <TableCell>Art</TableCell>
                  <TableCell>
                    <Button variant="outline">Edit</Button>
                  </TableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <TableCell>Pot crafty</TableCell>
                  <TableCell>$300</TableCell>
                  <TableCell>Art</TableCell>
                  <TableCell>
                    <Button variant="outline">Edit</Button>
                  </TableCell>
                </CustomTableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}