import Link from "next/link";
export function Header() {

  return (
    <React.Fragment>
      <Link href='/'>
        <a>home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/portfolios'>
        <a>Portfolios</a>
      </Link>
      <Link href='/blogs'>
        <a>Blogs</a>
      </Link>
      <Link href='/cv'>
        <a>CV</a>
      </Link>
      <style jsx global>

        {
          `
          .customClass{
            color:red
          }
          `
        }
      </style>
    </React.Fragment>

  )

}