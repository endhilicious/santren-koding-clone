import React, { Component } from 'react';
import Style from 'style-it';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container } from 'reactstrap';
export default class DaftarKajian extends Component {

  render() {
    return (
    <Container style={
      {margin:'10px auto'}
      }>
        <center>
            <h2>Daftar Kajian Koding Rutin</h2>
        </center>
        <CardDeck>
      <Card style={{cursor:'pointer'}} className='col-12 col-sm-12 col-md-6 col-lg-4 intro'>
        <CardImg top width="100%" src="https://lh5.googleusercontent.com/e6ixy5iFrGuPwlZFn0oU0vPgqMT9zPKdmswiBbZJEVpSbH6L2gVlcKAKFAoz7n31T45ZsSx8tQ=w1191" alt="Card image cap" />
        <CardBody>
          <CardTitle>Santren Kilat #1 (Coming Soon)</CardTitle>
          <CardText>4 Hari Intensif Laravel</CardText>
          <small style={{float:'left',color:'rgb(108, 117, 125)'}}>By Santren Koding</small>
          <small style={{float:'right',color:'red'}}>Kuota Terbatas</small>
        </CardBody>
      </Card>
    </CardDeck>
    <center>
        <Button outline color="success" style={{margin:'2rem'}}>Lihat Seluruh Santren Kilat</Button>
    </center>
    <Style>
      {`
        .intro:hover {
          box-shadow: 1px 2px 2px 2px rgba(0,0,0,0.5);
        }
      `}
      </Style>
    </Container>
    )
  }
}
