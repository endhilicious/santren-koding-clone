import React, { Component } from 'react';
import Style from 'style-it';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container } from 'reactstrap';

export default class DaftarKajian extends Component {
  render() {
    return (
    <Container>
        <center>
            <h2>Daftar Kajian Koding Rutin</h2>
        </center>
        <CardDeck>
      <Card style={{cursor:'pointer'}} className='intro'>
        <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #3</CardTitle>
          <CardText>ReactJS dan Firebase Auth/Hosting</CardText>
          <small style={{float:'left',color:'rgb(108, 117, 125)'}}>By Santren Koding</small>
          <small style={{float:'right',color:'red'}}>Kuota Terbatas</small>
        </CardBody>
      </Card>
      <Card style={{cursor:'pointer'}} className='intro'>
        <CardImg top width="100%" 
        src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #2</CardTitle>
          <CardText>html, css, boostrap dasar</CardText>
          <small style={{float:'left',color:'rgb(108, 117, 125)'}}>By Santren Koding</small>
          <small style={{float:'right',color:'red'}}>Kuota Terbatas</small>
        </CardBody>
      </Card>
      <Card style={{cursor:'pointer'}} className='intro'>
        <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #1</CardTitle>
          <CardText>Belajar Laravel Dasar</CardText>
          <small style={{float:'left',color:'rgb(108, 117, 125)'}}>By Santren Koding</small>
          <small style={{float:'right',color:'red'}}>Kuota Terbatas</small>
        </CardBody>
      </Card>
    </CardDeck>
    <center>
        <Button outline color="success" style={{margin:'2rem'}}>Lihat Seluruh Kajian Koding</Button>
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
