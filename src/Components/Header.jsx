import {
  Box,
  Stack,
  Button,
  Text,
} from '@chakra-ui/react';
import '../App.css';


const Header=(props)=>{
    /** when you don't want to declare the header all over again and you you want to make it useful you use props  */
   const header=props.header;



    return(
  
       <Box className="header_list">
    {
        header.map((data)=>(
<Box className="header_desc" key={data.id}>
    <h1>{data.title}</h1>
    <h2>{data.status}</h2>
    <h3>{data.status2}</h3>

</Box>
        )
        )
    }

</Box>     
    

    );

    }
   
export default Header;