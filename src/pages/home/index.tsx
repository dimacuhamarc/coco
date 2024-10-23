import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '@/components/ExploreContainer';
import './styles.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header Toolbar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="home-container">
        <div className="home-header">
          <h2>Welcome back,</h2>
          <h1>Aiah!</h1>
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
