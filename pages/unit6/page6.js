import React from "react";
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



const Page6 = (props) => {
 
    const tableHead = [
        "Subject (Özne)",
        "Will",
        "Verb (Fiil)",
      ];
      const  tableData=[
        ["I","will" ,"go to school."],
        ["You","will","eat pizza."],
        ["He","will" ,"wait for you"],
        ["She","will" ,"watch movie"],
        ["It","will","be okay"],
        ["You","will","play well"],
        ["We","will","do our homeworks"],
        ["They","will","take English class"]
 
 
      ];

      const tableHead2 = [
        "Subject (Özne)",
        "Will not/Won't",
        "Verb (Fiil)",
      ];
      const  tableData2=[
        ["I","will not/won't" ,"go to school."],
        ["You","will not/won't" ,"'eat pizza."],
        ["He","will not/won't" ,"wait for you"],
        ["She","will not/won't" ,"watch movie"],
        ["It","will not/won't","be okay"],
        ["You","will not/won't","play well"],
        ["We","will not/won't","do our homeworks"],
        ["They","will not/won't","take English class"]
 
      ];

      const tableHead3 = [
        "Will",
        "Subject (Özne)",
        "Verb+ing (Fiil)",
      ];
      const  tableData3=[
        ["Will","I" ,"go to school."],
        ["Will","You","eat pizza."],
        ["Will","He","wait for you"],
        ["Will","She" ,"watch movie"],
        ["Will","It","have fun"],
        ["Will","You","play well"],
        ["Will","We","do our homeworks"],
        ["Will","They","take English class"]
 
 
      ];
    return (
    <ScrollView>
        <View>
     <View><Text style={styles.header}>
         Future Tense

         </Text>
         <Text style={styles.text}>
         Simple Future Tense – İngilizce gelecek zaman ile cümle kurarken 2 adet yardımcı fiil bulunur. ‘’Will’’ ve ‘’Shall’’ bu ingilizce zaman için kullandığımız yardımcı fiili oluşturur. Buna karşın günümüzde çoğunlukla will yardımcı fiilinin kullanımının arttığını ‘’shall’’ yardımcı fiilinin ise pek kullanılmadığını söyleyebiliriz.
         {"\n"}
         </Text>
         </View>

         <View> 
            <Text style={styles.text}>Olumlu Cümle Yapısı:</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead}
            style={styles.text}
            textStyle={{ fontSize: 10 }}
       />
          <Rows data={tableData} style={styles.text}/>
        </Table>

            <Text style={styles.text}>Future Tense Kısaltmalar
Üçüncü tekil şahıslardan ‘’it’’ ise will yardımcı fiili ile kullanıldığında kısaltılmaz. Onun dışında tüm öznelerin will yardımcı fiili ile olumlu ve olumsuz kısaltmaları aşağıdaki gibidir.
{"\n"}{"\n"}
● I will = I’ll{"\n"}{"\n"}
● You will = you’ll{"\n"}{"\n"}
● He will = he’ll{"\n"}{"\n"}
● She will = she’ll{"\n"}{"\n"}
● They will = they’ll{"\n"}{"\n"}
● Will not = won’t{"\n"}{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
Simple Future Tense Shall Kullanımı{"\n"}{"\n"}</Text>
Modern İngilizce’de shall kullanımı büyük oranda azalmıştır. Günümüzde çoğunlukla resmi yazışmalarda kullanılır. ‘’shall’’ yardımcı eki; bir teklif, öneri ya da tavsiye gibi durumlarda sadece birinci tekil ve çoğul şahıslarda (I ve We) kullanılır. Diğer şahıslarla (you, he, she, they) kullanılması ise sadece edebi ve şiirsel durumlarda geçerlidir.
{"\n"}{"\n"}
● I shall go to school. – Okula gideceğim.{"\n"}{"\n"}
● Shall we drink a cup of coffee. – Bir fincan kahve içelim mi?{"\n"}{"\n"}
</Text>
            </View>
   
    <View>
        <Text style={{fontSize:15,margin:6,fontWeight: "bold"}}>
        Future Tense Kullanımı
        </Text>
        <Text style={styles.text}>
        1. Future Tense ile kurulan cümlelerde herhangi bir planlama ya da niyet söz konusu değildir. Gelecekte şartlardan dolayı meydana gelmesi beklenen olaylardan bahsederken kullanılır. Bu tip cümlelerde hem will hem de shall yardımcı fiili kullanılabilir. Buna karşın son zamanlarda resmi yazışmalar haricinde shall kullanımdan düşmüştür.
        {"\n"}{"\n"}   
        ●    I will be a father. – Baba olacağım. {"\n"}{"\n"}   
        ●Winter will come again. – Kış yine gelecek. {"\n"}{"\n"}   
2. Konuşma sırasında gelecekle ilgili ani bir karar verildiğinde will yardımcı fiili kullanılır. Bu eylem ise kesinlikle önceden planlanmış ya da kesinleşmiş eylemler için kullanılmaz.
{"\n"}{"\n"}      
●The phone is ringing. – Telefon çalıyor. {"\n"}{"\n"}   
●I will answer it. – Ben bakarım. {"\n"}{"\n"}   

●I want to tell you something. But it is secret. – Sana bir şey söylemek istiyorum. Fakat sır. {"\n"}{"\n"}   
●I promise. I won’t tell anybody. Söz veriyorum. Kimseye söylemeyeceğim. {"\n"}{"\n"}   

●What would you like to have to drink? – İçmek için ne alırdınız? {"\n"}{"\n"}   
●I will have a cup of coffee, please – Ben bir bardak kahve alayım {"\n"}{"\n"} 
3. Gelecek ile ilgili tahminde bulunurken, ümit ederken ya da endişe duyarken gelecek zaman eki kullanılır. Bu gibi anlam ifade eden cümlelerde genellikle ‘’if, when, as soon as, while’’ gibi bağlaçlar kullanılarak anlam pekiştirilir.  {"\n"}{"\n"} 

●I am sure, I will win. – Eminim kazanacağım. {"\n"}{"\n"} 
●She won’t probably pass her class. – O muhtemelen sınıfını geçemeyecek. {"\n"}{"\n"} 
●It will snow tomorrow. – Yarın kar yağacak. {"\n"}{"\n"} 

        </Text>
   
    
    </View>
      
       <View>
           <Text style={[styles.header]}>
           Prepositions-(İlgeçler)
           </Text>
           <Text style={styles.text}>

           İngilizce'de ilgeçlerin çok değişik türlerde kullanımları vardır. Bu yüzden preposition'ların öğrenilmesi için mutlaka örnekler üzerinden çalışmak gerekir. Türkçeleri bazen farklı farklı olacağından Türkçe açıklamalı İngilizce örnekler üzerinden çalışmak faydalı olur. Aşağıda kategoriler halinde verdiğimiz örneklerin Türkçe açıklamalarında, ilgeçin verdiği anlam kalın yazılmıştır. Böylece cümleye kattığı anlam kolayca öğrenilebilir.
           </Text>
           <View>
               <Text style={styles.header}>YER / Yön</Text>
        <Text style={styles.text}>

<Text style={{color:"darkblue"}}>
• Across {"\n"}{"\n"}
</Text>
- Her house is <Text style={{color:"red"}}>across</Text> the street.  (Evi caddenin <Text style={{color:"red"}}>karşısındadır</Text>.){"\n"}{"\n"}

- They live  <Text style={{color:"red"}}>across</Text> the street from you.  (Sizin  <Text style={{color:"red"}}>karşınızdaki</Text> caddede yaşarlar.)    

{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• After {"\n"}{"\n"}
</Text>
- The first street  <Text style={{color:"red"}}>after</Text> the bridge is our street.  ((Köprüden <Text style={{color:"red"}}>sonraki </Text> ilk cadde bizimki.){"\n"}{"\n"}

-Put a period  <Text style={{color:"red"}}>after</Text> each sentence.  (Her cümleden  <Text style={{color:"red"}}>sonra</Text> boşluk bırakın.)    
{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• Against {"\n"}{"\n"}
</Text>
-His bicycle was leaning <Text style={{color:"red"}}>against</Text> the fence.  ((Bisikleti çit<Text style={{color:"red"}}>e</Text> dayanyordu.){"\n"}{"\n"}

-Don't lean  <Text style={{color:"red"}}>against</Text> the stove.  (Sobaya <Text style={{color:"red"}}>doğru</Text> dayanma.)   
   
{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• Around {"\n"}{"\n"}
</Text>
-The shop is just  <Text style={{color:"red"}}>around</Text> the corner.  ((Dükkan hemen köşenin <Text style={{color:"red"}}>arkasında</Text>.){"\n"}{"\n"}

-Let's take a walk <Text style={{color:"red"}}>around</Text> the park.  (Hadi parkın <Text style={{color:"red"}}>çevresinde</Text> yürüyüş yapalım.)   
   
{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• At {"\n"}{"\n"}
</Text>
-She is <Text style={{color:"red"}}>at</Text> the store.  ((O <Text style={{color:"red"}}>dükkanda</Text>.){"\n"}{"\n"}

-She is a student <Text style={{color:"red"}}>at</Text> a small university.  (O küçük bir ünicersite<Text style={{color:"red"}}>de </Text>öğrenci.)   
        
{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• Before {"\n"}{"\n"}
</Text>
-I have your assignment <Text style={{color:"red"}}>before</Text> me now.  (((Şu anda ödevin <Text style={{color:"red"}}>önümde</Text> duruyor.){"\n"}{"\n"}

-In giving dates, place the month <Text style={{color:"red"}}>before</Text> the day.  (Randevu verirken günden <Text style={{color:"red"}}>önce </Text>ayı yazın.)   
{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• Above {"\n"}{"\n"}
</Text>
-This city is three thousand feet <Text style={{color:"red"}}>above</Text> sea level.  (((Bu şehir deniz seviyesinin üç bin fit <Text style={{color:"red"}}>üzerinde</Text>.){"\n"}{"\n"}

-Your name is <Text style={{color:"red"}}>above</Text> mine on list.  (Senin ismin listede benimkinin <Text style={{color:"red"}}>üstünde </Text>.)   
        

{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• Between {"\n"}{"\n"}
</Text>
-His house is <Text style={{color:"red"}}>between</Text> the bank and the school.  (Onun evi bankayla okulun <Text style={{color:"red"}}>arasındadır</Text>.){"\n"}{"\n"}

-Helen is sitting  <Text style={{color:"red"}}>between</Text> Jack and Tom.  (Helen Jack ile Tom <Text style={{color:"red"}}>arasında </Text>oturuyor.)   


{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• By {"\n"}{"\n"}
</Text>
-The matches are over there <Text style={{color:"red"}}>by</Text> the cigarettes.  (Kibritler orada sigaraların <Text style={{color:"red"}}>yanında</Text>.){"\n"}{"\n"}

-That house  <Text style={{color:"red"}}>by</Text>  the lake is her dream house.  (Gölün <Text style={{color:"red"}}>yanındaki </Text>bu ev onun hayalindeki evdir.)   

{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• In {"\n"}{"\n"}
</Text>
-She is sitting in a leather chair <Text style={{color:"red"}}>in</Text> the lobby.  (O lobide deri bir sandalye <Text style={{color:"red"}}>de</Text> oturuyor.){"\n"}{"\n"}

-She was sleeping <Text style={{color:"red"}}>in</Text> an armchair.  (O bir koltuk <Text style={{color:"red"}}>ta </Text>uyuyordu.)   

{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• In  front of{"\n"}{"\n"}
</Text>
-The ball stopped <Text style={{color:"red"}}>in front of</Text> the car.  (Top arabanın<Text style={{color:"red"}}>önünde</Text> durdu.){"\n"}{"\n"}

-There is a car parked <Text style={{color:"red"}}>in front of</Text> my house.  (Evimin <Text style={{color:"red"}}>önünde </Text>parketmiş bir araba var.)   
     
{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• Inside{"\n"}{"\n"}
</Text>
-It is warmer  <Text style={{color:"red"}}>inside </Text> the house.  (Evin <Text style={{color:"red"}}>içi</Text> daha sıcak.){"\n"}{"\n"}

-These plants should be kept <Text style={{color:"red"}}>inside </Text>the house.  (Bu bitkiler evin<Text style={{color:"red"}}>içinde </Text>muhafaza edilmelidir.)   
      
{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• On{"\n"}{"\n"}
</Text>
-She sat  <Text style={{color:"red"}}>on </Text> the sofa.  (O koltuğ<Text style={{color:"red"}}>a</Text> oturdu.){"\n"}{"\n"}

-Put a stamp <Text style={{color:"red"}}>on </Text>the envelope.  (Zarfın <Text style={{color:"red"}}>üzerine </Text>bir pul yapıştır.)   
   

{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• To{"\n"}{"\n"}
</Text>
-Martha went <Text style={{color:"red"}}>to </Text>school today.  (Martha bugün okul<Text style={{color:"red"}}>a</Text> gitti.){"\n"}{"\n"}

-Attach the rope <Text style={{color:"red"}}>to </Text>the bumper of the car.  (İpi arabanın tamponunun <Text style={{color:"red"}}>üzerine </Text>bağla.)   
   

{"\n"}{"\n"}
<Text style={{color:"darkblue"}}>
• Through{"\n"}{"\n"}
</Text>

-She took a walk  <Text style={{color:"red"}}>through  </Text>the park.  (Parkın <Text style={{color:"red"}}>içinden </Text>yürüdü.)   
    
    </Text>
</View>  
<View style={{...styles.view,backgroundColor:"red",height:95,margin:10}}>
               <Text style={{color:"white",padding:5}}><Icon
   name='sc-telegram'
   type='evilicon'
   color='#517fa4'
 />Ünite 6 nin sonuna geldik.Ünite 6 de Gelecek zamanı ve yer yön edatlarını öğrendik.
 Bunları pekiştirmek için basit cümleler kurmayı dene.Unutma basit olan şeyler her zaman büyük etkiler yaratır!
 </Text>
               </View>
   
    </View>
    


               </View>
          <Text></Text>
          <Text></Text>
 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    text:{
        margin:10
    },
    header:{
        margin:10,
        fontWeight: "bold",
        fontSize: 20
    }
});

export default Page6;
