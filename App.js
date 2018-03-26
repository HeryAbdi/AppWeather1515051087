import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        city:'',
        forecast:{
          main: '-',
          description: '-',
          temp: 0
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=cdd6ee69ad6f2b1d1ea90e092fdc3306&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.inputtext}>
            <View style={styles.inputtext2}>
              <TextInput style = {styles.text2}
                placeholder="Masukkan Nama Kota"
                onChangeText={(city)=>this.setState({city})}
              />
            </View>

              <Button
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                color="#78909C"
                accessibilityLabel="Klik untuk melihat"
              />
          </View>

          <View style={styles.infocuaca}>
            <View style={styles.backkeyboard}>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Kota = {this.state.city} {"\n"}
                </Text>
              </View>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Suhu = {this.state.forecast.temp} {"'Celcius"}
                </Text>
              </View>

            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Cuaca = {this.state.forecast.main} {"\n"}
                </Text>
              </View>
              <View style={styles.box4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Desc = {this.state.forecast.description} {"\n"}
                </Text>
              </View>
            </View>

          </View>

          <View style={styles.footer}>
            <Text style={styles.textfooter}>Pendidikan Teknik Informatika</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFAB00',
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: '#FF8F00',
    flex: 1,
    justifyContent: 'center'
  },

  inputtext: {
    backgroundColor: '#FFECB3',
    flex: 2,
    justifyContent: 'center',
    margin:10
  },

  inputtext2: {
    backgroundColor: 'white',
    flex: 2,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight:30,
    marginTop: 70,
    marginBottom:60
  },

  infocuaca: {
    backgroundColor: '#FFAB00',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box4: {//box detail tampil
    backgroundColor: '#ECEFF1',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:10,

    marginLeft: 10,
    marginRight: 10
  },

  footer: {
    backgroundColor: '#FF8F00',
    flex: 1,
    justifyContent: 'center'
  },

  backkeyboard: {
    flex: 2,
    backgroundColor: '#FFAB00',
    flexDirection: 'row',
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },
  text1: {
    padding: 15, fontSize: 30, color: 'white', textAlign: 'center', fontWeight:'bold'
  },
  text2: {
    padding: 15, fontSize: 20, color: 'black', textAlign: 'center', fontWeight:'bold'
  },
  textfooter: {
    padding: 15, fontSize: 20, color: 'white', textAlign: 'center', fontWeight:'bold'
  }
});
