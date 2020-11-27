import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import '../App.css'
import CountUp from 'react-countup'
import Moment from 'react-moment'

const Cards = (props) => {
    if (!props.data.confirmed) {
        return 'Loading...'
    }

    const confirmed = props.data.confirmed.value;
    const deaths = props.data.deaths.value;
    const recovered = props.data.recovered.value;
    const date0 = props.data.lastUpdate;

    return (
        <div className="cardContainer">
            <Grid container spacing={3} justify="center" direction="row">
                <Grid item component={Card} >
                    <Card className="infected card">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={confirmed} duration={2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">Last update: <Moment format={'MMMM Do YYYY'} date={date0}/></Typography>
                            <Typography variant="body2">Active COVID-19 cases</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item component={Card} >
                    <Card className="recovered card">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={recovered} duration={2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">Last update: <Moment format={'MMMM Do YYYY'} date={date0}/></Typography>
                            <Typography variant="body2">Recovered COVID-19 cases</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item component={Card} >
                    <Card className="deaths card">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">Last update: <Moment format={'MMMM Do YYYY'} date={date0}/></Typography>
                            <Typography variant="body2">COVID-19 Deaths</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
