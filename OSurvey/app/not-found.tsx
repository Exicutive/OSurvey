import Link from "next/link";
export default function NotFound() { return <main className="not-found"><p className="eyebrow">404 · Page not found</p><h1>Looks like this point is off the map.</h1><p>The page you are looking for is not available.</p><Link className="button button--solid" href="/">Return home</Link></main>; }
