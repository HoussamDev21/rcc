import { NavLink, useRouteError } from "react-router-dom"

export default function ErrorBoundary() {
	let error = useRouteError()
    let title, body

	if (error.status === 404) {
        title = 'Resource not found!'
        body = `The resource you're looking for is not found, or the link is wrong`
    } else {
        title = 'Something wrong!'
        body = `Something went wrong, try later`
    }

    return <div className="container mx-auto px-40 py-16">
        <div className="flex flex-col items-center">
            <div className="bg-slate-100 rounded-full flex items-center justify-center w-24 h-24">
                <svg className="fill-current text-slate-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M50.8 452.1L19.2 477.4c-2.1 1.7-4.7 2.6-7.4 2.6C5.3 480 0 474.7 0 468.2V192C0 86 86 0 192 0S384 86 384 192V468.2c0 6.5-5.3 11.8-11.8 11.8c-2.7 0-5.3-.9-7.4-2.6l-31.6-25.3c-3.3-2.7-7.5-4.1-11.8-4.1c-5.9 0-11.5 2.8-15 7.5l-37.6 50.1c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4l-38.4-51.2c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-38.4 51.2c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L77.6 455.5c-3.6-4.7-9.1-7.5-15-7.5c-4.3 0-8.4 1.5-11.7 4.1zM160 192c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
            </div>
            <div className="h-4" />
            <div className="font-medium">{title}</div>
            <div className="h-1" />
            <div className="text-center">{body}</div>
            <NavLink to="/" className="underline text-sky-500">Go to home</NavLink>
        </div>
    </div>
}