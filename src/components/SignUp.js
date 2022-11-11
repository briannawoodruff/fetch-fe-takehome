import React, { Fragment, useState } from 'react'
import { usePasswordValidation } from "../hooks/usePasswordValidation";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import FetchLogo from '../assets/images/logo/fetch-rewards-logo-transparent.png'
import { API } from '../api/APIUtils';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SignUp({ setAlert, setSuccess }) {
    // Form Submission
    const [formState, setFormState] = useState({
        name: '',
        occupation: '',
        state: '',
        email: '',
        password: '',
    });

    // API Utils
    const [
        occupationList,
        stateList,
        selectedOccupation,
        selectedState,
        setSelectedOccupation,
        setSelectedState
    ] = API()

    // Handles Password Validation
    const [passwordVal, setPasswordVal] = useState({
        firstPassword: "",
        password: "",
    });
    const setName = (event) => {
        setFullName({ ...fullName, firstName: event.target.value });
    };
    // Handles Name Inputs
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: "",
    });
    const setFirst = (event) => {
        setPasswordVal({ ...passwordVal, firstPassword: event.target.value });
    };

    // usePasswordValidation Hook
    const [
        validLength,
        hasNumber,
        hasLetter,
        match,
        specialChar,
    ] = usePasswordValidation({
        firstPassword: passwordVal.firstPassword,
        confirmPassword: passwordVal.password,
    });

    // Update Form Submission Input
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        setAlert(false)

        if (name === "password") {
            setPasswordVal({ ...passwordVal, password: event.target.value });
        }
        if (name === "name") {
            setFullName({ ...fullName, lastName: event.target.value })

            setFormState({
                ...formState,
                name: `${fullName.firstName} ${fullName.lastName}`
            })
        }
    };

    // dynamically sets borders for password validation
    const btnClass = () => {
        if (match === null) {
            return 'border-gray-300 focus:border-eggplant-800 focus:ring-eggplant-800 bg-neutral-50 placeholder-neutral-600 text-black mt-1 block w-full rounded-md border py-2 px-3 shadow-sm sm:text-sm focus:outline-none'
        } else if (match) {
            return 'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500 bg-neutral-50 placeholder-neutral-600 text-black mt-1 block w-full rounded-md border py-2 px-3 shadow-sm sm:text-sm focus:outline-none'
        } else {
            return 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-neutral-50 placeholder-neutral-600 text-black mt-1 block w-full rounded-md border py-2 px-3 shadow-sm sm:text-sm focus:outline-none'
        }
    }

    // Handles Form Submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // IF password requirments are met
        if (validLength && hasNumber && hasLetter && match && specialChar) {
            try {
                setSuccess(true)
                setAlert(true)
            } catch (e) {
                console.error(e);
            }
            // ELSE send failed alert
        } else {
            setSuccess(false)
            setAlert(true)
        }
    };

    return (
        <div className="lg:grid lg:grid-cols-8 lg:gap-x-5">
            <div className="space-y-6 sm:px-6 lg:col-span-9">
                <form onSubmit={handleFormSubmit}>
                    <div className="lg:shadow-md lg:rounded-md lg:border-neutral-200 lg:border-2 sm:shadow-none">
                        <div className="space-y-6 py-6 px-6 sm:p-6">
                            <div className='flex flex-col justify-center w-full'>
                                <div className='m-auto'>
                                    <img className="my-6 h-40 w-40" src={FetchLogo} alt='Fetch Rewards Logo'></img>
                                </div>
                                <h3 className="mt-2 text-lg font-medium leading-6 text-gray-900">Sign Up</h3>
                            </div>

                            <div className="grid grid-cols-6 gap-5">
                                <div className="col-span-6 sm:col-span-6 flex justify-between gap-6 w-full">
                                    {/* First Name */}
                                    <div className="col-span-6 sm:col-span-3 flex-1">
                                        <label htmlFor="first-name" className="hidden text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="first-name"
                                            placeholder="First name"
                                            autoComplete="given-name"
                                            onChange={setName}
                                            value={fullName.firstName}
                                            required
                                            className="mt-1 block w-full bg-neutral-50 placeholder-neutral-600 text-black rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-eggplant-800 focus:outline-none focus:ring-eggplant-800 sm:text-sm"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div className="col-span-6 sm:col-span-3 flex-1">
                                        <label htmlFor="last-name" className="hidden text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="last-name"
                                            placeholder="Last name"
                                            autoComplete="family-name"
                                            onChange={handleChange}
                                            value={fullName.lastName}
                                            required
                                            className="mt-1 block w-full bg-neutral-50 placeholder-neutral-600 text-black rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-eggplant-800 focus:outline-none focus:ring-eggplant-800 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-6 flex justify-between gap-6 w-full">
                                    {/* Occupation */}
                                    {selectedOccupation &&
                                        <div className="col-span-6 sm:col-span-3 flex-auto">
                                            <Listbox value={selectedOccupation} onChange={setSelectedOccupation}>
                                                {({ open }) => (
                                                    <>
                                                        <Listbox.Label className="hidden text-sm font-medium text-gray-700">Occupation</Listbox.Label>
                                                        <div className="relative mt-1">
                                                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-neutral-50 placeholder-neutral-600 text-black py-2 pl-3 pr-10 text-left shadow-sm focus:border-eggplant-800 focus:outline-none focus:ring-1 focus:ring-eggplant-800 sm:text-sm">
                                                                <span className="block truncate">{selectedOccupation}</span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                </span>
                                                            </Listbox.Button>

                                                            <Transition
                                                                show={open}
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {occupationList.map((job) => (
                                                                        <Listbox.Option
                                                                            key={job}
                                                                            id="occupation"
                                                                            className={({ active }) =>
                                                                                classNames(
                                                                                    active ? 'text-black bg-squash-500' : 'text-gray-900',
                                                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                                )
                                                                            }
                                                                            value={job}
                                                                        >
                                                                            {({ selectedOccupation, active }) => (
                                                                                <>
                                                                                    <span onChange={handleChange} className={classNames(selectedOccupation ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                        {job}
                                                                                    </span>

                                                                                    {selectedOccupation ? (
                                                                                        <span
                                                                                            className={classNames(
                                                                                                active ? 'text-black' : 'text-squash-500',
                                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                            )}
                                                                                        >
                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                        </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>
                                    }

                                    {/* State */}
                                    {stateList &&
                                        <div className="col-span-6 sm:col-span-3 flex-auto">
                                            <Listbox value={selectedState} onChange={setSelectedState}>
                                                {({ open }) => (
                                                    <>
                                                        <Listbox.Label className="hidden text-sm font-medium text-gray-700">State</Listbox.Label>
                                                        <div className="relative mt-1">
                                                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-neutral-50 placeholder-neutral-600 text-black py-2 pl-3 pr-10 text-left shadow-sm focus:border-eggplant-800 focus:outline-none focus:ring-1 focus:ring-eggplant-800 sm:text-sm">
                                                                <span className="block truncate">{selectedState}</span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                </span>
                                                            </Listbox.Button>

                                                            <Transition
                                                                show={open}
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {stateList.map((state) => (
                                                                        <Listbox.Option
                                                                            key={state.abbreviation}
                                                                            id="state"
                                                                            className={({ active }) =>
                                                                                classNames(
                                                                                    active ? 'text-black bg-squash-500' : 'text-gray-900',
                                                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                                )
                                                                            }
                                                                            value={state.abbreviation}
                                                                        >
                                                                            {({ selectedState, active }) => (
                                                                                <>
                                                                                    <span className={classNames(selectedState ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                        {state.abbreviation}
                                                                                    </span>

                                                                                    {selectedState ? (
                                                                                        <span
                                                                                            className={classNames(
                                                                                                active ? 'text-black' : 'text-squash-500',
                                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                            )}
                                                                                        >
                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                        </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>
                                    }
                                </div>

                                {/* Email */}
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="email-address" className="hidden text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                        value={formState.email}
                                        required
                                        className="mt-1 block w-full bg-neutral-50 placeholder-neutral-600 text-black rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-eggplant-800 focus:outline-none focus:ring-eggplant-800 sm:text-sm"
                                    />
                                </div>

                                {/* Password */}
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="password" className="hidden text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        autoComplete="new-password"
                                        onChange={setFirst}
                                        required
                                        className={classNames(btnClass())}
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="confirm-password" className="hidden text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="confirm-password"
                                        placeholder="Confirm Password"
                                        autoComplete="new-password"
                                        value={formState.password}
                                        onChange={handleChange}
                                        required
                                        className={classNames(btnClass())}
                                    />
                                </div>

                                {/* Verification */}
                                <div className="col-span-6 sm:col-span-6 flex flex-col m-auto text-sm -mt-2 w-full">
                                    <div className="flex flex-row justify-between">
                                        <p className={hasNumber ? "text-emerald-500 ml-4" : "text-red-500 ml-4"}><CheckIcon className="inline pb-1 h-5 w-5" aria-hidden="true" />Includes a number</p>
                                        <p className={hasLetter ? "text-emerald-500 mr-6" : "text-red-500 mr-6"}><CheckIcon className="inline pb-1 h-5 w-5" aria-hidden="true" />Includes a letter</p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <p className={specialChar ? "text-emerald-500 ml-4" : "text-red-500 ml-4"}><CheckIcon className="inline pb-1 h-5 w-5" aria-hidden="true" />Has special characters</p>
                                        <p className={validLength ? "text-emerald-500 mr-5" : "text-red-500 mr-5"}><CheckIcon className="inline pb-1 h-5 w-5" aria-hidden="true" />Has 8 characters</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Submit Button */}
                        <div className="flex justify-center px-6 py-3 text-right sm:px-6 -mt-4 mb-2">
                            <button
                                type="submit"
                                className="w-52 py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-eggplant-900 hover:bg-eggplant-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eggplant-800"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
