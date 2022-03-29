import React, { useMemo } from 'react'

function DemoList(props) {

  const sortedArr = useMemo (() => {
      console.log('Items Sorted');
      return  props.items.sort((a,b) => a-b)  
  },[props.items])

  

  console.log('DemoListRunning');

  return (
    <div>
      <p>{props.title}</p>
      <ul>
         {
            sortedArr.map(item => {
                return <li key={item}>{item}</li>
            })
         }
      </ul>
    </div>
  )
}

export default React.memo(DemoList)
