import React,{useEffect, useState} from 'react'
//import {ethers} from 'ethers';
import {polygon} from 'polygonjs'

import {contractABI,contractAddress} from '../utils/constants';


export const TransactionContext = React.createContext();

const {poly} = window;

const getPolygonContract = () => {
       const provider = new polygon.providers.Web3Provider(poly);
         const signer = provider.getSigner();
            const transactionContract = new polygon.Contract(contractAddress,contractABI,signer);

            console.log({provider,signer,transactionContract});
}