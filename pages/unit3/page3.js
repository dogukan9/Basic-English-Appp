import React from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import { Icon } from 'react-native-elements'

const Page3=props =>{
    const tableHead = [
        "Subject (Özne)",
        "Verb (Fiil)",
      ];
      const  tableData=[
        ["I","go to school."],
        ["You","like pizaa."],
        ["He","hate(s) you"],
        ["She","has a car"],
        ["It","look(s) awesome"],
        ["You","play well"],
        ["We","do our homeworks"],
        ["They","sell shoes"]
 
 
      ];

      const tableHead2= [
        "Subject (Özne)",
        "Auxiliary Verb (Yardımcı fiil)",
        "Verb (Fiil)",
      ];

      const  tableData2=[
        ["I","don't","go to school."],
        ["You" ,"don't","like pizza."],
        ["He","doesn't","hate you"],
        ["She","doesn't","have a car"],
        ["It",,"doesn't","look awesome"],
        ["You","do't","play well"],
        ["We","don't","do our homeworks"],
        ["They","don't","sell shoes"]
 
 
      ];

      const tableHead3= ["Auxiliary Verb(Yardımcı fiil)",
        "Subject (Özne)",
        "Verb (Fiil)",
      ];

      const  tableData3=[
        ["Do","I","go to school?"],
        ["Do","You","like pizaa?"],
        ["Does","He","hate(s) you?"],
        ["Does","She","has a car?"],
        ["Does","It","look(s) awesome?"],
        ["Do","You","play well?"],
        ["Do","We","do our homeworks?"],
        ["Do","They","sell shoes?"]
 
 
      ];
return(
<ScrollView>
  
<View>
  <Text style={styles.text}>Artık zamanlara geçme vakti.İngilizcede kurulan cümlelerin yapısı zamana göre değişiklik göstermektedir.
      Bu ünitede anlatılan zamanımız Geniş zaman(Simple Present Tense) dir.Hadi öğrenelim şu Geniş Zamanı(Present Tense).
  </Text>
  <Text style={styles.header}>Geniş Zaman (Simple Present Tense)</Text>
  <Text style={styles.text}>Simple Present, genel ifadeleri belirtirken yaygın olarak tercih edilen bir zaman dilimidir.
  Örneklerle beraber daha net anlayacaksınız. Fakat öncesinde geniş zamanın cümle yapısını öğrenelim.{"\n"}{"\n"}
  Olumlu cümlelerde:{"\n"}
  
  </Text>

  <View>
  <Text style={{fontSize:19,margin:6}}>
        Olumlu cümlesi yapısı:
       </Text>
  <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead}
            style={styles.text}
            textStyle={{ fontSize: 10 }}
          />
          <Rows data={tableData} style={styles.text}/>
        </Table>

        <Text style={styles.text}>
        Tabloda farkındaysanız he,she ve it'te fiilin sonu s takısı getirdik.
        Cümleleri incelediğiniz üzüre sırasıyla.{"\n"}{"\n"}
        Okula giderim.{"\n"}
        Sen pizza seversin.{"\n"}
        O senden nefret ediyor.{"\n"}
        Onun bir arabası var.{"\n"}
        O harika görünüyor{"\n"}
        İyi oynuyorsunuz.{"\n"}
        Ödevlerimizi yaparız.{"\n"}
        Onlar ayakkabı satar{"\n"}
        </Text>
        </View>

  
  
       <Text style={styles.text}>
           Olumsuz cümlelerde geniş zaman yardımcı fiilleri devreye girer.
           Özneden hemen sonra fiilden hemen önce yazılırlar.
       </Text>

       <View>
       <Text style={{fontSize:19,margin:6}}>
        Olumsuz cümlesi yapısı:
       </Text>
  <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead2}
            style={styles.text}
            textStyle={{ fontSize: 10}}
          />
          <Rows data={tableData2} style={styles.text}/>
        </Table>
        <Text style={styles.text}>I,You,We,They de yardımcı fiil olarak 'Do',He,She,It'de ise
        "Does" yardımcı fiilini kullanırız.{"\n"}{"\n"}Yani olumlu cümlelerde he she it de -s takısını  fiile eklerken olumsuz cümlelerde ve soru cümlelerinde s- takısını Do alarak Does olarak kullanılır.O
        sebeple olumsuz cümle ve soru cümlelerinde fiile -s takısını eklemeyiz.</Text>
        </View>
  
        

       <View>
       <Text style={{fontSize:19,margin:6}}>
         Soru cümlesi yapısı:
       </Text>
  <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead3}
            style={styles.text}
            textStyle={{ fontSize: 10}}
          />
          <Rows data={tableData3} style={styles.text}/>
        </Table>
        <Text style={styles.text}>I,You,We,They de yardımcı fiil olarak 'Do',He,She,It'de ise
        "Does" yardımcı fiilini kullanırız.{"\n"}{"\n"}Yani olumlu cümlelerde he she it de -s takısını  fiile eklerken olumsuz cümlelerde ve soru cümlelerinde s- takısını Do alarak Does olarak kullanılır.O
        sebeple olumsuz cümle ve soru cümlelerinde fiile -s takısını eklemeyiz.</Text>
        </View>
        <View>
          <Text style={styles.text}>
        <Text style={{fontSize:15,fontWeight: "bold",margin:6}}>  1. Alışkanlıklar ve günlük rutinler, simple present tense ile ifade edilebilir.{"\n"}{"\n"}</Text>

