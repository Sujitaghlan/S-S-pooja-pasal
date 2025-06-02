import React from 'react'
import bg from '/images/main.jpg'
const Main = () => {
  return (
    <div className='relative'>
      <img src={bg} alt="background" className='w-full h-auto'/>
      <p className='absolute font-bold top-60 left-25 text-3xl'>शुद्ध पूजाका लागि, विश्वसनीय तामाङ सामग्री!</p>
      <p className='absolute font-bold top-70 left-25'>हाम्रो पसलमा तामाङ संस्कृतिमा आवश्यक पर्ने सम्पूर्ण पूजाका सामग्रीहरू उपलब्ध छन्। <br />
यहाँ तपाईंले धूप, खडा, लुङ्दार, मृत्यु संस्कारका सामग्रीहरू लगायत पूजामा आवश्यक सबै वस्तुहरू सहजै पाउन सक्नुहुन्छ।
<br />
सबै सामग्रीहरू गुणस्तरीय र उचित मूल्यमा उपलब्ध छन्</p>
    </div>
  )
}

export default Main
