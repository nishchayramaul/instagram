
import './App.css';
import '../src/Styling/forms.css'
import insta from '../src/assets/Screenshot 2023-10-17 222528.png' ;
import { Textfield } from './Components/Textfield';
import { Button } from './Components/Button';
import fbicon from '../src/assets/pngimg.com - facebook_logos_PNG19759.png';

function App() {
  return ( 
    <div className="App">
      <div className='wrap'>
        <div className='wall'>
        <img class="image-background" src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" alt=""/>
        </div>
        <div className ='outer'> 
       <div className='form'>

         <div className='head'>
         <img style={{width:'200px'}} src= {insta} alt='logo'/>  
         </div>
         <div className='textfields'>
         <div className='username'>
          <Textfield placeholder={'Phone number, username or email'}/>
          </div>
          <div className='password'>
          <Textfield placeholder={'Password'}/>

          </div>
          </div>
          <div className='btn'>
            <Button/>
          </div>
          <div className='or'>
            <div className='line1'></div>
            <div className ='text'>OR</div>
            <div className='line2'></div>
          </div>
            <div className='fb'>
            <div className ='fbicon'><a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522xd0jw415qpam2o0vlks1m4m4yt1wynte81kkfvj01xlr0lesjli51%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D0346362b-a997-4f57-985a-e0b4e4aab7bc%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522xd0jw415qpam2o0vlks1m4m4yt1wynte81kkfvj01xlr0lesjli51%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0' alt='click here'>
               <img style ={{width :'25px', height:'21px'}} src ={fbicon} alt='click me ' /> </a></div>
            <div className='font'>
             <a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522xd0jw415qpam2o0vlks1m4m4yt1wynte81kkfvj01xlr0lesjli51%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D0346362b-a997-4f57-985a-e0b4e4aab7bc%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522xd0jw415qpam2o0vlks1m4m4yt1wynte81kkfvj01xlr0lesjli51%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0'> 
             Log in with Facebook
             </a>
             </div>
              </div>
          <div className='forgot'>
            <a href= 'https://www.instagram.com/accounts/password/reset/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsuspended%2F%3Fnext%3Dhttps%253A%252F%252Fwww.instagram.com%252F%253F__coig_ufac%253D1%26__coig_login%3D1' >Forgot password ?</a>
          </div>
      </div>
      <div className='form2'>
       <div className='account'>
        <div> Don't have an account? <span><a href= 'https://www.instagram.com/accounts/emailsignup/'>Sign up</a></span></div>
       </div>
      </div>
      <div className='text'></div>
      <div className='getapp'>
        Get the app.
      </div>
      <div className='icons'>
        <div className='gstore'>
          <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D22E27C9F-369F-497B-B744-3F8882FE1B3E%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.instagram.com/&pli=1'>
          <img  style={{width:'180px', height:'80px'}} src='https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg' alt='click here'></img></a></div>
        <div className='msstore'>
          <a href ='https://apps.microsoft.com/detail/instagram/9NBLGGH5L9XT?hl=en-us&gl=IN' >
          <img style={{width:'120px', height:'40px'}} src='https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg' alt='click here'></img>
          </a> </div>
      </div>
      </div>
    

      </div>
      
    </div>
  );
}

export default App;
