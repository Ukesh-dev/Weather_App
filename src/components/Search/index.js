import React from 'react'
import {ReactComponent as Searchsvg} from '../../images/search.svg';
import {useGlobalContext} from '../../context'
// import {useOutsideClick} from 'react-click-outside'
// import axios from ' ./axios';

function Search() {
    const {handleSubmit, setSearchValue, searchValue, searchResults, getData, error} = useGlobalContext();
    const [modalOpen, setmodalOpen] = React.useState(false);
    const [searchOption, setSearchOption] = React.useState([])
    // const serachContainer = React.useRef();
    const formContainer = React.useRef(null);

    const handleClick  = (e) =>{
        if(formContainer.current && !formContainer.current.contains(e.target)){
            setmodalOpen(false);

        }
        // else{
        //     setmodalOpen(true);
        // }
    }

  
    React.useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener(
                'click',handleClick 
            )
        }
    })

    const showResults = (e)=> {
        setSearchValue(e);
        // console.log(e)
        // console.log(searchResults)
        if(e === ''){
            console.log("empty")

            setmodalOpen(false);
                }
        else{
            console.log(searchValue);
         const Result = searchResults.filter((result) => {
            if(result.toLowerCase().includes(e.toLowerCase())){
             
                return result;
            }
            return null;

        })
        // console.log(Result);
        if(Result.length > 0) {
            console.log(Result);
            if(Result.length > 10){
               Result.length = 10;
            }
            setSearchOption(Result);
            if(searchOption){
                
            setmodalOpen(true) ;

            }

        }
        else{
            console.log('modal False')
            setmodalOpen(false);
        }
        // Result && setmodalOpen(true);
        // Result && console.log("Data Coming")
        }
    }


    const showWeather = (option) =>{
       setSearchValue(option);
        getData(option)
    }
    return (
        <div className="weather__form" ref={formContainer}>
   <form onSubmit ={(e)=> {handleSubmit(e); setmodalOpen(false)}}  >
       <div className="input__field">
            <input type="text" name="weather" placeholder="country or city name" spellCheck ="false" onFocus={(e)=> showResults(e.target.value)}id="weather" onChange={(e) => {
                showResults(e.target.value)
            }}  value = {searchValue}/>
            <div className="underline"></div>
       </div>
       {error && <span className= "error">The Result did not match. Try again</span>}
            <button type="submit">{<Searchsvg/>}</button>
        </form>

        {modalOpen &&  <div className="weather__searchItems">
            <ul className="linkItems">
        {searchOption.map((option, id)=>{
              
              return(
                  
              
                <li className="linkItem" key={id} onClick={(e)=> {
                    console.log(option)
                    if(option.includes('Abu Dhabi Island and Internal Islands City')){
                         option = 'Abu Dhabi';
                    } 
                    if(option.includes( 'Abu Dhabi Municipality')){
                        option = 'Abu Dhabi'
                    }
                 
               showWeather(option); 
               setmodalOpen(false)
                    }}>{option}</li>
            )
        })}
            </ul>
        </div>}
       {modalOpen && <div className="weather__underline">
    
         </div> }
        </div>
         )
}

export default Search
