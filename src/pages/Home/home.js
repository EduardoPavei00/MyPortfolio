import{ Link } from 'react-router-dom'



function Home(){
    return(

        <div>

            
            <div className='bannerHome'> 

          
        
            <h1 className='titleBanner'>Conheça meu primeiro site</h1>
            <p className='subTitleBanner'>
                Nesse site você ira conhecer algum dos meus projetos e como foi o processo de desenvolvimento 
            </p>
            <Link className='buttunBanner' to ="/formulario" > Conheça meu primeiro projeto</Link>

            </div>
            <div className='mightHome'>


            </div>
            
        </div>

        
    );
    
    }
    export default Home;