// import dynamic from 'next/dynamic'

// const Linkedin = dynamic(
//     () => import('../components/github').then(mod => mod.Profile),
//     { loading: () => <p>Carregando...</p> }
// )

function Home(request, response) {
    return (
        <>
            <h1>Eduardo Matias</h1>
        </>
    )
}

export default Home