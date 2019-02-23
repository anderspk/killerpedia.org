import Link from "next/link";

export default () => (
  <header>
    <nav className="wrapper">
      <div className="logo">
        <Link href="/">
          <a>
            <h1>Killerpedia</h1>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/male">
            <a>Male killers</a>
          </Link>
        </li>
        <li>
          <Link href="/female">
            <a>Female killers</a>
          </Link>
        </li>
        <li>
          <Link href="/country">
            <a>Country</a>
          </Link>
        </li>
        <li>
          <Link href="/serialkillers">
            <a>Serial Killers</a>
          </Link>
        </li>
        <li>
          <Link href="/murderers">
            <a>Mass murderers</a>
          </Link>
        </li>
      </ul>
      <Link href="/addkiller">
        <button>Add killer</button>
      </Link>
      <style jsx>{`
        nav {
          padding: 1rem 0;
          text-transform: capitalise;
        }

        ul {
          margin: 0;
          padding: 0;
          display: flex;
          list-style: none;
        }

        li {
          margin-right: 1rem;
        }

        a {
          font-weight: 500;
          font-size: 14px;
          color: inherit;
          text-decoration: none;
          padding: 0.5rem 0.1rem;
          letter-spacing: 1px;
        }

        a:hover {
          color: #6dc8ff;
        }

        span {
          margin-right: 1rem;
        }

        .logo {
          flex: 1;
        }

        h1 {
          font-size: 2.2rem;
          margin: 4px 0;
          font-weight: 500;
          display: inline-block;
          color: #6dc8ff;
        }
      `}</style>
    </nav>
  </header>
);
