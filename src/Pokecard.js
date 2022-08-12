import React from 'react';

const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

const Pokecard = ({ pokedex }) => {
    return (
        <div>
            <h3>Pokedex</h3>

            {pokedex.map(p => (
                <div className='card'>
                    <span className='name'>
                        {p.name}
                    </span>
                    <img src={`${imgUrl}/${p.id}.png`} alt='image of pokemon'/>
                    <p>type: {p.type}</p>
                    <p>EXP: {p.base_experience}</p>
                </div>
            ))}
        </div>
    )
}

export default Pokecard;