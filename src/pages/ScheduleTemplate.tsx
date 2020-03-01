import React from 'react';
import { useState, useEffect } from "react";
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, 
    IonContent, IonFabButton,IonFab,IonIcon, IonItem, IonGrid,
    IonRow, IonCol, IonCard, IonCardHeader,IonCardContent, IonList,IonLabel,IonChip,IonText} from '@ionic/react';
import './ScheduleTemplate.css';

const ScheduleTemplate: React.FC = () => {
return (
   <IonPage>
        <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/tab3/Tutors"/>
              </IonButtons>
              <IonTitle>Шаблон Расписания</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonGrid >
          <IonRow className="ionRow">
            <IonCol size = "auto" className ="ionCol">
              <IonCard className="card" >
                <IonCardHeader className = "ionRow"> 
                 <h1> Понедельник </h1>
                </IonCardHeader>
                <IonGrid>
                <IonRow>
                    <IonCol size = "auto" className ="ionCol1">
                        <IonText>
                        <h3>9:20-10:55</h3>
                        </IonText>
                    </IonCol> 
                    <IonCol size = "auto" className ="ionCol">
                          <IonText>
                          <h2>ЭАУ</h2>
                          </IonText>
                    </IonCol> 
                </IonRow>
                <IonRow>
                    <IonCol size = "auto" className ="ionCol">
                        <IonText>
                        <h3>11:10-12:45</h3>
                        </IonText>
                    </IonCol> 
                    <IonCol size = "auto" className ="ionCol">
                          <IonText>
                          <h2 className = "h2"> Мат. задачи</h2>
                          </IonText>
                    </IonCol> 
                </IonRow>

                </IonGrid>                
              </IonCard>
            </IonCol>  
            <IonCol size = "auto" className ="ionCol">
              <IonCard className="card" >
                <IonCardHeader> 
                 <h1> Вторник </h1>
                </IonCardHeader>
                <IonCardContent mode = "md" className = "content">
                 Загрузка....
                </IonCardContent>
              </IonCard>
            </IonCol>    
            <IonCol size = "auto" className ="ionCol">
              <IonCard className="card" >
                <IonCardHeader> 
                 <h1> Среда </h1>
                </IonCardHeader>
                <IonCardContent mode = "md" className = "content">
                 Загрузка....
                </IonCardContent>
              </IonCard>
            </IonCol>         
          </IonRow >
          <IonRow className="ionRow">  
            <IonCol size = "auto" className ="ionCol">
              <IonCard className="card" >
                <IonCardHeader> 
                 <h1> Четверг </h1>
                </IonCardHeader>
                <IonCardContent mode = "md" className = "content">
                 Загрузка....
                </IonCardContent>
              </IonCard>
            </IonCol> 
            <IonCol size = "auto" className ="ionCol">
              <IonCard className="card" >
                <IonCardHeader> 
                 <h1> Пятница </h1>
                </IonCardHeader>
                <IonCardContent mode = "md" className = "content">
                 Загрузка....
                </IonCardContent>
              </IonCard>
            </IonCol> 
          </IonRow>


        </IonGrid>
        </IonContent>
   </IonPage>
    );
};
export default  ScheduleTemplate;