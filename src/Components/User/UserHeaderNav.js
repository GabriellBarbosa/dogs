// STYLES
  import styles from './UserHeaderNav.module.css';
// STYLES

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as PosteSuaFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as VouVazar} from '../../Assets/sair.svg';
import {UserContext} from '../../UserContext';
import useMedia from '../../Hooks/useMedia';



const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation();

  React.useEffect(() => {
    
  }, [])

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label='menu' onClick={() => setMobileMenu(!mobileMenu)}></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end activeClassName={styles.active}><MinhasFotos/>
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}><Estatisticas/>
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}><PosteSuaFoto/>
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}><VouVazar />{mobile && 'Sair'}</button>
      </nav>    
    </>

  );
}

export default UserHeaderNav;
