import React, { useState, useEffect } from "react";
import { QUESTION } from "../data/data";
import { Text, View, StyleSheet, Button } from "react-native";

const Questions = (props) => {
  const [qnum, setQnum] = useState(0);
  const [finish, setFinish] = useState(false);
  const soruId = props.navigation.getParam("id");
  const question = QUESTION.filter((soru) => soru.categoryId === soruId);
  const max = question.length;
  var i = 0;
  var turn = true;
  useEffect(() => {}, [question[qnum]]);

  const increase = (props) => {
    const x = qnum + 1;
    if (x == max) {
      setQnum(0);
    }
    setQnum(x);
  };
  
  let screen=<View><Text style={{ fontWeight: "bold", fontSize: 20 }}>
  Questions {question[qnum].id} ){"\n"}
  {"\n"}
</Text><Text style={styles.soru}> {question[qnum].soru}</Text>

<Text>
  {question[qnum].secenekler.map((q) => {
    return (
      <View key={i++} style={styles.buttonContainer}>
        <View style={styles.buton}>
          <Button 
            onPress={() => {
              if (q == question[qnum].cevap) {
                if (qnum + 1 < question.length) {
                  increase();
                } else {
                  setQnum(question.length-1);
                  setFinish(true);
                 
                }
              } else {
                restart();
              }
            }}title={q}/>
        </View>
      </View>
    );
  })}
</Text></View>
  const restart = () => {
    const x = 0;
    setQnum(x);
  };
  
  if(finish==true){
    screen =<View style={styles.bul}><Text>Tebrikler</Text>
    <Button title="Return Menu" onPress={() =>{
      props.navigation.navigate({routeName:"Questions"})
    }}></Button></View>;
  }

  return (
    <View style={styles.container}>
         {screen}
    
    </View>
  );
};

const styles = StyleSheet.create({
  soru: {
    margin: 9,
    fontSize: 20,
  },
  container: {
    margin: 50,
    height: "100%",
    top: 100,
  },
  buton: {
    flex: 1,

    width: 300,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 200,
    margin: 15,
    padding: 10,
    justifyContent: "space-between",
  },
  bul:{
     fontWeight: "bold", 
     fontSize: 70,
    textAlign:"center" }
});

export default Questions;
