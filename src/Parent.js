import React,{useState} from 'react'
import Child from './Child';

function Parent() {

    const [message, setMessage] = useState('Hello World!');

    //Fonksiyon tanımlanır. Bu fonksiyonun görevi ise Parent komponentte yer alan değişkene istenen değeri vermektir.
    const SendMessage =(msg)=>{
        setMessage(msg)
    }

  return (
    <div>
      <p>{message}</p>
      <Child SendMessage={SendMessage} />
    </div>
  )
}
//Son olarak child komponentten parent komponente veri gönderirken useState kullanmak daha profesyonel bir yoldur.
export default Parent
