import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { PlusIcon, PencilIcon, TrashIcon } from 'lucide-react'

// Dummy data for demonstration
const orders = [
  {
    id: 1,
    fullName: 'John Doe',
    occasion: 'Birthday',
    designIdName: 'BD001 - Happy Birthday',
    wineType: 'Red',
    cellPhone: '1234567890',
    clientCC: 'CC123456',
    recipientName: 'Jane Doe',
    recipientPhone: '0987654321',
    address: '123 Main St, City',
    deliveryDate: '2023-06-15',
    status: 'Pending'
  }
  // Add more dummy orders as needed
]

export default function OrdersManager(): JSX.Element {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Orders Manager</h2>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" /> Add New Order
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Occasion</TableHead>
            <TableHead>Design ID & Name</TableHead>
            <TableHead>Wine Type</TableHead>
            <TableHead>Cell Phone</TableHead>
            <TableHead>Client CC</TableHead>
            <TableHead>Recipient Name</TableHead>
            <TableHead>Recipient Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Delivery Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.fullName}</TableCell>
              <TableCell>{order.occasion}</TableCell>
              <TableCell>{order.designIdName}</TableCell>
              <TableCell>{order.wineType}</TableCell>
              <TableCell>{order.cellPhone}</TableCell>
              <TableCell>{order.clientCC}</TableCell>
              <TableCell>{order.recipientName}</TableCell>
              <TableCell>{order.recipientPhone}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>{order.deliveryDate}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <PencilIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
