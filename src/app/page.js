import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Image
        src="/qrcode.jpg"
        width={200}
        height={200}
        alt="QR CODE"
        className={styles.imagem}
      />
        <h1>Com amor, Marcos</h1>
        <p className={styles.paragrafo}>Eddy, essa é uma pequena demonstração do carinho que tenho por você
          você é uma pessoa excepcional, espero compartilhar mais momentos com você! 
        </p>
      </div>
    </main>
  )
}
