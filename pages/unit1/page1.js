import React from "react";
import { NativeAppEventEmitter } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { Icon } from "react-native-elements";



const Page1 = (props) => {
 
  const tableHead = [
    "Subject Pronounce (Özne zamirler)",
    "Object Pronaunce (Nesne zamirler)",
    "Possesive Adjectives (İyelik sıfatları)",
    "Possessive Pronunce (İyelik zamirleri)",
    "Reflexice Pronounce (dönüşlü zamirler)",
  ];
  const tableData = [
    [
      "I (ben)",
      "Me (bana,beni)",
      "My (benim)",
      "Mine (benimki)",
      "Myself(kendim)",
    ],
    [
      "You (sen)",
      "You (sana,seni)",
      "Your (senin)",
      "Yours (seninki),",
      "Yourself (kendin)",
    ],
    ["He (O)", "Him (ona,onu)", "His (onun)", "His (onunki)", "Himself(kendi)"],
    [
      "She (O)",
      "Her (ona,onu)",
      "Her (onun)",
      "Hers(onunki)",
      "Herself (kendi)",
    ],
    ["It (O)", "It (ona,onu)", "Its (onun)", "Its (onunki)", "Itself (kendi)"],
    [
      "We (Biz)",
      "Us (bize,biz)",
      "Our (bizim)",
      "Ours (bizimki)",
      "Ourselves (kendimiz)",
    ],
    [
      "You (Siz)",
      "You (size,siz)",
      "Your (sizin)",
      "Yours (sizinki)",
      "Yourselves (kendiniz)",
    ],
    [
      "They (Onlar)",
      "Them (onlara,onları)",
      "Their (onlarınki)",
      "Theirs",
      "Themselves (kendileri)",
    ],
  ];
  const ornek1 = [
    "I have got a motorbike (Ben bir motorsiklete sahibim)",
    "You are very tall. (Sen çok uzunsun)",
    "He is playing football. (O futbol oynuyor)",

    "She is coming tonight.(O bu gece geliyor.)",

    "It is rainy.(Hava yağmurlu.)",

    "We went to the party.(Biz partiye gittik.)",
  ];

  const ornek2 = [
    "Give that pencil to me. (Şu kalemi bana ver.)",
    "There is a letter to you. (Sana bir mektup var.)",
    "This book belongs to him (Bu kitap ona ait)",

    "He is taking her to dinner.(Onu yemeğe götürüyor)",
  ];
  const ornek3 = [
    "It was mine.(O benimkiydi.)",
    "Is this bag yours? (Bu çanta seninki mi?.)",
    "Your house is bigger than ours.(Eviniz bizimkinden büyük)",
  ];
  const ornek4 = [
    "My school is very old.(Okulum çok eski.)",
    "I like your blouse (Bluzunu seviyorum.)",
    "These are her books.(Bunlar onların kitapları)",
  ];
  const ornek5 = [
    "I look at myself in the mirror every morning.(Ben her sabah aynada kendime bakarım.)",
    "Did you do your homework by yourself? (Sen ödevini kendin mi yaptın?)",
    "He has hurt himself.(O kendini incitti.)",
    "She made the cake herself.(Keki kendi yaptı)",
  ];

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>
          Öğrenmeye 0 dan Alfabeleri tanımak ile başlıyalım
        </Text>

        <View>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.lextotan.com/wp-content/uploads/2019/09/alphabet-1024x606.jpg",
            }}
          />
        </View>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>
          Cümleleri kurmak için özneler,nesneler ve zamirlere ihtiyaç duyarız.
          Gelin beraber öğrenelim
        </Text>

        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={{ fontSize: 10 }}
          />
          <Rows data={tableData} />
        </Table>

        <Text style={styles.text}>
          He erkekler için,She kadınlar için,It ise bitki,hayvan ve cansız
          varlıklar için kullanılır.
        </Text>
        <View style={{ ...styles.view, backgroundColor: "pink" }}>
          <Text style={{ ...styles.text, fontWeight: "bold", color: "white" }}>
            Kişi zamirleri (Subject Pronouns), cümlede özne görevinde yer alan
            sözcüklerdir. Personal pronouns olarak da bilinir. İsim yerine
            kullanılarak cümlede fiilden önce gelirler.
          </Text>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Subject pronoun + Verb
          </Text>
          <Text
            style={{
              ...styles.text,
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Örnek cümleleri inceleyelim
          </Text>
          {ornek1.map((cumle) => {
            return <Text key={cumle}>* {cumle}</Text>;
          })}
        </View>
        <View style={{ ...styles.view, backgroundColor: "green" }}>
          <Text style={{ ...styles.text, fontWeight: "bold", color: "white" }}>
            Nesne zamirleri (Object Pronouns), cümlede nesne görevinde yer alan
            sözcüklerdir. Cümlede fiilden sonra gelirler.
          </Text>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Subject pronoun + Verb + Object pronoun
          </Text>
          <Text
            style={{
              ...styles.text,
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Örnek cümleleri inceleyelim
          </Text>
          {ornek2.map((cumle) => {
            return <Text key={cumle}>* {cumle}</Text>;
          })}
        </View>
        <View style={{ ...styles.view, backgroundColor: "red" }}>
          <Text style={{ ...styles.text, fontWeight: "bold", color: "white" }}>
            İyelik zamirleri (Possessive Pronouns), aitlik veya sahiplik
            zamirleri olarak da bilinir. Türkçedeki aitlik bildiren ‘-ki’ ekini
            ifade eder. Bir nesnenin kime ait olduğunu belirtmek için
            kullanılır. Ancak arkasından herhangi bir isim gelmez.
          </Text>
          <Text
            style={{
              ...styles.text,
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Örnek cümleleri inceleyelim
          </Text>
          {ornek3.map((cumle) => {
            return <Text key={cumle}>* {cumle}</Text>;
          })}
        </View>
        <View style={{ ...styles.view, backgroundColor: "orange" }}>
          <Text style={{ ...styles.text, color: "white", fontWeight: "bold" }}>
            İyelik sıfatları (Possessive Adjectives) , Türkçe’de de karşılığı
            olan bu sözcükler için ilk dikkat etmeniz gereken kural iyelik
            sıfatlarından sonra mutlaka bir isim kullanılması gerektiğidir.
            Çünkü Possessive adjective cümlede anlam olarak ilgili nesnenin kime
            ait olduğunu ifade etmektedir.
          </Text>
          <Text
            style={{
              ...styles.text,
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Örnek cümleleri inceleyelim
          </Text>
          {ornek4.map((cumle) => {
            return <Text key={cumle}>* {cumle}</Text>;
          })}
        </View>
        <View style={{ ...styles.view, backgroundColor: "blue" }}>
          <Text style={{ ...styles.text, color: "white" }}>
            Yansıma zamirleri (Reflexive Pronouns), ‘kendi’ sözcüğünün öznelere
            göre çekimlenmesi sonucunda meydana gelir. Özneyi vurgulamak
            amacıyla ve hem eylemi yapan hem de eylemden etkilenen yani özne ve
            nesne aynı kişi olduğunda yansıma zamirleri kullanılır.
          </Text>
          <Text style={{ ...styles.text, fontStyle: "italic", fontSize: 20 }}>
            Örnek cümleleri inceleyelim
          </Text>
          {ornek4.map((cumle) => {
            return <Text key={cumle}>* {cumle}</Text>;
          })}
        </View>
        <Text style={{ ...styles.text, fontSize: 20 }}>
          İngilizcede cümle kurma yapısı:{" "}
        </Text>
        <Text>
          Öncesinde bu kelimeleri çok kullanıcağımız için anlamlarını öğrenelim.
          {"\n"}Verb=Fill {"\n"}Subject=Özne {"\n"}Object=Nesne{" "}
        </Text>
        <Text style={styles.text}>
          Not:Sadece cümlenin yapısına odaklanın.Auxiliary verb, verb yerine
          kullandığımız to be (am,is,are) fiillerini daha sonra öğreneceğiz
        </Text>
        <Text style={styles.text}>1)Olumlu cümle yapıs:</Text>
        <Text>
          Subject+Verb+Object {"\n"}*I am happy. (Ben mutluyum.){"\n"}*I like
          pizza.(Pizzayı severim.)
        </Text>

        <Text style={styles.text}>2)Olumsuz cümle yapıs:</Text>
        <Text>
          Subject+Verb+not+Object {"\n"}*I am not happy. (Ben mutlu değilim.)
          {"\n"}*I do not/don't like pizza.(Pizzayı sevmem.)
        </Text>
        <Text style={styles.text}>3)Soru cümlesi yapıs:</Text>
        <Text>
          Auxiliary verb+Subject+Verb+Object {"\n"}*Am I happy? (Ben mutlu
          muyum?){"\n"}*Do I like pizza?(Pizza sever miyim?.)
        </Text>

        <Text style={styles.text}>4)Olumsuz Soru cümlesi yapıs:</Text>
        <Text>
          Auxiliary verb+Not+Subject+Verb+Object {"\n"}*Is not you happy. (Mutlu
          değil misin?){"\n"}*Don't I like pizza.(Pizza sevmez miyim?.)
        </Text>

        <View
          style={{
            ...styles.view,
            backgroundColor: "red",
            height: 65,
            margin: 10,
          }}
        >
          <Text style={{ color: "white", padding: 5 }}>
            <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
            Ünite 1 bu kadardı. Bunu ısınma turları olarak düşün.Eğelenceli
            kısımlara geldik.Ünite 2 de görüşürüz:
          </Text>
        </View>
        <View>
         

        </View>
        <Text></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  image: {
    height: 250,
  },
  container: {
    margin: 10,
  },
  text: {
    marginBottom: 3,
    fontFamily: "serif",
    margin: 2,
    fontWeight: "bold",
  },
  head: { height: 90, backgroundColor: "#f1f8ff" },
  view: {
    marginBottom: 25,

    borderRadius: 10,
  },
});

export default Page1;
