import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Product/$pid')({
  component: RouteComponent,
})

function RouteComponent() {
  const {pid}=Route.useParams();


  return <div>Hello "/Product/$pid"!

    <h1>This is Product with id :{pid}</h1>
  </div>
}
