import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
  
let timer = null;
let ds = 0;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [ playText, setPlayText ] = useState('Go')
  const [ time, setTime ] = useState('00:00:00');
  const [ recordList, setRecordList ] = useState([]);
  const [ runnig, setRunnig ] = useState(false);
  

  function play(){
    if(timer === null){
      setPlayText('Stop');
      timer = setInterval(()=>{
        ds++;
        if(ds==10){
          ds=0;
          ss++
        }
        if(ss==60){
          ss=0;
          mm++;
        }
        if(mm==60){
          mm=0;
          hh++
        }
        let format = (hh>0?(hh<10?'0'+hh:hh)+':':'')+(mm<10?'0'+mm:mm)+':'+(ss<10?'0'+ss:ss)+':'+(ds<10?'0'+ds:ds);
        setTime(format)
      },100)
    }else{
      clearInterval(timer);
      setPlayText('Go')
      timer = null;
    }
  }

  function record(){

  }

  
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontWeight:'bold', color:'#FFF', fontSize: 48}}>{time}</Text>
      </View>
      <View style={styles.actions}> 
        <TouchableOpacity onPress={play}>
          <View style={styles.play}>
            <Text style={{fontWeight:'bold', fontSize: 20, color: '#FFF'}}>{playText}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mark} onPress={record}>
          <Ionicons name='alarm' color='#FFF' size={50}/>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    
  },
  display:{
    width: 350,
    height: 350,
    borderRadius: 300/2,
    borderWidth: 10,
    borderColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  actions:{
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  play:{
    width: 100,
    height: 100,
    backgroundColor: '#36578A',
    borderRadius: 300/2,
    borderWidth: 6,
    borderColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  mark:{
    position: 'absolute',
    right: -80,
  }
});
