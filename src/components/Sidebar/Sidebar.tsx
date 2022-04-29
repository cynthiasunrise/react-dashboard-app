import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import samanthaImg from './../../assets/png/samantha.png';
import styles from './Sidebar.module.scss';

const sidebarNavLinks = [
  'dashboard',
  'expenses',
  'wallets',
  'summary',
  'accounts',
  'settings',
];

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt="samantha" />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>samantha@email.com</p>
          </div>

          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((link) => (
                <li key={link} className={styles.sidebarNavItem}>
                  <Link
                    className={
                      pathname === `/${link}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${link}`}
                  >
                    {/* {link.charAt(0).toUpperCase() + link.slice(1)} */}
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
