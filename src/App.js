import React,{useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactEmbedGist from 'react-embed-gist';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Embed from 'react-embed';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player'
import video1 from './ACO_TSP_Berlin52.mp4'
import image1 from './img1.jpg'
export default class App extends React.Component{

constructor() {
    super();
    this.state={
        play:false,
        toshow:false,
        play1:false,
        toshow1:false
    }
}


  render(){
    return(
        <div>

            <Grid container>
                <Grid item xs={12} s={12} style={{alignSelf:'center',justifyContent:'center',display: 'flex'}}>

                    <div style={{height:'400px',width:'100%',backgroundColor:'#9acc99',alignSelf:'center',justifyContent:'center',display: 'flex',alignItems:'center'}}>

                        <div>


                        <text style={{fontSize:'50px',color:'white',fontWeight:'bold',fontFamily:'roboto'}}>Machine learning Project</text>
                        </div>

                    </div>

                </Grid>

            </Grid>
            
            <Grid container>

                <Grid item xs={12} sm={6} style={{alignSelf:'center',justifyContent:'center',display: 'flex'}}>


                    {this.state.toshow===false
                        ?


                        <ReactEmbedGist gist="Ayush1011/cb8ebca2f7081f477c3306adbf185853"
                                        wrapperClass="gist"
                                        loadingClass="loading__screen"
                                        titleClass="gist__title"
                                        contentClass="gist__content"
                                        errorClass="gist__error"
                                        file="ML.ipynb"/>



                        :
                        <div style={{alignSelf:'center',justifyContent:'center',display: 'flex'}}>


                        <ReactPlayer playing={this.state.paly}
                        url={"https://youtu.be/MzQh1CvOC1k"}

                        />  </div>

                    }










                </Grid>




                    <Grid item xs={12} sm={6} style={{alignSelf:'center',justifyContent:'center',display: 'flex'}}>


                        {this.state.toshow1===false
                            ?
                            <div style={{alignSelf:'center',justifyContent:'center',display: 'flex'}}>


                                <ReactEmbedGist gist="msaracevic/5d757e2fc72482a9a4a439969500c2eb"
                                                wrapperClass="gist"
                                                loadingClass="loading__screen"
                                                titleClass="gist__title"
                                                contentClass="gist__content"
                                                errorClass="gist__error"
                                                file=".bash_profile.sh"/>
                            </div>


                            :
                            <div style={{alignSelf:'center',justifyContent:'center',display: 'flex'}}>


                                <ReactPlayer playing={this.state.paly1}
                                             url={"https://youtu.be/MzQh1CvOC1k"}

                                />  </div>

                        }







                    </Grid>





                <Grid container style={{height:'100px'}}>

                    <Grid xs={12} sm={6}  style={{alignSelf:'center',justifyContent:'center',display: 'flex'}}>
                        <Button variant="contained" color="primary" onClick={()=>this.setState({toshow:!this.state.toshow})} style={{width:'400px'}}>

                            {this.state.toshow?
                                <text>
                                    Show code

                                </text>
                            :
                                <text>
                                    Run Snippet 1
                                </text>
                            }

                        </Button>

                    </Grid>


                    <Grid xs={12} sm={6} style={{alignSelf:'center',justifyContent:'center',display: 'flex'}}>
                        <Button variant="contained" color="primary" onClick={()=>this.setState({toshow:!this.state.toshow})} style={{width:'400px'}}>

                            {this.state.toshow1?
                                <text>
                                    Show code

                                </text>
                                :
                                <text>
                                    Run Snippet 2
                                </text>
                            }

                        </Button>

                    </Grid>


                </Grid>



                </Grid>




















        </div>
    )
  }

}


