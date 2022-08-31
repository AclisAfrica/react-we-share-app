import {
  Box,
  
} from '@chakra-ui/react';
import '../App.css';


const Header=(props)=>{
    /** when you don't want to declare the header all over again and you you want to make it useful you use props  */
   const header=props.header;
const title=props.title;


    return(
  
       <Box className="header_list">
        <p className="header_title">{title}</p>
    {
        header.map((data)=>(
<Box className="header_desc" key={data.id}>
    <a href='#' className="Left">{data.status}</a>
    <a href='#' className="Right">{data.status2}</a>

</Box>
        )
        )
    }

</Box>     
    

    );

    }
   
export default Header;