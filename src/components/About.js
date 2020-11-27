import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';


const About = () => {
    return (
        <div>
            <div className="headerPage">
                <h1 style={{paddingBottom: "1rem"}}>About COVID-19<img className="homePic" src="home.png" alt="homePicture"/></h1>
            </div>
            <div className="aboutContent">
            <Grid container spacing={3} justify="center" direction="row">
                <Grid item component={Card} >
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Most common symptoms:</Typography>
                            <Typography variant="body2">Fever</Typography>
                            <Typography variant="body2">Dry cough</Typography>
                            <Typography variant="body2">Tiredness</Typography>
                            <Typography variant="body2" className="white">.</Typography>
                            <Typography variant="body2" className="white">.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item component={Card} >
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Less common symptoms:</Typography>
                            <Typography variant="body2">Aches and pains</Typography>
                            <Typography variant="body2">Fever</Typography>
                            <Typography variant="body2">Loss of smell or taste</Typography>
                            <Typography variant="body2">Diarrehea</Typography>
                            <Typography variant="body2">Sore throat</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
                <div style={{paddingTop: "3rem"}} className="headerPage">
                    <h2>STAY SAFE, WEAR A MASK</h2>
                </div>
                <img className="stopPic" src="stop.png" alt="stopCovid"/>
            </div>
        </div>
    )
}

export default About
