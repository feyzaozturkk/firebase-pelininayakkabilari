<template>
  <v-app>
   <v-content>  
       <v-container class="fill-height about" fluid>
          
            <v-card  class="elevation-12 " color="#FFFFF" height="300px" width="1000px">
                
                
                <v-row align="right" justify="right">
                        <v-col cols="12" align = "right">

                    <v-btn class="font-weight-light" >Alışverişe Devam Et </v-btn>
                    </v-col></v-row>
                    

                <div class="d-flex flex-row" >
                <v-div>
                 <v-img height="150" width="150px" src="https://www.pelininayakkabilari.com/Uploads/UrunResimleri/thumb/nesso-fume-ef5e.jpg"></v-img>
                </v-div>
                


                 <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle class="font-weight-bold"> Pelinin Ayakkabıları</v-list-item-subtitle>
        <v-list-item-subtitle class="font-weight-bold"> NESSO FÜME      </v-list-item-subtitle>
        <v-list-item-subtitle class="font-weight-bold"> Numara: 37   </v-list-item-subtitle>
      </v-list-item-content>
                 </v-list-item>
            
            <div  dense class="rounded-0 ml-0 mt-5 d-flex flex-row" >  
                <div class="d-flex flex-row">
             <v-text-field dense class="rounded-0 ml-0 mr-15" outlined label="1"></v-text-field>
             <h3 class="font-weight-bold ml-0 mr-15"> ₺ 175,00 </h3> 
             <h3 class="font-weight-bold ml-0 " color ="#ECEFF1">  ₺ 175,00   ✖ </h3> 
            
            </div> </div>
                </div>  
                    
                    
                    <v-row align="right" justify="right">
                      <v-col cols="12" align="right"> 
                    <div class="text-decoration-underline"> Sepeti Temizle </div></v-col></v-row>
          </v-card> 
            

            <div>
                  
                   <v-card height="300" width="400px" color="#ECEFF1">
                       <v-row align="center" justify="center">
                       <v-col cols="12" sm="12" align="center" >
                           
                    
                   <v-btn  style="background-color:#FF80AB; color:white" width="380px" class="font-weight-light" >  SİPARİŞİ TAMAMLA  </v-btn>
                       </v-col>  </v-row>

                   <v-card height="100" width="400px" color="#FFFFFF">
                     


                 <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle > Sipariş Tutarı  </v-list-item-subtitle>
        <v-list-item-subtitle > KDV    </v-list-item-subtitle>
        <v-list-item-subtitle class="font-weight-bold"> Sepet Toplamı  </v-list-item-subtitle>
      </v-list-item-content>
                 </v-list-item>  



            


                   </v-card>






                <v-card height="100" width="400px" color="#FFFFFF">
                   

                                        
                      <v-list-item-subtitle class="font-weight-bold"> Hediye Çekleri </v-list-item-subtitle>



                      <div d-flex flex-row>

                           <v-row align="left" justify="left">
                        <v-col cols="7" sm="7" align = "left">

             <v-text-field dense class="rounded-0 ml-12 mr-12" outlined label="" ></v-text-field> </v-col></v-row>

                        
                        
                        
                      
                            <v-btn style= "background-color:#000000; color:white " > Ekle </v-btn> 
                       </div>
                           




                    
                   </v-card>



                 </v-card>

                  

            </div>



        
         
       </v-container>
   </v-content>
 </v-app>
</template>