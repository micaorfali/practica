import React from 'react'

const Ejercicios = ({data}) => {

    const molestias = data.filter(item => item.body.includes('molestias'));
    console.log(molestias)

    const molestiasDestructuring = data.filter(({body}) => body.includes('molestias'));

    const titulos = data.map(({title}) => title);
    console.log(titulos);

    const primerPostU2 = data.find(({userId}) => userId==2);
    console.log(primerPostU2); 

    const idMayor90 = data.some(({id}) => id>90);
    console.log(idMayor90); 

  return (
    <div>
        <div>
            <div></div>
        </div>

    </div>
  )
}

export default Ejercicios