I brush my teeth twice a day. (Dişlerimi günde iki kez fırçalarım.){"\n"}{"\n"}
She eats breakfast every day. (Her gün kahvaltı yapar.){"\n"}{"\n"}
They go to mosque on Fridays. (Cuma günleri camiye giderler.){"\n"}
{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
2. Bilimsel gerçeklikler, genel doğrular ve doğa kanunları, simple present ile ifade edilir.{"\n"}{"\n"}
</Text>
Water boils at 100 °C. (Su, 100 °C’de kaynar.){"\n"}{"\n"}
If you boil water, it evaporates. (Suyu ısıtırsanız buharlaşır.){"\n"}{"\n"}
The Earth revolves around the Sun. (Dünya, güneşin etrafında döner.){"\n"}{"\n"}
          </Text>
        </View>
        <View>
        <Text style={styles.header} >SIKLIK ZARFLARI</Text>

        <Text style={styles.text}>Geniş zaman cümlelerde eylemin sıklığını belirtmek için sıklık zarfları kullanılabilir.{"\n"}
        ●  always: daima, her zaman{"\n"}
        ●usually: çoğunlukla{"\n"}
        ●generally/normally: genellikle
        ●often/frequently: sık sık, sıklıkla{"\n"}
        ●sometimes: bazen, ara sıra{"\n"}
        ●occasionally: zaman zaman, arada bir{"\n"}
        ●seldom/rarely: nadiren{"\n"}
        ●never: asla{"\n"}{"\n"}

        Sıklık zarfları genellikle özne ile fiil arasında kullanılır.
        {"\n"}{"\n"}
        ●I always have breakfast. (Ben daima kahvaltı yaparım.){"\n"}
        ●He usually goes to school by car. (Okula çoğunlukla arabayla gider.){"\n"}
        ●She never drinks coffee. (O, asla kahve içmez.){"\n"}
        </Text>

        <Text style={styles.header}>ZAMAN ZARFLARI</Text>
        <Text style={styles.text}>Zaman zarfı olarak, haftanın günleri veya sıklık belirten zarflar, geniş zaman cümlelerde kullanılabilir.

Always, usually, generally, normally, often, frequently, sometimes, occasionally, seldom, never gibi sıklık zarfları çoğunlukla özne ile fiil arasında kullanılır.
{"\n"}{"\n"}

He usually watches horror films. (O çoğunlukla korku filmi izler.)
{"\n"}{"\n"}

Every day (her gün), every morning (her sabah), every evening, every week, every month gibi ifadeleri geniş zaman cümlelerin sonunda veya başında kullanabilirsiniz.
{"\n"}{"\n"}

Do you surf the Internet every day? (Her gün İnternete girer misin?)
{"\n"}{"\n"}

At weekends (hafta sonları), on weekdays (hafta içi günler), in the mornings (sabahları), in the afternoons, in the evenings, on Sundays (Pazar günleri), On Fridays gibi ifadeler de duruma göre yine cümlenin sonunda veya başında kullanılabilir.
{"\n"}{"\n"}

I work on Sundays. (Ben Pazar günleri çalışırım.)
{"\n"}{"\n"}

Once a week (haftada bir kez), once a month (ayda bir kez), twice a day (günde iki kez), three times a week (haftada üç kez) gibi zarflar da yine cümlenin sonunda kullanılır ve sıklık belirtir.
{"\n"}{"\n"}

I brush my teeth twice a day. (Dişlerimi günde iki kez fırçalarım.)
{"\n"}{"\n"}

How often…? (Ne sıklıkta…?) sorusu ile eylemin ne sıklıkta yapıldığı geniş zaman cümle ile sorulabilir.
{"\n"}{"\n"}

How often does he mop the floor? (O, ne sıklıkta yerleri paspaslar?)
{"\n"}{"\n"}
He mops the floor twice a day. (O günde iki defa yerleri paspaslar.)</Text>
      </View>
        <View>
        <Text style={styles.header}>WH Questions</Text>
        <Text style={styles.text}>
        Türkçe olarak İngilizce soru kelimeleri anlamına gelen Wh Questions günlük hayatta en sık kullanılan kalıpların başında gelir. Çok sık duyduğumuz kalıplar <Text style={{fontWeight: "bold"}}>What, Why, When, Who, Whose, Which, Where, How</Text>  olmak üzere 8’e ayrılır.
  {"\n"} {"\n"}
İngilizce soru kelimeleri için evet ya da hayır şeklinde cevap veremezsiniz. Bu tip sorular size açıklama yaptırmak amacıyla sorulmuştur. Bu da soruyu soran kişinin sizden ayrıntılı bir cevap beklediği anlamına gelir. 
{"\n"} {"\n"}
Dilerseniz bu kalıpların birlikte daha detaylı inceleyelim ve kullanım şekillerine örnekler verelim.

        </Text>
    
        <View>
            <Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
        What
        </Text>
        <Text style={styles.text} >
 “NE?” sorusunu sormak istediğimiz zaman kullanılır.
{"\n"}{"\n"}
Örnek-a:

What is your favorite traditional Turkish food?
(Senin en sevdiğin geleneksel Türk yemeği nedir?){"\n"}{"\n"}
My favorite traditional Turkish food is sarma.
(Benim en sevdiğim geleneksel Türk yemeği sarmadır.){"\n"}{"\n"}
Örnek-b:
{"\n"}
What did you do last summer?
(Geçen yaz ne yaptın?){"\n"}{"\n"}
We went to Afyon to visit our relatives last summer.
(Geçen yaz Afyon’a akrabalarımızı ziyaret etmeye gittik.){"\n"}{"\n"}
NOT: Eğer “What”  kelimesinden sonra herhangi bir isim gelirse cümleye “HANGİ?” anlamı katar.
{"\n"}
Örnek-c:

What color is your favorite color?
(Senin en sevdiğin renk hangi renktir?){"\n"}{"\n"}
My favorite color is green.
(Benim en sevdiğim renk yeşildir.){"\n"}{"\n"}
NOT: Eğer “What”kelimesinden sonra “Time” kelimesi gelirse cümleye “NE ZAMAN?” zaman anlamı katar.
{"\n"}
Örnek-e:

What time is your bus arriving at the coach station?
(Senin otobüsün otogara saat kaçta varıyor?){"\n"}{"\n"}
My bus is arriving at the coach station at 10:00 a.m.
(Benim otobüsüm otogara saat 10:00’da varıyor.){"\n"}{"\n"}
Örnek-f:

What time is your mother coming from work?
(Annen işten saat kaçta geliyor?){"\n"}{"\n"}
My mother is coming from work at 17:30.
(Annem işten saat 17:30’da geliyor.){"\n"}{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
        Why
        </Text>
        {"\n"}   {"\n"}“NEDEN?” sorusunu sormak istediğimizde kullanılır.{"\n"}

Örnek-a:
{"\n"}
Why did you eat my meal?
(Neden benim yemeğimi yedin?){"\n"}
I ate your meal because I was very hungry.
(Senin yemeğini yedim çünkü çok açtım.){"\n"}{"\n"}
Örnek-b:
{"\n"}
Why did you come to school late?
(Okula neden geç geldin?){"\n"}{"\n"}
I came to school late because I had to go to the doctor’s in the morning.
(Okula geç geldim çünkü sabah doktora gitmek zorunda kaldım.){"\n"}{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
        When
        </Text>{"\n"}{"\n"}
“NE ZAMAN?” sorusunun İngilizce karşılığıdır.{"\n"}

Örnek-a:

When will you go on holiday?
(Ne zaman tatile gideceksiniz?){"\n"}{"\n"}
We will go on holiday when my parents get their annual permit.
(Biz tatile annem ve babam yıllık izinlerini aldıklarında gideceğiz.){"\n"}{"\n"}
Örnek-b:
{"\n"}

When will you finish the Project?
(Projeyi ne zaman bitireceksin?){"\n"}{"\n"}
I will finish the Project at the end of next year.
(Projeyi gelecek yılın sonunda bitireceğim.){"\n"}{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
        Who
        </Text>{"\n"}{"\n"}

“KİM?” sorusunu sormak istediğimizde kullanılır.
{"\n"}
Örnek-a:

Who is going to be our literature teacher next year?
(Gelecek yıl bizim edebiyat öğretmenimiz kim olacak?){"\n"}{"\n"}
Ms. White is going to be our literature teacher next year.
(Bayan White bizim gelecek yılki edebiyat öğretmenimiz olacak.){"\n"}{"\n"}
Örnek-b:
{"\n"}
Who is your best friend?
(Senin en iyi arkadaşın kimdir?){"\n"}{"\n"}
My best friend is John.
(Benim en iyi arkadaşım John.){"\n"}{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
        Whose
        </Text>{"\n"}{"\n"}
“KİMİN?” sorusunu sormak istediğimizde kullanılır.
{"\n"}{"\n"}
Örnek-a:{"\n"}

Whose mother is an engineer?
(Kimin annesi mühendistir?){"\n"}{"\n"}
Celine’s mother is an engineer.
(Celine’nin annesi mühendistir.){"\n"}{"\n"}
Örnek-b:
{"\n"}
Whose mobile phone is grey?
(Kimin cep telefonu gridir?){"\n"}{"\n"}
Henry’s mobile phone is grey.
(Henry’nin cep telefonu gridir.){"\n"}{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
        Which
        </Text>{"\n"}{"\n"}
“HANGİ?” sorusunu sormak istediğimizde kullanılır.
{"\n"}{"\n"}
Örnek-a:
{"\n"}
Which one do you prefer?
(Hangisini tercih edersin?){"\n"}{"\n"}
I prefer the green one.
(Yeşil olanını tercih ederim.){"\n"}{"\n"}
Örnek-b:

Which bus goes to the city center from the park?
(Şehir merkezine parktan hangi otobüs gider?){"\n"}{"\n"}
The bus with number 3 goes to the city center from the park.
(Şehir merkezine parktan 3 numaralı otobüs gider.){"\n"}{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
        Where
        </Text>{"\n"}{"\n"}
“NEREDE?” sorusunu sormak istediğimizde kullanılır.
{"\n"}
Örnek-a:
{"\n"}
Where did you spend your holiday last year with your family?
(Geçen yıl ailenle tatilinizi nerede geçirdiniz?){"\n"}{"\n"}
I spent my holiday in Balıkesir with my family last year.
(Ben geçen yıl tatilimi ailemle Balıkesir’de geçirdim.){"\n"}{"\n"}
Örnek-b:

Where were you during the conference yesterday?
(Dün konferans sırasında neredeydin?){"\n"}{"\n"}
I was at the library and making some research for my project during the conference yesterday.
(Dün konferans sırasında kütüphanedeydim ve projem için biraz araştırma yapıyordum.){"\n"}{"\n"}
<Text style={{fontSize:15,fontWeight: "bold",margin:6}}>
      How
        </Text>{"\n"}{"\n"}
“NASIL?” sorusunu sormak istediğimizde kullanılır.
{"\n"}
Örnek-a:
{"\n"}
How do you go to school?
(Okula nasıl gidiyorsun?){"\n"}{"\n"}
I take the bus with number 19G to go to school.
(Okula gitmek için 19G numaralı otobüse biniyorum.){"\n"}{"\n"}
Örnek-b:
{"\n"}
How did you make that cake?
(O keki nasıl yaptın?){"\n"}{"\n"}
Firstly, I added all the ingredients to the bowl and then put the cake to the oven.
(İlk olarak tüm malzemeleri bir kaba koydum ve ardından keki fırına verdim.){"\n"}{"\n"}

</Text>
        </View>
        <View style={{...styles.view,backgroundColor:"red",height:95,margin:10}}>
              <Text style={{color:"white",padding:5}}><Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>Ünite 3 ün sonuna geldik.Ünite 3 de Zamanlardan Simple Present Tense (Geniş Zaman)'ı ve WH soru kalıplarını öğrendik.
Ünite 4 te görüşmek üzere
</Text>
              </View>

              </View>
<Text></Text>
<Text></Text>
</View>
</ScrollView>


)
}


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

export default Page3;