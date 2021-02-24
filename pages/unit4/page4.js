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



const Page4 = (props) => {
 
    const tableHead = [
        "Subject (Özne)",
        "Verb (Fiil)",
      ];
      const  tableData=[
        ["I","went to school."],
        ["You","liked pizaa."],
        ["He","hated you"],
        ["She","had a car"],
        ["It","looked awesome"],
        ["You","played well"],
        ["We","did our homeworks"],
        ["They","took English class"]
 
 
      ];

      const tableHead2 = [
        "Subject (Özne)",
        "Auxiliary Verb",
        "Verb (Fiil)",
      ];
      const  tableData2=[
        ["I","didn't"," go to school."],
        ["You","didn't" ,"like pizaa."],
        ["He","didn't ","hate you"],
        ["She","didn't","have a car"],
        ["It","didn't", "look awesome"],
        ["You","didn't" ,"play well"],
        ["We","didn't" ,"do our homeworks"],
        ["They","didn't" ,"take English class"]
 
 
      ];

      const tableHead3 = [
        "Auxiliary Verb",
        "Subject (Özne)",
        "Verb (Fiil)",
      ];
      const  tableData3=[
        ["Did","I"," go to school?"],
        ["Did","You" ,"like pizaa?"],
        ["Did","He","hate you?"],
        ["Did","She","have a car?"],
        ["Did","It","look awesome?"],
        ["Did","You","play well?"],
        ["Did","We","do our homeworks?"],
        ["Did","They","take English class?"]
 
 
      ];
    return (
    <ScrollView>
      <View>
       <Text style={styles.header}>Past Tense</Text>
       
       <Text style={styles.text}>
       Simple Past Tense yani Türkçe karşılığıyla İngilizce 
       geçmiş zaman şimdiki zamandan önce bir zaman diliminde 
       tamamlanmış olan eylemleri ifade ederken kullanılır. 
       Simple Past Tense’de eylemin gerçekleşme süreci önemli değildir.
        Asıl durum o eylemin geçmişte tamamlanmış olmasıdır.
         Eylem geçmişte yakın bir zamanda ya da uzun bir zaman önce olabilir.
          O halde İngilizce konuşma sırasında en çok kullanılan zamanlardan biri 
          olan Simple Past Tense konusunu ve dikkat edilmesi gereken noktaları ayrıntılı 
          bir şekilde öğrenmeye başlayalım.
          {"\n"}{"\n"}
</Text>

<Text style={styles.text}>
● Simple Past Tense geçmişte belirli bir zamanda başlamış ve bitmiş eylemler için kullanılır. Bu gibi eylemler cümle içinde kullanılırken zamanın belirtilmesi şart değildir. Ancak mutlaka cümle içinde geçmiş zamandan bahsettiği anlaşılmalıdır.
{"\n"}
I saw a movie last week.
{"\n"}{"\n"}
● Simple Past Tense cümle içinde geçmişte tamamlanmış birkaç eylemi arka arkaya anlatmak için kullanılır.
{"\n"}
I finished work, walked to the beach and found my friends.
{"\n"}{"\n"}
● Simple Past Tense geçmişte başlamış ve bitmiş bir süreci anlatılırken kullanılır. Bu kullanımda eylemin süreci uzundur ve tüm yıl, tüm gün gibi zamanlar belirtilerek kullanılır.
{"\n"}
I lived in Italy for five years.
{"\n"}{"\n"}
● Simple Past Tense geçmişte olan alışkanlıklar için de cümle içinde kullanılabilir. Bu tip cümleler used to kalıbı ile aynı amaçtadır. Bahsedilen eylemin bir alışkanlık olduğu cümle içinde anlaşılmalıdır. Bu anlamı güçlendirmek için ‘’always’’, ‘’often’’, ‘’usually’’, ‘’never’’ gibi zaman ifadeleri kullanılabilir.
{"\n"}
I played football when I was a young man.
{"\n"}{"\n"}
</Text>

<Text style={styles.text}>Simple Paste Tense de cümle yapısı</Text>
<Text style={styles.text}>Geçmiş zamanda fiiller ikinci hallerine çekimlenir.Bu fiiller düzenli ve düzensiz fiil olarak ikiye ayrılır.
Düzensiz fiillerin listesini internetten kolaylıkla bulabilirsiniz.{"\n"}
{"\n"}Mesela go fiili düzensiz fiillerden biridir.Go kelimesinin geçmiş zamanda çekimlenmiş hali went tir.
Bu şekilde kelimelerin listesine göz atınız.{"\n"}{"\n"}
Düzenli fiiller ise -ed takısını alır.Mesela like kelimesi gibi.Geçmiş zamandaki
hali liked dır.
</Text>

<View>
  <Text style={{fontSize:19,margin:6}}>
        Olumlu cümlenin yapısı:
       </Text>
  <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead}
            style={styles.text}
            textStyle={{ fontSize: 10 }}
          />
          <Rows data={tableData} style={styles.text}/>
        </Table>
        </View>

<Text style={styles.text}>Geniş zamanda yardımcı fiil olarak 'Do' kullanılıyordu.Geçmiş zamanda ise 'Did' yardımcı fiilini kullanırız.</Text>

<View>
  <Text style={{fontSize:19,margin:6}}>
        Olumsuz cümlenin yapısı:
       </Text>
  <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead2}
            style={styles.text}
            textStyle={{ fontSize: 10 }}
          />
          <Rows data={tableData2} style={styles.text}/>
        </Table>
    <Text style={styles.text}>Tabloyu incelediğimizde bir kaç şey dikkatimizi çekmiştir.{"\n"}{"\n"}
    1)Olumsuz cümlelerde fiilin 1.hali kullanılır (örneğin:I had/I didn't have)
    2)Öznelerin tümünde did yardımcı fiili kullanılır.He She It farketmeksizin.
    
    </Text>
        </View>
 <View>
  <Text style={{fontSize:19,margin:6}}>
        Soru cümlesinin yapısı:
       </Text>
  <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead3}
            style={styles.text}
            textStyle={{ fontSize: 10 }}
          />
          <Rows data={tableData3} style={styles.text}/>
        </Table>
  
   
        </View>
   <Text style={styles.text}>
       Geniş zamanda to be fiillerini "Am","Is","Are" olarak kullanıyorduk.
       Geçmiş zamanda ise to be fiilleri "Was","Were" dür.
       {"\n"}
       I,He,She,It de was  You,We,They de ise were kullanılır.
       {"\n"}Örneğin;
       {"\n"}They were busy. (Onlar meşguldü.)
       {"\n"}He was happy. (O mutluydu.)
       {"\n"} {"\n"}
       </Text> 
  <Text style={styles.header}>Geçmiş zamanın zaman zarfları</Text>
  <Text style={styles.text}>
  Zaman belirten kelimeler, cümlede farklı yerlere gelebilir.{"\n"} {"\n"}{"\n"}
  Michael Jackson recorded his last album in 2009.
