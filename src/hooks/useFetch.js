import React from 'react'


function fetchReducer(state, action) {
    if (action.type === 'fetch') {
        return {
            ...state,
            loading: true,
        }
    } else if (action.type === 'success') {
        return {
            data: action.data,
            error: null,
            loading: false,
        }
    } else if (action.type === 'error') {
        return {
            ...state,
            error: 'Error fetching data',
            loading: false,
        }
    } else {
        throw new Error('That action type is not supported.')
    }
}

export default function useFetch (url) {
    const [state, dispatch] = React.useReducer(
        fetchReducer, 
        { data: null, errror: null, loading: true }
    )

    React.useEffect(() => {
        dispatch({ type: 'fetch' })

        fetch(url)
            .then((res) => res.json())
            .then((data) => dispatch( { type: 'success', data }))
            .catch((error) => {
                console.warn(error)
                dispatch({ type: 'error', })
            })
    }, [url])

    return {
        loading: state.loading,
        data: state.data,
        error: state.error,
    }
}