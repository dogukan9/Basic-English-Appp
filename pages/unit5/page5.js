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



const Page5 = (props) => {
 
    const tableHead = [
        "Subject (Özne)",
        "To be",
        "Verb+ing (Fiil)",
      ];
      const  tableData=[
        ["I","am" ,"going to school."],
        ["You","are","eating pizza."],
        ["He","is" ,"waiting for you"],
        ["She","is" ,"watching movie"],
        ["It","is","having fun"],
        ["You","are","playing well"],
        ["We","are","doing our homeworks"],
        ["They","are","taking English class"]
 
 
      ];

      const tableHead2 = [
        "Subject (Özne)",
        "To be not",
        "Verb+ing (Fiil)",
      ];
      const  tableData2=[
        ["I","am not" ,"going to school."],
        ["You","are not","eating pizza."],
        ["He","is not" ,"waiting for you"],
        ["She","is not" ,"watching movie"],
        ["It","is not","having fun"],
        ["You","are not","playing well"],
        ["We","are not","doing our homeworks"],
        ["They","are not","taking English class"]
 
      ];

      const tableHead3 = [
        "To be",
        "Subject (Özne)",
        "Verb+ing (Fiil)",
      ];
      const  tableData3=[
        ["Am","I" ,"going to school."],
        ["Are","You","eating pizza."],
        ["Is","He","waiting for you"],
        ["Is","She" ,"watching movie"],
        ["Is","It","having fun"],
        ["Are","You","playing well"],
        ["Are","We","doing our homeworks"],
        ["Are","They","taking English class"]
 
 
      ];
    return (
    <ScrollView>
        <View>
     <View><Text style={styles.header}>
         Present Continues Tense

         </Text></View>

         <View><Text style={styles.text}>
         Adından da anlaşılacağı üzere “Continuous” ifadesinden önce gelen “Present” ifadesi hem be+Ving kalıbında “be” yardımcı fiilinin (am, is, are)present şeklinde kullanılması gerektiğini hem de devam eden olayın geçiş zamanının “şu an” olduğunu ifade eder..
           {"\n"}{"\n"}
           Olayın ne zaman başladığı ya da ne kadar devam ettiği önemli değildir. Sadece bir olayın konuşma anında devam etmekte olduğunu vurgular. O halde; bu zaman konuşma anında devam etmekte olan eylemler için kullanılır. Bu eylem bir süredir yapılmakta olan ama konuşma anında yapılmamakta olan bir olay da olabilir.   </Text></View>
        
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

            
            </View>
    
            <View> 
            <Text style={styles.text}>{"\n"}{"\n"}Olumsuz Cümle Yapısı:{"\n"}{"\n"}Olumsuz cümlelerde “not” sözcüğünden yararlanılır. Bu sözcük, is ve are ile birleştirilerek kısaltılabilir, ancak am ile kısaltma yapılmaz.</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead2}
            style={styles.text}
            textStyle={{ fontSize: 10 }}
          />
          <Rows data={tableData2} style={styles.text}/>
        </Table>

            
            </View>


            <View> 
            <Text style={styles.text}>{"\n"}{"\n"}Soru Cümle Yapısı:{"\n"}{"\n"}Soruda am, is ve are yardımcı fiilleri cümlenin en başına gelir. Cümlenin geri kalanı aynen devam eder. </Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead3}
            style={styles.text}
            textStyle={{ fontSize: 10 }}
          />
          <Rows data={tableData3} style={styles.text}/>
        </Table>

            
            </View>

         <View>
          <Text style={styles.header}>Şimdiki Zaman (Present Continuous Tense) Hangi Durumlarda Kullanılır.</Text>
           <Text style={styles.text}>Present Continuous Tense kendinden sonra kullanılan bir gelecek zaman ifadesi ile birlikte önceden planlanmış bir eylemin gelecekte yapılacağı anlamını verir.</Text>
         <Text>
         Örneğin;
         {"\n"}{"\n"}
●We are having two exams this week.
(Bu hafta iki sınav oluyoruz (olacağız).) {"\n"}{"\n"}
●We are spending next winter in Antalya.
(Gelecek kışı Antalya’da geçiriyoruz (geçireceğiz).) {"\n"}{"\n"}
●Why are you going to İzmir next week?
(Neden gelecek hafta İzmir’e gidiyorsun (gideceksin)?) {"\n"}{"\n"}
●I am not going to the party tonight, I have a lot to do.
(Bu akşam partiye gitmiyorum (gitmeyeceğim), yapacak çok işim var.) {"\n"}{"\n"}
●We are starting to fix the roof of our house tomorrow.
(Yarın evimizin çatısını tamir etmeye başlıyoruz (başlayacağız).) {"\n"}{"\n"}
●She is not going out with me next week.
(Gelecek hafta benimle çıkmıyor (çıkmayacak).) {"\n"}{"\n"}
●We are giving a party at the end of the semester, aren’t we.
(Dönem sonunda parti veriyoruz (vereceğiz), değil mi?) {"\n"}{"\n"}

