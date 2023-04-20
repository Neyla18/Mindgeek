import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import styles from "./header.module.css"
function Header() {
    return (
        <header>
            <Link to="/" title="Retour à la page d'accueil">
                <img src={styles.logoHeader} alt="Logo du site" />
            </Link>

            <nav>
                <Link to="shared">Serveur mutualisé</Link>

                <Link to="dedicated">Serveur Dédié</Link>

                <Link to="cloud">Service "Cloud"</Link>

                <Link to="contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
