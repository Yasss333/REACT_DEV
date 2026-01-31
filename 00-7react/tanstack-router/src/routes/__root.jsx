import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Link } from '@tanstack/react-router'
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
       <Link to="/home">Home</Link>
      {"  "} 
      <Link to="/about">About</Link>
  {"  "}
  <Link to={"/Product"}  >Products</Link>

      <div>Hello "__root"!</div>
      <Outlet />
      <TanStackRouterDevtools/>
    </React.Fragment>
  )
}
