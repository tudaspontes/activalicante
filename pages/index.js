import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a
          <a href="https://nextjs.org"> Activalicante!
          </a>
        </h1>

        <div className={styles.grid}>
          <a href="https://www.google.com/maps/d/viewer?mid=1SWBie2xyrTzJKKhnsmLBQ0q86YVxy8Gz&ll=38.34753404793361%2C-0.48000850000001094&z=17" className={styles.card}>
            <h2>Rutas &rarr;</h2>
            <p>Encuentra rutas turísticas o según tu interés</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Información &rarr;</h2>
            <p>Busque información sobre la ciudad</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Comunidad &rarr;</h2>
            <p>Juntese a otras personas con intereses comunes</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
