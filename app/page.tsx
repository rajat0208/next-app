import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/productCard'
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]/route"
export default  async function Home() {

  const session= await getServerSession(authOptions);
  return (
    <main>
      <h1>HELLO {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
