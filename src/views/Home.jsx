import {
  Box,
  Center,
  Stack,
  Button,
Image,
  useColorModeValue,
  Select,

} from '@chakra-ui/react';
import NavBar from'../Components/NavBar.jsx';
import '../App.css';
import Header from'../Components/Header.jsx'
import {useState} from 'react';
import styled from 'styled-components';
import DatePicker from'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import{ Link } from'react-router-dom';

export default function Home() {
  const[counterValue , setcounterValue]=useState(5);

  const handleOnChange = (e) =>{
   setcounterValue(e.target.value)
  }

  const[selectedDate, setSelectedDate] = useState(null)
        
  return (
    <Container>
    <Center >
       
      <Box className="Card"
        maxW={'390px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
      
        textAlign={'center'}>

         
         <NavBar/> 
      <Header  title="Trip" />
      <Box>
  < input  type="checkbox" className="toggle"/>
</Box>
        <Stack direction="column" gap="10px" >
          <Box className="origin_Destination">
     <Select placeholder='Origin'
     display="flex" 
flexDirection="row" 
alignItems="center" 
padding="0px"
width="342px" 
height="52px" 
border="4px solid #36AE7C " 
borderRadius="18px"  >

  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</Box>

      <Box className="origin_Destination">
     <Select placeholder='Destination'
     display="flex" 
flexDirection="row" 
alignItems="center" 
padding="0px"
width="342px" 
height="52px" 
border="4px solid #36AE7C" 
borderRadius="15px" 
 >

  <option value='option1' >Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</Box>
</Stack>

<Stack direction="row"  gap="90px">
  <Stack direction="row">
       
<Box className="date_desc  first">
  
<h5>Date</h5>
<DatePicker
className="datePicker"
 selected={selectedDate}
  onChange={date => setSelectedDate(date)}
  dateFormat='dd/MM/yyyy '
  minDate={new Date}
  placeholderText={'Select  Date' } 

  showYearDropdown
  scrollableMonthDropdown
  />
   <Box className="date">
   <Image 
position="relative"
top="-20px"
left="90px"
width="15px"
src='images/date.svg'
z-index="1"
cursor="pointer"
  />
  </Box>
</Box>
  </Stack>

<Stack direction="row" >
       
<Box className="date_desc">
<h5>Time</h5>
<label for="drop-down"></label>
<select name="drop-down" id="drop-down" className="drop-down">
   <option value="one">Select the time</option>
  <option value="one">06:00-06:30Am</option>
  <option value="two">06:30-7:00Am</option>
  <option value="three">7:30-08:00Am</option>
  <option value="two">08:00-08:30Am</option>
  <option value="three">09:00-09:30Am</option>
  <option value="two">09:30-10:00Am</option>
  <option value="three">10:00-10:30Am</option>
  <option value="three">16:30-17:00Pm</option>
  <option value="three">17:00-17:30Pm</option>
  <option value="three">17:30-18:00Pm</option>
   <option value="three">18:00-18:30Pm</option>
   <option value="three">18:30-19:00Pm</option>
   <option value="three">19:00-19:30Pm</option>
   <option value="three">20:30-21:00Pm</option>
   <option value="three">21:00-21:30Pm</option>
</select>
{/* <Box className="date">
<Image 
position="relative"
width="21px"
top="-21px"
left="135px"
cursor="pointer"
src='images/Circle.png'/>
</Box> */}
</Box>
     </Stack>   
</Stack>
<Stack>
  
 <Box className="number_section">
<h5> Number of seats</h5>
 <input  className="slider" type="range" min='0' max='20' value={counterValue} onChange={handleOnChange}  />
 
 </Box>
 <Box className="value">
{counterValue}
 </Box>
</Stack>

       

        <Stack mt={8} direction={'row'} spacing={4}>
          <Link to='/Passengers'>
          <Button
           
            fontSize={'sm'}
            bg={'#36AE7C'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
        
            display={ 'flex'}
justify-content={'center'} 
alignItems={'center'} 
padding= {'12px 50px'}
width= {'350px'}
height= {'56px'}
borderRadius={'20px'} 
position="relative"
top="40px"
            _hover={{
              bg: 'green.400',
            }}
            _focus={{
              bg: 'green.400',
            }}>
           Submit
          </Button>
          </Link>
          
        </Stack>
      </Box>
    </Center>
    </Container>
  );
}

const Container=styled.div`
.slider{
width: 80%;
 -webkit-appearance:none;
 background-color: #fff;
 height:10px;
border:4px solid rgba(196, 196, 196, 0.3);
  position: relative;
  top:20px;
  
  &::-webkit-slider-thumb{
 -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height:20px;
  background-color: #36AE7C;
  cursor: pointer;
  border-radius: 50%;
    
  }
}
.value{
  position:relative;
  left:-27px;

}
.datePicker{
  margin-top:20px;
  color:#36AE7C;
   font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 125%;
}
.drop-down{
  margin-top:20px;
cursor:pointer;
  width:135px;
   font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 125%;
}
.datePicker{
  cursor:pointer;
  width:110px;
border:1px solid ;
border-radius:2px;
}
.first{
  margin-left:-20px;
}

`