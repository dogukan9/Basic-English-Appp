import React from 'react';

import {Text,View,StyleSheet,Button,FlatList,ScrollView,Image} from 'react-native';
import { Icon } from 'react-native-elements'
import { Table, Row, Rows } from 'react-native-table-component';


            
const Page2=props=>{
    const  tableData=[
        ["I","am"],
        ["You","are"],
        ["He","is"],
        ["She","is"],
        ["It","is"],
        ["We","are"],
        ["You","are"],
        ["They","are"]
 
 
      ];
      const  tableData2=[
        ["I","am not"],
        ["You","are not/aren't"],
        ["He","is not/isn't"],
        ["She","is not/isn't"],
        ["It","is not/isn't"],
        ["We","are not/aren't"],
        ["You","are not/aren't" ],
        ["They","are not/aren't"]
 
 
      ];

      const  tableData3=[
        ["Am","I"],
        ["Are","You"],
        ["Is","He"],
        ["Is","She"],
        ["Is","It"],
        ["Are,","We"],
        ["Are","You"],
        ["Are","They"]
 
 
      ];
      const ornek1=['"I am happy".("Ben mutluyum".)',
      '"He is tall ".("O(erkek) uzundur".)',
      '"They are Turkish".("Onlar Türk".)',
    
          
      ]; 

      const ornek2=['"I am not happy".("Ben mutluyum".)',
      '"He is not  tall ".("O(erkek) uzundur".)',
      '"They are not Turkish".("Onlar Türk".)',
    
          
      ]; 
      const ornek3=['"Am I happy?".("Ben mutlu muyum?".)',
      '"Is he tall?".("O(erkek) uzun mu?".)',
      '"Are they Turkish?".("Onlar Türk mü?".)',
    
          
      ]; 
      const ornek_incele=<Text style={{...styles.text,fontStyle:"italic",fontSize:20}}>Örnek cümleleri inceleyelim</Text>;
  
return(
   
    <ScrollView>
       <View>
      

         <View>
         <Text style={styles.header}>To Be Fiilleri</Text>

         <Text style={styles.text}>“to be” yani “olmak fiili” konusu bizim için çok önemli çünkü temel yapıdaki ilk cümlelerimizi bu yardımcı fiil sayesinde kuracağız. Tabi “to be”nin olmazsa olmazı kişi zamirleridir. Eğer bir önceki konu olan “kişi zamirleri” yani “personal pronouns” konusunu bilmiyorsanız, öncelikle 1. Üniteye bakmanızı öneririm.{"\n"}
         {"\n"}To be fiilleri öznelerden(subjects) hemen sonra kullandığımız bir kalıptır.To be fiillerimiz "Am","Is","Are" olmak üzere 3'e ayrılır.Bunlar özneden özneye değişiklik gösterir. 
         {"\n"} {"\n"} Aşağıdaki tabloda hangi öznede hangi to be fiili kullanılır gösterilmiştir.</Text>

         <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
        
     
          <Rows data={tableData} />
       

   
        </Table>
        <Text style={styles.text}>To be fiilleri durum bildiren yani isim cümlelerinde kullanılır. (ileride anlatılan Present Continues Tense'inde
        farklı bir kalıp olarakta kullanacağız){"\n"}
        </Text>
        
         {ornek1.map((cumle)=>{
         
            return(
             <Text key={cumle}>* {cumle}</Text>      
         )})}   

<Text>{"\n"}{"\n"}To be fiillerinin olumsuz formu</Text>
<Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
        
     
          <Rows data={tableData2} />
       

   
        </Table>

        {ornek_incele}
        {ornek2.map((cumle)=>{
         
         return(
          <Text key={cumle}>* {cumle}</Text>      
      )})}   

<Text>{"\n"}{"\n"}To be fiillerinin soru formu</Text>
<Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
        
     
          <Rows data={tableData3} />
       

   
        </Table>

        {ornek_incele}
        {ornek3.map((cumle)=>{
         
         return(
          <Text key={cumle}>* {cumle}</Text>      
      )})} 
      </View>





      <View>
       
       <Text style={styles.header}>{"\n"}Singular / Plural (Tekil / Çoğul)</Text>
       <Text style={styles.text}>İngilizce tekil ve çoğul kelimelerle ilgili kurallar ve uygulamalar Türkçe'dekinden farklıdır. Fakat en genel ve yaygın çoğul yapma şekli, ismin sonune "-s" takısı getirirek yapılır. Fakat düzensiz çoğalan isimler, aynı kalan isimler ve diğer kurallar Türkçe'deki kurallardan farklı olan bazı uygulamalardır. Ayrıca İngilizce'de sayılabilen ve sayılamayan isimler vardır ve sayılamayan isimler çoğul yapılamazlar{"\n"}
       {"\n"}
       Sayılabilen isimlerin sonuna -s takısı gelir. Ancak ismin son harfine bağlı olarak -s harfi bazı değişiklikler gösterebilir. Aşağıda isimlerin aldığı -s takıları ayrıntılı olarak belirtilmiştir.
       {"\n"}
       {"\n"}
       ● Sonu “ o “ ile biten isimler potato , tomato ( es ) alarak , patatoes , tomatoes
{"\n"}
● Sonu “ x “ ile biten isimler box , fox ( es ) alarak , boxes , foxes
{"\n"}
● Sonu “ s “ ile biten isimler glass , class ( es ) alarak , glasses , classes
{"\n"}
● Sonu “ f , fe “ ile biten isimler shelf , knife ( ves ) alarak , shelves , knives
{"\n"}
● Sonu “ y “ ile biten isimler city ( ies ) alarak , cities , stories
{"\n"}
● Sonu “ ch , sh “ ile biten isimler watch ( es ) alarak , watches , dishes
{"\n"}
● Sonu “ y “ ile bitip kendinden önce “ bir sesli harf “ gelmesi durumunda toy ( s ) alarak , toys , boys
{"\n"}
● Bunlar dışında kalanlar ( s ) alarak , books , pens alarak çoğul yapılır.
       {"\n"}
       {"\n"}
       ► Bir kural eşliğinde formülize edilebilen herşey İngilizce Gramerinde “ düzenli “ diye adlandırılır.
       {"\n"}
Yukarıda belli kurallar çerçevesinde çoğul yapılabilen isim katogorileri gösterilmiştir.Belli bir kural sınıfına girmeyen ve bunun sonucunda ayrı ayrı ezberlenmek zorunda kalınan kelimeler ise “ düzensiz “ yapılardır. Aşağıda “ s ve türevleri “ ile çoğul yapılamayan ayrı ayrı ezberlemek zorunda olduğumuz “ düzensiz isimler “ yer almaktadır.
{"\n"}  {"\n"}
●man adam - men adamlar
{"\n"}
●man kadın - women kadınlar
{"\n"}
●person kişi - people kişiler
{"\n"}
●foot ayak - feet ayaklar
{"\n"}
●fish balık - fish balıklar
{"\n"}
●louse bit - lice bitler
{"\n"}
●child çocuk - children çocuklar
{"\n"}

       </Text>
 
 
       </View>
      <View>
       
      <Text style={styles.header}>{"\n"}A/An kullanımı</Text>
      <Text style={styles.text}>Gel gelelim cümlelerde sıklıkla görebileceğimiz bir kelimeye 'a/an'.{"\n"}
      ‘’A ve an ‘’ isimlerin önüne gelen ve bu ismin diğer bütün benzer cisimlerinden bir tanesi olduğunu belirtmeye yarayan bir articles olarak bilinir. Örneğin hiçbir ayrım yapmadan sadece bir tanesini seçip mutfaktan alacağınız herhangi bir bardak, bu kullanımı en kısa yoldan özetleyecektir.
      {"\n"}
      {"\n"}
      ‘’a ve an’’ kullanımı ise bazı kurallara uygun olarak tercih edilmektedir. O halde ilgili isim için herhangi bir anlamı taşıyan bu articles kullanım kurallarını incelemeye başlayalım.
      {"\n"}
      {"\n"}
      İsimler sessiz bir harf ile başlıyorsa; ismin önüne (a), isim sesli bir harfle başlıyorsa da (an) getirilir.Aynı zamanda sessiz olup fakat telafuz ettiğimizde
      ilk önce sesli bir harj çıkıyorsa ağzımızdan an kullanabiriliz. Bu kurala bağlı olarak dikkat edilmesi gereken iki durum söz konusudur. Birincisi a ve an hiçbir zaman tek başına bulunan bir sıfat ya da zarfın önüne kullanılmaz; tamlama olması gerekmektedir. İkinci olarak ise a ve an cümle içinde herhangi bir anlamı taşıdığı için isimler muhakkak tekil olmalıdır.
      {"\n"}
      {"\n"}

      ●a child (bir çocuk )(Doğru){"\n"} {"\n"}  
      ●a book  (bir kitap)(Doğru){"\n"}    {"\n"} 
      ●an apple (bir elma)(Doğru){"\n"}    {"\n"} 
      ●an example (bir örnek) (Doğru){"\n"}    {"\n"} 
      ●an engineer (bir mühendis) (Doğru){"\n"}    {"\n"} 
      ●a people (Yanlış)(bir insanlar olmaz){"\n"}    {"\n"} 
      ●a eagle (Yanlış)(an eagle olmalı) {"\n"}  {"\n"} 
      ●an hour (Doğru)(telafuz ettiğimizde hour değil our diye okuruz o yüzden an kullanımı doğrudur.) {"\n"} 


      </Text>


      </View>
      <View style={{...styles.view,backgroundColor:"red",height:95,margin:10}}>
              <Text style={{color:"white",padding:5}}><Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>Ünite 2 nin sonuna geldik.Ünite 2 de To be fiillerini Tekil-Çoğul kullanımını ve A/An kullanımını öğrendik.
Bunları pekiştirmek için basit cümleler kurmayı dene.Unutma basit olan şeyler her zaman büyük etkiler yaratır!
Ünite 3 te görüşmek üzere.
</Text>
              </View>
         <Text></Text>
         <Text></Text>

        
       
        </View>            
    </ScrollView>
   
)




}

const styles = StyleSheet.create({
 image:{
     height:120,
     flex:1,
     
 },
 header:{
 margin:10,
 fontWeight:"bold",
 fontSize:20
 },
 head:{
      height:90, 
      backgroundColor: '#f1f8ff'
    },
text:{
  margin:6
}
})

export default Page2;