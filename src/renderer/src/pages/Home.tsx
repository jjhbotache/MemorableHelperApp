import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home(): JSX.Element {
  const navigate = useNavigate()

  return (
    <>
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="flex justify-center mb-4 w-full">
          <img
            src="/imgs/memorableTool.png"
            alt="Memorable Helper App Logo"
            className="w-1/2 h-auto max-w-80"
          />
        </div>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Memorable Helper App</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button className="w-full" size="lg" onClick={() => navigate('/orders-manager')}>
              Orders Manager
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Volver Atrás
        </Button>
      </div>
    </>
  )
}
