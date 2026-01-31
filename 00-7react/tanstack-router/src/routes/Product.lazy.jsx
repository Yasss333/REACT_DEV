import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/Product')({
  component: RouteComponent,
})


function RouteComponent() {
  return <div>

    <Link to={"Product/1"}>This is Product 1 </Link>
    <br></br>
    <Link to={"Product/2"}>This is Product 2 </Link>
    <br></br>
    <Link to={"Product/3"}>This is Product 3 </Link>
    <br></br>
    <Link to={"Product/4"}>This is Product 4 </Link>
    <br></br>
  </div>
}