Present Continuous Tense always, constantly, forever gibi zarflar ile birlikte sürekli tekrarlayan ve genelde bizi rahatsız eden eylemler için kullanılır.
{"\n"}{"\n"}
Örneğin;
{"\n"}{"\n"}
●Some students are always coming late to class.
(Bazı öğrenciler daima derse geç geliyorlar.){"\n"}{"\n"}
●The baby is crying constantly and it makes me angry.
(Bebek sürekli olarak ağlıyor ve bu benim sinirimi bozuyor.){"\n"}{"\n"}
vThe doctor is examining more than seventy five patients every day.
(Doktor her gün yetmiş beşten fazla hastayı muayene ediyor.){"\n"}{"\n"}
●He is always asking those stupid questions.
(O daima aptalca sorular soruyor.){"\n"}{"\n"}
●My little son is always watching the same cartoon.
(Küçük oğlum daima aynı çizgi filmi seyrediyor.){"\n"}{"\n"}
●Why are you always accusing your friends of cheating during the exams?
(Sen neden daima arkadaşlarını sınavda kopya çekmekle suçluyorsun?){"\n"}{"\n"}
●I don’t like them, because they are always complaining about my proposals.
(Onlardan hoşlanmıyorum, çünkü sürekli önerilerimden şikâyet ediyorlar.){"\n"}{"\n"}
         </Text>
         <Text style={styles.text}>
         <Text style={{color:"red"}}>Not:</Text> 
{"\n"}{"\n"}
1.Sonu -e ile biten fiillere -ing eklerken -e kaldırılır. 

He is coming. (come){"\n"}{"\n"}
She is tuning. (type){"\n"}{"\n"}
2.Ünlü + Ünsüz şeklinde biten tek heceli fiiller -ing alırken son harfleri ikileşir. 
{"\n"}{"\n"}
He is running. (run){"\n"}{"\n"}
She is swimming.(swim){"\n"}{"\n"}
3.Bazı fiiller Present Continuous Tense ile kullanılmaz. Bu filleler “state verbs” olarak adlandırılır. Şimdiki zaman yapıları eylemlerin fiziksel ve görsel olarak yapıldığını gösterir. Bu sebeple soyut düşünmek, anlamak, sahip olmak ve sevmek gibi soyut fiiller continuous yapısında kullanılamaz.
{"\n"}{"\n"}
Bu fiillerin bazılarını başlıklar altında gösterecek olursak;
{"\n"}{"\n"}
Mental  State (Mental (Zihinsel) durumları anlatmak için fiiller)
{"\n"}{"\n"}
Know, realize, understand, recognize, believe, mean, feel, need, want, forget, suppose, think, imagine, remember, doubt, desire.
{"\n"}{"\n"}
Örneğin;
{"\n"}{"\n"}
He is wanting to buy a new car. ❌{"\n"}{"\n"}
He wants to buy a new car.       ✅{"\n"}{"\n"}
         </Text>
         <View>
         <Text style={styles.header}>
         Emotional State (Duyguları belirten fiiller)
         </Text>
         <Text style={styles.text}>
         Love, like, fear, prefer, hate, dislike, mind, surprise, care, appreciate, amaze, envy, please, astonish 

         {"\n"}{"\n"}
         </Text>
         </View>


         <View>
         <Text style={styles.header}>
         Possession State (Sahip Olma)
         </Text>
         <Text style={styles.text}>
         Have, belong, possess, own.
         {"\n"}{"\n"}
         </Text>
         </View>


         <View>
         <Text style={styles.header}>
         Sense, Perception (Duyu ve Algılama ile ilgili fiiller)
         </Text>
         <Text style={styles.text}>
         Taste, smell, hear, feel, see.
         {"\n"}{"\n"}
         </Text>
         </View>
         </View>
         </View>
        <View>
    <View>
        <Text style={styles.header}>Adverb of time (Zaman zarfları)