Michael Jackson son albümünü 2009 yılında kaydetti.{"\n"}{"\n"}

He bought the last discounted computer one day ago.
O, indirimdeki son bilgisayarı bir gün önce satın aldı. {"\n"}{"\n"}

Yesterday, I played with my little son.
Dün, küçük oğlumla oyun oynadım. {"\n"}{"\n"}

A dog bit me last evening.
Geçen akşam beni bir köpek ısırdı. {"\n"}{"\n"}

They took their medicaments a few minutes ago.
Birkaç dakika önce ilaçlarını aldılar. {"\n"}{"\n"}

  </Text>
  </View>
  <View>
<Text style={styles.header}>
   Can/Could
    </Text>
    <Text style={styles.text}>
    Can ve Could modal verb lerinden ikisi de bir kişinin bir işi yapma ihtimalinden ya da bir kişinin bir işi yapabilme yeteneğinden bahseder. Fakat, Can kipi şimdiki zamandan bahseden cümlelerde kullanılabilirken, Could ise geçmiş zamandan bahseden cümlelerde kullanılabilir. Diyebiliriz ki, “can” yardımcı fiilinin ikinci hali “could” olarak karşımıza çıkmaktadır.
    {"\n"}{"\n"}
    ● Could geçmiş zaman cümlesinde birinin bir işi yapabilme yeteneğinden bahseder.
    {"\n"}Örnek: When I was a baby, I could only crawl. (Bebekken sadece emekleyebiliyordum)
    {"\n"}{"\n"}
    ●Can ise geniş zaman ya da şimdiki zaman cümlelerinde birinin bir işi yapabilme yeteneğinden bahseder.
    {"\n"}Örnek: I can walk. (Yürüyebilirim.)
    {"\n"}  {"\n"}
    Farkın daha anlaşılır olması için yukarıdaki iki örneği birleştirelim:
    {"\n"}
