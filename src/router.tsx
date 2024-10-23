import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { AppRoutes } from '@/utils/router/appRoutes';
import { home as homeIcon, add as journalIcon, time as historyIcon } from 'ionicons/icons';

export const Router: React.FC = () => <AppRoutes />;
