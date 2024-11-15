import React from 'react'

function Child({SendMessage}) {
    //Bu kısımda yer alan butonun görevi Child komponentten veriyi alıp Parent komponente iletme işlemini tetiklemektir. 
    // Ayrıca bu kısımda {SendMessage} olarak tanımlanan props aynı zamanda butona tıklandığında içinde yer alan değeri iletme görevini yerine getirir.
  return (
    <div>
      <button onClick={()=>SendMessage('İşlem Başarılı')}>Send</button>
    </div>
  )
}

export default Child
