import React from 'react';
import champions from '../assets/champions.jpg'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid '>
      <div className=' flex flex-col justify-center'>
        <div>
          <h2 className='flex justify-center'>CHAMPIONS</h2>
          <p className='py-4 text-center'>
          A total of 22 clubs have won the tournament since its 1955 inception, with Real Madrid being the only team to win it fourteen times, including the first five. Only three other clubs have reached ten or more finals: Milan, Bayern Munich and Liverpool. A total of thirteen clubs have won the tournament multiple times: the four forementioned clubs, along with Ajax, Barcelona, Inter Milan, Manchester United, Benfica, Nottingham Forest, Juventus, Porto and Chelsea. A total of twenty clubs have reached the final without ever managing to win the tournament.
<br></br>
Clubs from ten countries have provided tournament winners. Spanish clubs have been the most successful, winning nineteen titles. England is second with fourteen and Italy is third with twelve, while the other multiple-time winners are Germany with eight, the Netherlands with six, and Portugal with four. The only other countries to provide a tournament winner are Scotland, Romania, Yugoslavia, and France. Greece, Belgium and Sweden have all provided losing finalists.
          </p>
        </div>
        <img  src={champions} alt="/" />
        
      </div>

     
    </div>
  );
};

export default Search;
