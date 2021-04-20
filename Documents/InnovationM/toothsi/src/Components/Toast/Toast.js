import React from 'react';
import search from '../../Assests/search.png';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function Toast(){
    const notify = () => toast("Coming Soon!!!");

    return (
      <div>
        <img onClick={notify} src={search} alt="search" />
        <ToastContainer />
      </div>
    );
  }

  export default Toast;