</Text>
        <Text style={styles.text}>İngilizce cümle kurarken olmazsa olmazlarımız özne, yüklem ve gerekliyse bir de nesne. Ama tabi sadece bu üç önemli parçayla derdimizi anlatamıyorsak ek olarak başka kelimeler de kullanmamız gerekiyor.
  {"\n"}{"\n"}Mesela zaman çekimleri kullanmışsak bile eylemin yapıldığı zamanı özel olarak söylemek istiyorsak cümleye bir de zaman zarfı eklememiz gerekebiliyor.
  Mesela zaman çekimleri kullanmışsak bile eylemin yapıldığı zamanı özel olarak söylemek istiyorsak cümleye bir de zaman zarfı eklememiz gerekebiliyor. Bu yazımızda da İngilizce Zaman Zarfları konusuna değineceğiz.
 {"\n"}{"\n"}
 İngilizce Zaman Zarfları size sadece eylemin yapıldığı zamanı değil, aynı zamanda bu eylemin hangi sıklıkta ya da ne kadar uzun süreyle yapıldığı bilgisini vermektedir. Şimdi bu 3 farklı görevi olan İngilizce Zaman Zarfları nelerdir öğrenelim.
 


</Text>
<Text style={styles.header}>Eylemin Ne Zaman Yapıldığını Söyleyen Zaman Zarfları</Text>
  <Text style={styles.text}>Cümlede bahsi geçen eylemin ne zaman yapıldığını anlatan zaman zarfları, genellikle cümlenin en sonunda yer alır </Text>    
   <Text style={styles.text}>
   I went to the cinema yesterday.
   ●She is going to repair the car tomorrow.{"\n"}
   ●It will rain today.{"\n"}
   ●I will call you later.{"\n"}
   ●She needs to leave now.{"\n"}
   ●My friend saw that movie last year.{"\n"}{"\n"}
   Bu türdeki zaman zarfları cümlenin sonunda yer aldığında anlamda herhangi bir değişiklik olmaz. Fakat aynı zarf cümlenin sonuda değil de başına getirilirse cümlenin tamamı aslında eylemin yapıldığı zamanı özel olarak vurgulamak için kurulmuş demektir.
   {"\n"}{"\n"}Benzer şekilde, bazı zarflar resmi yazışmalarda yüklemden hemen önce konmaktadır. Bu türden bir kullanım yalnızca resmi yazışmalarda geçer.
   {"\n"}{"\n"}
   ● Later Jane ate some night snacks. (cümlede daha çok yeme eyleminin ne zaman yapıldığı anlatılmak istenmiş)
   ●Jane later ate some night snacks. (bu cümledeki zarfın konumu, cümlenin resmi bir yerde geçtiğinin habercisi, mesela bir polis raporunda)
   ●Jane ate same night snacks later. (bu cümlede zarfın sona gelmedi cümledeki zamanın vurgulanmadığını anlatıyor, dinleyicinin dikkati zamana çekilmemiş)

   </Text>

   <Text style={styles.header}>Eylemin Süresini Anlatan Zaman Zarfları</Text>
<Text style={styles.text}>Eylemin yer aldığı zaman diliminin uzunluğunu anlatan zaman zarfları cümlenin en sonunda yer alır.{"\n"}{"\n"}
{"\n"} ●I stayed at home all day.{"\n"}
●My mother lived in South Korea for a year.{"\n"}
●I have been going to this restaurant since 1999.{"\n"}
{"\n"}

</Text>

<Text style={styles.header}>Eylemin Hangi Sıklıkta Yapıldığını Anlatan Zaman Zarfları</Text>
<Text style={styles.text}>Eylemin gerçekleştiği sıklığı anlatan zaman zarfları genellikle yüklemden hemen önce AMA auxillary verb dediğimiz zaman çekimini bildiren eklerden sonra gelir (mesela be, have, may ya da must). {"\n"}{"\n"}
●She often goes there.{"\n"}
●He never sleeps in the dark.{"\n"}
●You must always fasten your seat belt.{"\n"}
●I am seldom early to any meeting.{"\n"}
●She rarely cooks.
{"\n"}{"\n"}
Bazı zaman zarfları bize eylemin gerçekleştiği sıklığı kesin bir sayıyla bildirir. Bu zarflar da genellikle cümlenin en sonunda kullanılmaktadır.
{"\n"}{"\n"}
●This journal is published monthly.{"\n"}
●He saw that movie ten times.{"\n"}
●I work five days a week.{"\n"}
●My friends visit me once a month.{"\n"}
</Text>



    
     </View>
     

        </View>
        
       <View style={{...styles.view,backgroundColor:"red",height:95,margin:10}}>
               <Text style={{color:"white",padding:5}}><Icon
   name='sc-telegram'
   type='evilicon'
   color='#517fa4'
 />Ünite 5 nin sonuna geldik.Ünite 5 de Şimdiki zamanı ve zaman zarflarını öğrendik.
 Bunları pekiştirmek için basit cümleler kurmayı dene.Unutma basit olan şeyler her zaman büyük etkiler yaratır!
 Ünite 6 te görüşmek üzere.
 </Text>
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

export default Page5;
