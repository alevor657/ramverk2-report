import React, { Component } from 'react';
import me from '../../../img/me.jpg';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container flex'>
                <h1>About me</h1>
                <img
                    src={me}
                    className='me-img'
                />
                <div className='me-text'>
                    <p>Hej, Jag heter Alexey och jag är 21 år gammal. Innan jag hade flyttat till Karlskrona så bodde jag med mina föräldrar i norra Stockholm, och innan dess så bodde jag i Moskva. Jag var alltid intreserad av teknik allmänt, men ännu mer av datorer och programmering. Jag tycker att det är spännande att skapa nya saker och automatisera dagliga rutiner. Jag brukar alltid vara den "händige" som fixar datorer/telefoner och så vidare. Sedan jag var en 14-åring så fick jag laga kompisars mobiler och datorer.</p>
                    <p>Jag har även utvecklat 2 mindre webbplatser åt en företag, dessa kan man se här och här. Då hade jag använt mig av bootstrap, smoothscroll, ajax och ett par andra prylar. Nu så ser jag fram emot nya utmaningar och kunskaper!</p>
                </div>
            </div>
        );
    }
}

export default Index;
