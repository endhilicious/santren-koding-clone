import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron , Button , Container , Card, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Row, Col} from 'reactstrap';
// import components
import Header from './components/Header';
import DaftarKajian from './components/DaftarKajian';
import DaftarSantren from './components/DaftarSantren';
const Kegiatan = () =>{
  return(
    <Container>
        <CardGroup>
          <Card style={{backgroundColor:'#0bc72a',color:'white'}}>
            <CardBody>
              <center>
                <CardTitle>Kegiatan</CardTitle>
                <CardText>Koding</CardText>
                <CardText>Belajar Agama dan Al Qur'an</CardText>
                <CardText>Pendidikan Karakter</CardText>
              </center>
            </CardBody>
          </Card>
          <Card>
            <center>
              <CardBody>
                <img height="100px" src="http://i63.tinypic.com/oid9xu.png" />
                <CardTitle>"Memberi Manfaat Untuk Ummat"</CardTitle>
                <CardText>-Santren Koding-</CardText>
              </CardBody>
            </center>
          </Card>
        </CardGroup>
      </Container>
  );
}
const MondokBySantren = ()=>{
  return(
    <Container style={{margin:'10px auto'}}>
        <center>
          <h2>Mondok by Santren Koding</h2>
          <p>Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3 Tahun hingga jaminan kerja</p>
          <Card style={{margin:'20px auto'}} className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <CardImg top width="100%" src="http://i67.tinypic.com/2m2gkyp.png" alt="Card image cap" />
          </Card>
          <Button outline color="success">Lihat Selengkapnya</Button>
        </center>
    </Container>
  );
}
const SponsorPartner = ()=>{
  return(
    <Container style={{margin:'10px auto'}}>
        <center>
          <h2>Sponsor & Partner</h2>
          <Row style={{margin:'10px auto'}}>
            <Col xs="6" sm="4" md="4" lg="4"></Col>
            <Col xs="6" sm="4" md="4" lg="4">
            <a href="http://klinikita.co.id/"><img width="80%" className="box-shadow" src="http://i67.tinypic.com/2hcn70k.jpg" /></a>
            </Col>
            <Col xs="6" sm="4" md="4" lg="4"></Col>
          </Row>
          <Row style={{margin:'10px auto'}}>
            <Col xs="6" sm="6" md="4" lg="2">
              <a href="https://www.undip.ac.id/language/id/"> <img height="100px" src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png" /></a>
            </Col>
            <Col xs="6" sm="6" md="4" lg="2">
              <a href="http://www.dinus.ac.id/"><img height="100px" src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358"/></a>
            </Col>
            <Col xs="6" sm="6" md="4" lg="2">
              <a href="https://www.unisbank.ac.id/"> <img height="100px" src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg" /></a>
            </Col>
            <Col xs="6" sm="6" md="4" lg="2">
              <a href="http://www.java-valley.com/"> <img height="100px" src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png" /></a>
            </Col>
            <Col xs="6" sm="6" md="4" lg="2">
              <a href="https://www.dynamiclearningid.org/"> <img height="100px" src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500" /></a>
            </Col>
            <Col xs="6" sm="6" md="4" lg="2">
              <a href="https://www.go-mekanik.com/"> <img height="100px" src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png"/></a>
            </Col>
          </Row>
          <Row style={{margin:'10px auto'}}>
            <Col xs="6" sm="6" md="2" lg="2">
              <a href="http://sdk.semarangkota.go.id/"><img height="100px" src="http://sdk.semarangkota.go.id/web/pemkot.png" /></a>
            </Col>
            <Col xs="6" sm="6" md="4" lg="4">
              <a href="http://www.sandec.org/">
                <img height="80px" src="http://www.sandec.org/images/sandec-logo.png" />
              </a>
            </Col>
            <Col xs="6" sm="6" md="2" lg="2">
              <a href="https://www.facebook.com/SemarangOpenGo/"><img height="120px" src="http://i64.tinypic.com/28v94w6.png" /></a>
            </Col>
            <Col xs="6" sm="6" md="4" lg="4">
              <a href="#">
                <img height="50px" src="http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png"/>
              </a>
            </Col>
          </Row>
        </center>
    </Container>
  );
}
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  render(){
    return (
      <div>
        <Header />
        <Jumbotron style={{
          backgroundImage: "url('http://i66.tinypic.com/28am9fs.jpg')",
          backgroundSize: '100%',
          marginTop: '6%'
        }}>
          <Container>
            <center>
              <h1 className="display-3" style={{color : 'white'}}>Belajar Jadi Asyik !</h1>
              <p className="lead" style={{color : 'white'}}>Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren Koding.</p>
              <Button color="success" size="lg">Mulai Belajar</Button>
            </center>
          </Container>
        </Jumbotron>
        <hr />
        <DaftarKajian />
        <hr />
        <DaftarSantren />
        <hr />
        <Kegiatan />
        <hr />
        <MondokBySantren />
        <hr />
        <SponsorPartner />
        <hr />
        <Container style={{margin:'30px auto',width:'50%'}}>
            <center>
              <h2>Kontak</h2>
              <br />
              <p><span className="glyphicon glyphicon-earphone"></span>082225111587</p>
              <p>santrenkoding@gmail.com </p>
              <br />
              <p>Titik Ruang Space,Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,
Kota Semarang, Jawa Tengah 50269</p>
            </center>
        </Container>
        <hr />
        <Container style={{margin:'10px auto',color:'rgb(108, 117, 125)'}}>
          <p>Copyright &copy; Santren Koding 2018. All rights reserved.</p>
        </Container>
      </div>
    );
  }
}

export default App;
