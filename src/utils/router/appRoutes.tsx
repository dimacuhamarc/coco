import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '@/pages/home';
// import NewEntry from '@/pages/NewEntry';
// import History from '@/pages/History';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage } from '@ionic/react';
import { home as homeIcon, add as journalIcon, time as historyIcon, person as personIcon } from 'ionicons/icons';
import Navbar from '@/components/Navbar';

export const AppRoutes: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/new-entry" component={() => <IonPage>new entry</IonPage>} />
        <Route exact path="/history" component={() => <IonPage>history</IonPage>} />
        <Route exact path="/profile" component={() => <IonPage>profile</IonPage>} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      <Navbar title={'Home'} showBackButton={false} showMenuButton={false} />
    </IonTabs>
  );
};
