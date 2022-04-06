import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SecretPage = () => {
  return (
    <>
      <MetaTags title="Secret" description="Secret page" />

      <h1>SecretPage</h1>
      <p>
        Find me in <code>./web/src/pages/SecretPage/SecretPage.tsx</code>
      </p>
      <p>
        My default route is named <code>secret</code>, link to me with `
        <Link to={routes.secret()}>Secret</Link>`
      </p>
    </>
  )
}

export default SecretPage
