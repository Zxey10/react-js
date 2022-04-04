import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {

  const counter = useCounter(1);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
