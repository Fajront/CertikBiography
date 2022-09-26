import React, { useRef, useEffect }  from 'react';
const webloc = (props) => {

    const myRef = useRef();
  
    function scrollToComponent() {
      if (window.location.hash === '#api-doc') {
        myRef.current.scrollIntoView();
        myRef.current.focus();
      }
    }
  
    useEffect( () => scrollToComponent(), [] )
  
    return (
      <div ref={myRef} id="api-doc">
         ...
      </div>
    )
  };
  
  export default webloc;