Örnek: When I was a baby,  I could only crawl but now I can walk. (Bebekken sadece emekleyebiliyordum ama şimdi yürüyebiliyorum.)
{"\n"}{"\n"}
Aralarındaki en net fark geniş zaman ve geçmiş zaman kullanımları olsa da tek fark bu değil.
{"\n"}{"\n"}
●Can informal (resmi olmayan) konuşmalarda izin almak, bir şeyin yapılmasında birine izin verildiğinde kullanılır.
{"\n"}{"\n"}Örnek: -Mom, Can I go to my boyfriend party? (Anne, erkek arkadaşımın partisine gidebilir miyim?)
{"\n"}+No, you can’t.
{"\n"}{"\n"}
●Could ise resmi ya da daha kibar cümle kullanımlarında yerini alır.
{"\n"}{"\n"}
Örnek: Could you please give me your pen? (Rica etsem kalemini verebilir misin ?)
{"\n"}{"\n"}
●Can bir olayın ihtimalinden bahseder. Could da geniş zaman cümlelerinde kullanıldığında ihtimalden bahseder fakat Can kipine göre ihtimal daha düşüktür.
{"\n"}{"\n"}Örnek: Drinking alcohol can damage your liver. (Alkol tüketmek ciğerine zarar verebilir.)
{"\n"}{"\n"}
Örnek: You couldn’t pass the examination. (Kontrolü geçemeyebilirsin.)
{"\n"}{"\n"}
●Rica ve isteklerde Can kullanılır.{"\n"}{"\n"}
Örnek: I would be glad if you can take me home right now. (Şimdi beni eve bırakabilirsen çok memnun olurum)
{"\n"}{"\n"}
●Öneri ve tavsiyelerde ise Could kullanılır.{"\n"}{"\n"}
Örnek: You could go hospital for further information about your health. (Sağlığın hakkında daha fazla bilgi almak için hastaneye gidebilirsin)
{"\n"}{"\n"}
●Şartlı cümlelerde (if clauses) , if li cümleden sonraki cümlede could kullanılabilir. Type 2 denilen ve if ten sonra simple past kullanılan sonraki cümlede de “could” ya da “would” kullanılan cümlelerde could kullanılabilir.
{"\n"}{"\n"}Örnek: If you studied hard, you could be a doctor. (Eğer çok çalışırsan, bir doktor olabilirsin)
{"\n"}{"\n"}
●Kibar bir tavırla tanımadığımız kişilerden isteyeceklerimizi Could ile yaparız.
{"\n"}{"\n"}Örnek: Could you give me some money? (Bana biraz para verebilir misiniz ?)
{"\n"}{"\n"}  
<Text style={styles.header}>Can ve Could ile Örnek Cümleler</Text>
{"\n"}●I can drive a truck. (Kamyon kullanabilirim.)
{"\n"}{"\n"}●Before I had an operation, I could drive a truck (Ameliyat olmadan önce kamyon sürebilirdim.)
{"\n"}{"\n"}●My mother could cook spaghetti tonight, I am not sure. (Annem akşama spagetti pişirebilir, emin değilim.)
{"\n"}{"\n"}●My father can cook delicious meal. (Babam güzel yemek pişirebilir.)
{"\n"}{"\n"}●My father let me go to school picnic so I can go that picnic. (Babam okul pikniğine gitmeme izin verdi öyleyse gidebilirim.)
{"\n"}{"\n"}●I could not hear you when you told me about your school problem. (Okul probleminden bahsederken seni duyamadım)
{"\n"}{"\n"} <Text style={styles.header}>Could ve Couldn’t ile Örnek Cümleler</Text>
{"\n"}●I could take the flight. (Uçak yolculuğu yapabilirim.)
{"\n"}{"\n"}●I could not take the flight because my mother got sick. (Uçak yolculuğu yapamadım çünkü annem hastalandı.)
{"\n"}{"\n"}●She could consult the doctor if she got sick. (Eğer hastalanırsa, doktora başvurur.)
{"\n"}{"\n"}●I could not consult the doctor because he went on a holiday. (Doktora başvuramadım çünkü doktor tatile çıkmış.)
{"\n"}{"\n"} <Text style={styles.header}>Can ve Could ile Soru Örnekleri</Text>
{"\n"}Can ve Could modal verblerini kullanırken yardımcı fiilleri soru cümlesinin başında olur. Soru oluşturmak için kullanabileceğiniz kural:
{"\n"}{"\n"} Yardımcı fiil (Modal verbs / Can, could + özne + esas fiil + nesne & zarf
{"\n"}{"\n"}● Could you please send this man to jail? (Bu adamı hapse gönderebilir misiniz lütfen?)
{"\n"}{"\n"}●Can I go shopping? (Alışverişe gidebilir miyim?)
{"\n"}{"\n"}●Could you open the door, please? (Kapıyı açabilir misiniz?)
{"\n"}{"\n"}●Can you jump out of my room’s window? (Odamın penceresinden atlayabilir misin?)
{"\n"}{"\n"}●Could I be happy any more?  I don’t think so. (Daha fazla mutlu olabilir miydim? Sanmam.) 

</Text>
     
<View style={{...styles.view,backgroundColor:"red",height:95,margin:10}}>
              <Text style={{color:"white",padding:5}}><Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>Ünite 4 ün sonuna geldik.Ünite 4 de Zamanlardan Simple Past Tense (Geçmiş Zaman)'ı ve Can/Could kalıplarını öğrendik.
Ünite 5 te görüşmek üzere
</Text>
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

export default Page4;
