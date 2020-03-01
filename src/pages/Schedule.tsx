import React from 'react';
import { useState, useEffect } from "react";
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonFabButton,IonFab,IonIcon, IonItem} from '@ionic/react';

const Schedule: React.FC = () => {
  const [isloggedIn,setState] = useState(false);
  function toString(arg: boolean) {
    var boolean = new Boolean(arg)
    return boolean.toString();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab3/Tutors" />
          </IonButtons>
          <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          {isloggedIn? toString(isloggedIn):toString(isloggedIn)}
        </IonItem>
        <IonFab vertical="center" horizontal="start" slot="fixed">
          <IonFabButton onClick={(() => {!isloggedIn? setState(true):setState(false)})}>
            <IonIcon name="hand-left-outline" />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;
