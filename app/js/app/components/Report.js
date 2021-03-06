import React, { Component } from 'react';

class Report extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Report page</h1>

                <h2>kmom01</h2>

                <h3>Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.</h3>
                <p>Jag tycker att Express är en smidig server som är enkel att använda. Jag valda att inte använda Pug och försökte att göra saker annorlunda. Jag använder React och webpack i samband med Express för att jag ville testa på något nytt. Jag använder inga XHR förfrågor i samband med API servrar för att jag inte tycker att det behövs i detta sammanhang. Men om det dyker upp rum för sådana experiment då kommer jag säkert att skapa en liten Express API som kommer att servera data till min front. Då kommer jag använda Redux. Nu så använder jag React router, den delen som löser routing på klient sidan. Så att jag har bara en enda route som serverar en enda html template i min Express server. Jag kanske kommer att prova server rendering också. </p>

                <h3>Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?</h3>
                <p>Jag har två mappar, en för fiiler där jag jobbar med koden och en för builds, om man kan säga så. Eftersom jag använder webpack så fungerar det smidigt. Just nu så har jag inget produktionsläge eller något sådant, det enda jag egentligen gör är att jag samlar alla mina Component eller moduler i en enda kodklump. I build mappen så har jag en mapp för sass filer, React komponent, och bilder. Inget avancerat. Jag transpilerar koden till ES5 med hjälp av webpack.
                Jag har också en index.html fil och en server. Just nu så extraherar jag inte de till publika mappen, men jag planerar att göra så i fall projektet kommer att växa. Jag har självklart fixat till kodanalys eller linters.</p>

                <h3>Använde du någon form av scaffolding som Express erbjuder?</h3>
                <p>Nej, det gjorde jag inte eftersom min server var väldigt liten. Inget behov alltså.</p>

                <h3>Jobbar du med Markdown för innehållet, eller annat liknande?</h3>
                <p>Nej, jag kör direkt i React. Men jag kommer troligen att använda det i fall vi kommer långt med detta JS klient sidan röda tråden. Jag kommer att skapa ett API som i sin tur kanske parsar md innehåll som kommer tas ifrån en databas. Kankse.</p>

                <h2>kmom02</h2>

                <h3>Har du jobbat med Docker eller andra virtualiseringstekniker innan?</h3>
                <p>Njoo, jag har jobbat med virtual box sedan tidigare, men inte annat. Men docker verkar vara ett bättre alternativ till den stora systemet som man har installerat om man använder sig av VBox. </p>

                <h3>Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?</h3>
                <p>Docker gör så att jag kan köra min lilla program i olika node versioner, samt med olika värde på NODE_ENV. Jag tror att docker var skapat för att lösa andra typer av problem, men den fungerar väl även i detta sammanhanget.</p>

                <h3>Gick allt smidigt eller stötte du på problem?</h3>
                <p>Inga problem för mig alls. Det var inte krångligt att faktiskt fatta vad det hela egentligen handlar om, men annars nästan smärtfritt. Jag kör ju Ubuntu, så sådant kan inte krångla i teorin.</p>
                <p>Det var lite jobbigt med att öppna portar på min kontainer, men så fort jag fattade hur det går så löste det sig. Inga konstigheter alls. Det var en enkel kmom för mig måste jag säga.</p>

                <h3>Skapade du din egen image, berätta om den?</h3>
                <p>Nej, för att jag tycker inte att det ens behövs. Det finns ju en node image på dockerstore, så ingen anledning med att skapa ett nytt.</p>

                <h2>kmom03</h2>

                <h3>Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?</h3>
                <p>Jag valde Jest för att jag är inte inne på enhetstestning i JS så det spelar ingen stor roll i vad man väljer. Jest är driven av Facebook så den kan inte vara oanvändbar, så jag bara valde det första stora test libben jag hittade. Jag har byggt ett API, så jag använder mig av supertest för att testa saker.
                Jag har också en mongo databas tillsammans med mongoose bakom APIet, så jag har inträffat problem med testing. Jag ville inte mocka något och valde att använda min RPI som nu kör en Apache server, MySQL, PostgreSQL, ett Python API i Tornado, en Flask applikation, en node applikation och en mongodb server. Jag har nu 600mb av ram att spendera, så det låter bra. Principen är enkel - när du kör någon slags av test, om det är docker eller vanlig npm test spelar ingen roll. Test suiten kommer att använda min testdatabas.
                Så har jag löst det. Vet inte om det är bra taktik, kommentera och reflektera gärna över de tester jag har skapat, för att jag är inte helt säker på om de är faktiskt bra.</p>

                <h3>Berätta om cin CI-kedja och reflektera över de valen du gjorde?</h3>
                <p>Jag har nu två favoriter - Scrutinizer och Travis. De gör ungefär samma sak dock så är Scrutinizer mer avancerat när det gäller kodanalys. Jag har inte hittat några andra CI verktyg som erbjuder mer funktionalitet/nya badges.
                När jag kör tester i kedjan så kopplar de upp sig till min mongodb på rpi.</p>

                <h3>Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.</h3>
                <p>Det var rätt enkelt, jag löste det i kmom02 så det var en copy-paste sak. Dock tror jag inte att det finns nytta att köra tester i olika node miljö för att applikationen förväntas inte snurra på maskiner med ingen tillgång till sudo apt-get update/upgrade. Fattar inte meningen med detta, men det är ändå bra att testa hur det går.
                Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?
                Jag hade för många saker på mig att lösa, så jag prioriterade bort TDD och fokuserade på appen istället. Jag lyckades skapa ett skyddat API som baseras på JSON Web Tokens. Det går ut på att registrera sig i databasen, få tillbaka en token och accessa sin data.</p>

                <h3>Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder..</h3>
                <p>Som sagt, jag använder JWT, Express, mongoDB, mongoose, morgan, joi (för att verifiera data) och lite andra bra att ha saker. Jag kommer att skapa en React klient till APIet, så att man kan registrera sig och få tillgång till sin chatthistorik (jag planerar att skapa en chatt). Så är min plan. </p>

                <h2>kmom04</h2>

                <h3>Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?</h3>
                <p>Hela saken med websockets var ny för mig. Jag har kodat något liknande. Jag har bara använt det i andra webbapplikationer. Man ser realtids funktionalitet ofta på de olika byggtjänster, jag tror att de fungerar ungefär på samma sätt när de broadcastar terminalet vid en bygge. De var riktigt kult att lära sig mer om det.</p>

                <h3>Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?</h3>
                <p>Jag har börjat direkt med socket.io och det kändes ganska enkelt. Det har nästan alldrig krånglat efter jag har läst igenom artikeln och tittat på ett par videor på youtube. Deras docks är också ganska bra. Nackdelen för mig var att jag fick inte jobba med de native browers websockets, men jag tror att jag fattar principen ändå. Dessutom så erbjuder socket.io fallbacks för kompatibilitet.</p>

                <h3>Berätta om din chatt som du integrerade i redovisa-sidan.</h3>
                <p>Jag använder React i fronten, så det var ganska spännande att faktiskt använda de fördelar som React erbjuder - jag behöver inte jobba mot DOM element direkt, allting är abstraherat i JS.
                Så, när man kommer in på chatt sidan så sker kopplingen mot socket server direkt. Efter man väljer smeknamn så uppdaterar servern listan på användaren. All data som behövs i fronten ligger i state i Chatt komponenten och flödar ner till child-komponenter. Ganska simpelt. Efter att man är klar med chatten så disconnectar man och listan på användaren uppdateras återigen.</p>

                <h3>Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.</h3>
                <p>Min plan att skapa en riktigt funktionalitetsrik chatt som Gitter, typ. Men jag väljer att skjuta upp implementationen till projektet. Jag har nu en chat klass som jag kan utgå ifrån, jag kommer att refaktorera den så att den blir mer flexibel.</p>

                <h2>kmom05</h2>

                <h3>Hur gick det att komma igång med databasen MongoDB?</h3>
                <p>Det gick nästan smärtfritt. Jag trodde att jag kommer att använda driver v3 men det var ingen dokumentation på mongodb.com så jag körde på 2.3 istället. Dock så dök dokumentationen upp nästa dag men jag. Jag har redan använt mongo med mongoose i min applikation, så det var inget nytt. Jag använder ingen docker där men har redan implementerat CRUD system, så det som krånglade mest var React delen.</p>

                <h3>Vilken syn har du på databaser inom konceptet NoSQL?</h3>
                <p>Det är en intressant idé tycker jag, men utifrån min egen perspektiv så sperlar det faktiskt ingen roll. Jag jobbar inte med stora datamängder, så jag kan välja vad jag än vill. NoSQL databaser ger mer frihet, däremot garanterar de inte ACID (atomicity, consistency, isolation, durability). Jag har inte så mycket erfarenhet med för att besvara detta frågan på ett bra sätt, men om det är så att jag jobbar i node då skulle jag troligen jobba med mongo istället för andra SQL databaser bara för att jag slipper skriva SQL satser.</p>

                <h3>Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.</h3>
                <p>SQL baserade databaser använder sig av SQL frågespråk för att hämta data. De har också constraints, som minskar antalet felkällor i programmet. NoSQL betyder not only sql, så att det är möjligt att använda frågespråket med vissa nosql databaser. I NoSQL databaser struktureras inte data i tabeller, oftast struktureras datan i dokument, dock så finns det olika typer av databaser som gör det på olika sätt. Man behöver inte skapa tabeller eller något utan att bara lägga in saker.
                SQL och NoSQL databaser skalar sig på olika sätt. För att skala upp en relationsbaserat databas så lägger man till mer minne eller diskutrymme eller snabbare processor. Detta kallas för “scale in”. NoSQL baserade databaser skalas genom att lägga till flera noder (maskiner) till cluster.</p>

                <h3>Vilka är dina tankar om asynkron programmering med JavaScript?</h3>
                <p>Det är smidigt att kunna använda asynkron programmering. Nuförtiden så kan man även skriva asynkron kod som flödar synkront, så att man behöver inte dra nytta av prestanda om man inte vill eller om det spelar ingel roll. Till exempel när man gör en databasfråga så spelar det ingen roll om man använder sig av promise.then eller async await för att servern ska inte svara innan den fått tag i datan. Asynkron programmering verkar inte vara ett problem för mig.</p>

                <h3>Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?</h3>
                <p>Jag jag inte proffs med docker men med hjälp av dokumentationen så kan jag lösa alla problem som uppstår. Jag förstår vad det kan och inte, så jag har inga problem med Docker. Det är smidigt att jobba i kontainrar tycker jag. Det ger mer testing möjligheter och det blir enklare att deploy:a applikationer.</p>

                <p>OBS!</p>
                <p>Jag hostar inte längre min sida</p>


                <h2>kmom05</h2>

                <h3>Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.</h3>
                <p>Moduler är något som driver utvecklingen framåt. Moduler gör det möjligt att skriva bättre, snyggare kod genom att abstrahera delar av programmet någon annanstans. Separationen i programmering är väldigt viktig. Det blir enklare att testa och återanvända kod och detta är hur bra som helst på alla möjliga sätt och alla möjliga perspektiv. Det sparar tid och pengar, gör koden snyggare och enklare att läsa, gör det enklare att testa sina program. </p>

                <h3>Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?</h3>
                <p>Statistiken visar att fler och fler moduler publiceras på npm. Det finns ett par gånder så mycket moduler på npm än det finns på t. ex. pip eller packagist. Det är svårt att säga varför det händer, kanske för att JS är ett populärt programmeringsspråk. Men hursomhelst så är JS communityn väldigt aktiv nuförtiden. </p>

                <h3>Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera module i din applikation.</h3>
                <p>Det var ganska enkelt för att jag hade allting separerat redan då. Dock så har jag inte lyckats att göra modulen verkligen återanvändbar, men det kräver lite mer erfarenhet med tekniken. Dock så fungerar modulen för min applikation perfekt, precis som det gjorde då den var en del av kod.</p>

                <h3>Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart?</h3>
                <p>Nää, jag hade allting klart sedan tidigare. Jag testade bara så att allting fungerar som vanligt, redigerade lite och så var jag klar. Observera att jag inte stödjer node äldre än 8.</p>
            </div>
        );
    }
}

export default Report;
