import {AiFillPlayCircle} from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';

import {Loader} from './';

const companyCommonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

const Input = ({placeholder,name,type,value}) => (
  <input
        placeholder = {placeholder}
        type = {type}
        step='.0001'
        name = {name}
        value = {value}
        onChange = {(e) => handleChange(e,name)}
        className = "my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        >
        </input>
)
//my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism
const Welcome = () => {

  const connectWallet = async () => {
  
  }


  const handleSubmit = async () => {

  }

  return (
   <div className = "flex w-full h-full justify-center items-center">
      <div className = "flex mf:flex-row flex-col justify-between items-start md:p-20 py-12 px-4">
        <div className = "flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text - 3xl sm:text-5xl text white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base ">
           Explore the world of crypto with ease.Buy and sell crypto with just a few clicks on this website.
          </p>
          <button
          type="button"
          onClick={connectWallet}
          className='flex flex-row  justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[yellow]  transition duration-300 ease-in-out md:w-2/3 w-full'
          >
           <p className='text-white text-base font-semi-bold hover:text-black'> Connect Wallet </p>
          </button>
          <div className = "grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>
              Security
              </div>
              <div className={`rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
              </div>
              <div className={`rounded-bl-2xl ${companyCommonStyles}`}>
              Web3.O
              </div>
              <div className={companyCommonStyles}>
              Low fees
              </div>
              <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
              </div>
          </div>
        </div>
        <div className = " flex flex-1  flex-col justify-start items-center  w-full mf:mt-0 mt-10">
          <div className = "p-3 flex flex-col justify-end items-start rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassMorphism">
           <div className = "flex flex-col justify-between w-full h-full">
            <div className = "flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
             <SiEthereum fonstSize={21} color="#fff"/>
            </div>
            <BsInfoCircle fontSize={17} color="#fff"/>
            </div>
            <div>
              <p className = "text-white text-sm font-light">Ethereum</p>
              <p className = "text-white text-sm font-light">0x4a...b7</p>
            </div>
           </div>
          </div>
          <div className = "p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <Input placeholder="Address To" name="Address To" type="text" handleChange={() => {}}/>
          <Input placeholder="Amount" name="Amount" type="number" handleChange={() => {}}/>
          <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => {}} />
          <Input placeholder="Enter Message" name="message" type="text" handleChange={() => {}} />
          <div className="h-[1px] w-full bg-gray-400 my-2" />

            {true
              ? <Loader />
              : (
                <button
                  type="button"
                  onclick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[yellow] hover:text-[black] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
          </div>
          </div>
          </div>
  )
}

export default Welcome;