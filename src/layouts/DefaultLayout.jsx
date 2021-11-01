import react, {lazy, Suspense} from 'react'

const DefaultLayout = (props) => {
    return (
        <>
            <Suspense fallback={null}>
                {props.children}
            </Suspense>
        </>
    )
}

export default DefaultLayout