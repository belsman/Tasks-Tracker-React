import React from 'react';

const Finished = ({ handlePreviousForm, formData }) => {

  const submitHandler = () => {
    console.log(formData);
    // navigate to the measurements list page!
  };

  return (
    <div>
      <button onClick={() => handlePreviousForm()}>Previous</button>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Finished;
