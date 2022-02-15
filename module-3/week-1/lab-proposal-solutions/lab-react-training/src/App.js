import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Title from './components/Title';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  return (
    <>
      <Title>Iteration 1: IdCard</Title>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Title>Iteration 2: Greetings</Title>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="en">John</Greetings>
      <Greetings lang="es">Pablo</Greetings>
      <Greetings lang="fr">Charles</Greetings>
      <Greetings lang="tx">Johnny</Greetings>

      <Title>Iteration 3: Random</Title>
      <Random min={3} max={6} />
      <Random min={1} max={100} />

      <Title>Iteration 4: BoxColor</Title>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <Title>Iteration 5: CreditCard</Title>

      <div className="container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <Title>Iteration 6: Rating</Title>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <Title>Itaration 7: DriverCard</Title>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <Title>Iteration 8: Like Button</Title>
      <LikeButton />
      <LikeButton />

      <Title>Iteration 9: ClickablePicture</Title>
      <ClickablePicture img="/maxence.png" imgClicked="/maxence-glasses.png" />

      <Title>Iteration 10: Dice</Title>
      <Dice />

      <Title>Iteration 11: Caroussel</Title>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <Title>Iteration 12: List and Keys (numTable)</Title>
      <NumbersTable limit={20} />

      <Title>Iteration 13: List and Keys (FaceBook)</Title>
      <FaceBook />

      <Title>Iteration 16: Lifting State up - RGB color picker</Title>

      <RGBColorPicker />
    </>
  );
}

export default App;
