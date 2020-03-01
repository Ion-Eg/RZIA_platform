import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList,IonLabel,IonItem } from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
         <IonList>
            <IonItem routerLink="/tab3/Tutors"> 
              <IonLabel>
                <h2>Преподаватели</h2>
              </IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
