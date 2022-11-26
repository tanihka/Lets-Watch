import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import WatchListItem from './watchlistitem';

function Nav({watchList,setWatchList}){

    const [height,setHeight] = useState(0);

    function toggleHeight(){
        if(height === 0)
            setHeight(400);
        else
            setHeight(0);
    }

    return(
        <div className="nav">

            <div className="main-nav">
                <div className="nav-logo">
                    <Link to='/'>
                    <i className="fas fa-film"></i>
                    <span>Let's Watch</span>
                    </Link>
                    
                </div>
                <ul>
                    <Link to='/Signup'>
                    <li className='sign-up'> Sign Up</li>       
                    </Link>
             
                <Link to='/login'>
                <li className='sign-up'> Log In</li>
                </Link>
                
                    <li className="watch-list">
                        <i onClick={toggleHeight} className="fas fa-tv"></i>
                        {watchList.length === 0 ? 
                            "" 
                            :
                            <span className="watch-list-length">{watchList.length}</span>
                        }
                        <WatchListItem watchList={watchList} setWatchList={setWatchList} height={height}/>
                    </li>
                    
                </ul>
            </div>

            <div className="sub-nav">
                <p>WATCH ALL KIND OF MOVIES FREE . ENJOY IT !</p>
            </div>
            
        </div>
    );
}

export default Nav;