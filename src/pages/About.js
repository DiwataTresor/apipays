import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation'
import './../styles/main.css'


const About = () => {
    const [nom, setNom] = useState("");
    useEffect(e => {

    }, []);
    const test = (e) => {
        e.preventDefault();
        if (nom !== "") {
            const donnees = new FormData();
            donnees.append("ent", nom);
            fetch(`${process.env.REACT_APP_API_URL}`, { "method": "POST", "body": donnees }).then(r => r.json())
                .then(r => {
                    document.querySelector("#nomDisplay").innerHTML = `Votre nom est : ${nom}`;
                    localStorage.setItem("utilisateur", nom);
                })
                .catch(e => { alert("echec"); console.log(e) })
        };
    }
    return (
        <div>
            <Navigation />
            <h1 className='centrer'>A Propos</h1>
            <br />
            <h2 id='nomDisplay'></h2>
            <form onSubmit={test}>
                <input type="text" className='' onChange={e => setNom(e.target.value.toString())} />

                <input type="submit" value="Go" />
            </form>


        </div>
    );
};

export default About;