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
            </div>
        );
    }
}

export default Report;
