// import { database } from '../services/firebase';

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';

 export function Room() {
/*   const roomRef = database.ref('rooms')

  async function getRoomData() {
    const firebaseRoom = await roomRef.get();
    console.log(firebaseRoom);

  }

  getRoomData(); */

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>código</div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>
      </main>

      <form>
        <textarea
          placeholder='O que você quer perguntar?'
        />
        <div className="form-footer">
          <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
          <Button type='submit'>Enviar pergunta</Button>
        </div>
      </form>

    </div>
  )
}