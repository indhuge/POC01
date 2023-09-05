

export function getStaticProps({params}) {
    return {
        props: params
    }
}

export function getStaticPaths()
{
    return {
        paths: ['/blog/abc'],
        fallback: true
    }
}

export default function Page(props)
{
    return <h1>{props.id}</h1>
}