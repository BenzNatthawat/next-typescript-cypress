import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/post">
        <a>Post</a>
      </Link>
    </nav>
  )
}