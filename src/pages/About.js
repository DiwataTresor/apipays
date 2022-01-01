import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation'
import styled from 'styled-components'
import Buttons from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './../styles/main.css'
import Notfound from './NotFound';


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
    const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
    const [open, setOpen] = React.useState(false);
    const [fenetre, setFenetre] = useState(null);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const ouvrir = () => {
        setFenetre("notfound");
        //document.querySelector("#container").append(<notfound />);
    };
    return (
        <>
            <div>
                <Navigation />

                <div>
                    <h1 className='centrer'>A Propos</h1>
                    <br />
                    <h2 id='nomDisplay'></h2>
                    <form onSubmit={test}>
                        <input type="text" className='' onChange={e => setNom(e.target.value.toString())} />

                        <input type="submit" value="Go" />
                        <Buttons variant="contained" type="submit">Outlined</Buttons>
                        <br />

                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />

                    </form>


                    <Button onClick={handleToggle}>Show backdrop</Button>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <Button variant="contained" onClick={ouvrir}>Container </Button>

                    <div id="container">

                        {
                            fenetre == null ? null : <Notfound nom="tresor" />
                        }

                    </div>
                </div>

            </div>
            <Button variant="contained" onClick={handleClose}>Fermer</Button>
        </>

    );
};

export default About;