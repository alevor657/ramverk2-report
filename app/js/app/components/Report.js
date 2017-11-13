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

            </div>
        );
    }
}

export default Report;
