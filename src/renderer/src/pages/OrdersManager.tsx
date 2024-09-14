import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusIcon, PencilIcon, TrashIcon, ArrowLeft } from 'lucide-react'

interface Order {
  id: string
  fullName: string
  occasion: string
  designName: string
  wineType: string
  cellPhone: string
  clientCC: string
  recipientName: string
  recipientPhone: string
  address: string
  deliveryDate: string
  status: string
}

const initialOrder: Order = {
  id: '',
  fullName: '',
  occasion: '',
  designName: '',
  wineType: '',
  cellPhone: '',
  clientCC: '',
  recipientName: '',
  recipientPhone: '',
  address: '',
  deliveryDate: '',
  status: 'Pending'
}

export default function OrdersManager(): JSX.Element {
  const [orders, setOrders] = useState<Order[]>([])
  const [currentOrder, setCurrentOrder] = useState<Order>(initialOrder)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders')
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setCurrentOrder((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (currentOrder.id) {
      setOrders(orders.map((order) => (order.id === currentOrder.id ? currentOrder : order)))
    } else {
      setOrders([...orders, { ...currentOrder, id: Date.now().toString() }])
    }
    setIsModalOpen(false)
    setCurrentOrder(initialOrder)
  }

  const handleEdit = (order: Order): void => {
    setCurrentOrder(order)
    setIsModalOpen(true)
  }

  const handleDelete = (id: string): void => {
    setOrders(orders.filter((order) => order.id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-1">
          <ArrowLeft onClick={() => history.back()} className="mr-2 h-4 w-4" />
          <h2 className="text-3xl font-bold">Orders Manager</h2>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setCurrentOrder(initialOrder)}>
              <PlusIcon className="mr-2 h-4 w-4" /> Add New Order
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{currentOrder.id ? 'Edit Order' : 'Add New Order'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={currentOrder.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occasion">Occasion</Label>
                  <Input
                    id="occasion"
                    name="occasion"
                    value={currentOrder.occasion}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designName">Design Name</Label>
                  <Input
                    id="designName"
                    name="designName"
                    value={currentOrder.designName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wineType">Wine Type</Label>
                  <Input
                    id="wineType"
                    name="wineType"
                    value={currentOrder.wineType}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cellPhone">Cell Phone</Label>
                  <Input
                    id="cellPhone"
                    name="cellPhone"
                    value={currentOrder.cellPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientCC">Client CC</Label>
                  <Input
                    id="clientCC"
                    name="clientCC"
                    value={currentOrder.clientCC}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientName">Recipient Name</Label>
                  <Input
                    id="recipientName"
                    name="recipientName"
                    value={currentOrder.recipientName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientPhone">Recipient Phone</Label>
                  <Input
                    id="recipientPhone"
                    name="recipientPhone"
                    value={currentOrder.recipientPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={currentOrder.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deliveryDate">Delivery Date</Label>
                  <Input
                    id="deliveryDate"
                    name="deliveryDate"
                    type="date"
                    value={currentOrder.deliveryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Input
                    id="status"
                    name="status"
                    value={currentOrder.status}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Save Order
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <Card key={order.id} className="shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">{order.fullName}</h3>
              <p className="text-sm text-gray-600">{order.designName}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleEdit(order)}>
                <PencilIcon className="h-4 w-4 mr-2" /> Edit
              </Button>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(order.id)}>
                <TrashIcon className="h-4 w-4 mr-2" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
