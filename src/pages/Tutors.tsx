import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, 
  IonTitle, IonContent, IonTab, IonTabs, IonTabButton, IonIcon, IonTabBar, IonLabel, IonBadge
,IonCard, IonCardHeader, IonGrid, IonCol, IonRow, IonCardContent, IonAvatar, IonItem} from '@ionic/react';
import './Tutors.css';
const Tutors: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab3" />
          </IonButtons>
          <IonTitle>Tutors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className = "tile">
          <IonRow className="ionRow">
            <IonCol size = "auto" className ="ionCol">
              <IonCard className="card" routerLink="/tab3/Tutors/Schedule">
                  <IonItem>
                     <img src="assets/icon/rbs.png"/>
                  </IonItem>   
                <IonCardHeader className = "Header" > 
                 Рыбин Сергей Николаевич
                </IonCardHeader>
                <IonCardContent mode = "md" className = "content">
                 Старший преподаватель 
                </IonCardContent>
              </IonCard>
            </IonCol>       
          </IonRow>
          <IonRow className="ionRow">
            <IonCol size = "auto">
             <IonCard className="card" routerLink="/tab3/ScheduleTemplate">  
                <IonCardHeader className = "Header" > 
                 шаблон
                </IonCardHeader>
                <IonCardContent mode = "md" className = "content">
                 расписания
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tutors;