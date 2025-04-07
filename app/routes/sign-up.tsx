import { SignUp } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <SignUp />
  </div>
}
