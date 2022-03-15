import Layout from '../../components/Layout'

const URI = 'https://jsonplaceholder.typicode.com/posts/'

const firstPost = ({ data }) => {
    return (
        <Layout>
            <h1>
                {data.id} - {data.title}
            </h1>
            <p>{data.body}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch(URI)
        const data = await res.json()
        const paths = data.map((post) => ({
            params: { id: post.id.toString() }
        }))
        console.log(paths)
        return { paths, fallback: false }
    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({ params }) {
    try {
        console.log(params.id)
        const res = await fetch(URI + params.id)
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export default firstPost
