import React ,{useState} from 'react'

function Text_area(props) {
    const [text ,setText]=useState("");
    const upperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('text converted to upper case', 'success')
     }
     const lowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('text converted to lower case','success')
     }
     const clearIt=()=>{
        setText('');
        props.showAlert('text cleared','success')
     }
    const handleOnChange =(texte)=>{
        setText(texte.target.value);
    }
    
    const worde=()=>{
        if((text.split(" ").length)>1){
            return "words"
        }
        else {
            return "word";
        }
    }
    const [xfind,setXfind]=useState("");

    const handleOnFind=(finde)=>{
        setXfind(finde.target.value);
    }

    const [find, setFind]=useState("");

    
    const noWrd=()=>{
        
            return text.split(" ").filter((element)=>{return element.length!==0}).length;
        
    }
    const searching=()=>{
        
        let f=text.search(xfind);
        
        const arr =text.split(" ");
        // let t1="";
        // let t2=" ";
        //   let q=text.search(find).split(" ");
        // let ret=t1 ;
        let q=0;
        // console.log(`xfind above is ${xfind}`)
        function srch(val,index,arr){
            // console.log(`val is ${val}`);
            // console.log(`arr index is ${arr[index]} and index is ${index}`);
            if(arr[index]==xfind){
                // console.log(`xfind is ${xfind}`)
                // console.log(`val is ${arr[index]}`);
                q=index+1;
                return;
            }
        }
        arr.forEach(srch);
        if(text.length==0){
            f=0;
            q=0;
        }
        function th(inp){
            if(inp==3){
                return "rd"
            }
            else if(inp==2){
                 return "nd";
            }
            else if(inp==1){
                return "st";
            }
            else{
                return "th";
            }
        }
        
        // console.log(arr);
        
        // console.log(q);
        setFind(`Your word is at ${q}${th(q)} number and has index ${f}${th(f)}`);
    }
    
    
  return (
    <>
    <div className='container' style={{color : props.mode=='light'?'black': 'white' ,}}>
        <h3>{props.heading}</h3>
        <div className="mb-0 my-4">
        <textarea className="form-control" id="myBox" style={{backgroundColor : props.mode=='light'?'white': '#262626', color: props.mode=='light'?'black': '#008000' ,fontFamily : 'Lucida Console'}} value={text} placeholder="Enter your text here.." onChange={handleOnChange} rows="9"></textarea>
        <button className='btn btn-primary my-2' onClick={upperCase}>Click to UpperCase</button>
        <button className='btn btn-primary my-2 mx-1' onClick={lowerCase}>Click to LowerCase</button>
        <button className='btn btn-danger my-2 ' onClick={clearIt}>Clear it!</button>
        </div>
    </div>.

    <div className='container'  style={{color : props.mode=='light'?'black': 'white'}}>
        <h6>YOUR TEXT SUMMARY</h6>
        <p>{noWrd()} {worde()} and {text.length} characters</p>
        <p> {text.length>0 ? (0.008 * text.split(" ").length).toFixed(2) : 0} minutes read.</p>
        <span><div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Preview
        </button>
        <ul className="dropdown-menu dropdown-menu">
            <li><p className="container-md" style={{fontFamily:"Georgia"}}>{text.length==0 ? "Please write something to preview !" : text}</p></li>
        </ul>
        </div></span>
        
        <div className="input-group  my-2" >
        <input type="text" className="form-control" style={{backgroundColor : props.mode=='light'?'white': '#262626', color: props.mode=='light'?'black': '#008000' ,fontFamily : 'Lucida Console'}} placeholder="Enter word to find!" value={xfind} onChange={handleOnFind} />
       
        </div>
        <button type="button" className="btn btn-dark" onClick={searching}>search</button>
        <p className=" my-1"><b>{find}</b></p>

            
        
        
    </div>
    </>
  )
}

export default Text_area