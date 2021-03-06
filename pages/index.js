import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Activalicante</title>
        <meta name="description" content="Creado para el Hackathon GovTech 2021" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a
          <Link href="/"> Activalicante!
          </Link>
        </h1>

        <div className={styles.grid}>
          <a href="https://www.google.com/maps/d/edit?mid=1SWBie2xyrTzJKKhnsmLBQ0q86YVxy8Gz&usp=sharing" className={styles.card}>
            <h2>Rutas &rarr;</h2>
            <p>Encuentra rutas turísticas o según tu interés</p>
          </a>

          <a href="https://es.wikipedia.org/wiki/Alicante" className={styles.card}>
            <h2>Información &rarr;</h2>
            <p>Busque información sobre la ciudad</p>
          </a>

          <a
            href="https://www.meetup.com/alicanteactivities/"
            className={styles.card}
          >
            <h2>Comunidad &rarr;</h2>
            <p>Juntese a otras personas con intereses comunes</p>
          </a>

          <a
            href="https://www.google.com/maps/search/parques/@38.3580271,-0.5078011,13z/data=!3m1!4b1"
            className={styles.card}
          >
            <h2>Tótem &rarr;</h2>
            <p>
              Sepa dónde están los totenes informativos de la ciudad.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diseñado en el Hackaton Gov Tech 2021{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}
