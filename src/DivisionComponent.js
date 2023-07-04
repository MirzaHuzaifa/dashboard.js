import React from 'react';
import ChildComponentDC from './ChildComponentDC';


const DivisionComponent = () => {
  // const [dividend, setDividend] = useState(100); // Initial dividend
  // const [divisor, setDivisor] = useState(2); // Initial divisor

  // // Fetch new divisor from API
  // const fetchDivisorFromAPI = () => {
  //   // Example API call
  //   fetch('https://api.example.com/divisor')
  //     .then(response => response.json())
  //     .then(data => setDivisor(data.divisor))
  //     .catch(error => console.log(error));
  // };

  // useEffect(() => {
  //   fetchDivisorFromAPI(); // Fetch initial divisor from API
  // }, []);

  // const handleDividendChange = event => {
  //   setDividend(Number(event.target.value));
  // };

  return (
    <div className='w-[50%] p-5 flex justify-center '>
    <div className='bg-slate-200 w-[100%] p-3 rounded-2xl'>
    
      <div className='text-[26px] p-4 font-bold'>
      <h1 className='ml-6 text-blue-700'>
        DMS
        </h1> 
      </div>
      <ChildComponentDC/>

      

      </div>
    </div>
  );
};

export default DivisionComponent;