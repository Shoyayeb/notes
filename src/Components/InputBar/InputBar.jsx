import React, { useState } from 'react';

const InputBar = () => {
  const [openInput, setOpenInput] = useState(false);
  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div
        className={`form-input hover:cursor-text block h-10 w-1/2 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
          openInput && 'h-20 form-input'
        }`}
        onClick={() => setOpenInput(true)}
      >
        Take a note ...
        {openInput && (
          <input
            className='form-input block bg-transparent w-full pl-7 pr-12'
            type='text'
            name=''
            id=''
          />
        )}
      </div>
      {/* <Transition
        show={open}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Disclosure.Panel>
          <button
            onClick={() => {
              close();
            }}
          >
            Read and accept
          </button>
          <textarea
            id='about'
            name='about'
            rows={3}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='you@example.com'
            defaultValue={''}
          ></textarea>
        </Disclosure.Panel>
      </Transition> */}
    </div>
  );
};

export default InputBar;
