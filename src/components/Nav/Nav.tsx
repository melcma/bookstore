import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/products">Shop</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
}
