import React from 'react'
import { XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function Alert({ setAlert, success }) {
    return (
        <div className={success ? "rounded-md bg-green-50 p-4 absolute top-6" : "rounded-md bg-red-50 p-4 absolute top-6 w-80"}>
            <div className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className={success ? "h-5 w-5 text-green-400" : "h-5 w-5 text-red-400"} aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className={success ? "text-sm font-medium text-green-800" : "text-sm font-medium text-red-800"}>{success ? "You're all set! Start earning points!" : "Oh no! Complete entire form with matching password."}</h3>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            type="button"
                            onClick={(event) => setAlert(false, event.target.value)}
                            className={success ? "inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50" : "inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
