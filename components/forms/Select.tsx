import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CgSpinner } from 'react-icons/cg'
import { FieldError } from 'react-hook-form'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface Props<T> {
  isLoading?: boolean
  label: string
  value?: T
  options: T[]
  error?: FieldError
  onClick?: () => void
  onChange: (value: T) => void
  selected: (value: T) => React.ReactElement,
  option: (value: T, isActive: boolean, isSelected: boolean) => React.ReactElement
}

function Select<T>(props: Props<T>) {
  return (
    <>
      <Listbox
        value={props.value == "Type" ? undefined : props.value}
        onChange={(value) => {
          // disable onChange when loading
          if (value !== "Type") {
            props.onChange(value);
          }
        }}
      >
        {({ open }) => {
          return (
            <>
              <Listbox.Label className="block text-sm mb-2">
                {props.label}
              </Listbox.Label>
              <div className='relative'>
                <Listbox.Button
                  onClick={open ? undefined : props.onClick}
                  className={`relative border ${props.error && 'border-red-500'} w-full cursor-default rounded bg-white px-3 py-[0.675rem] leading-tight text-left text-gray-900 sm:text-sm focus:outline-none focus:shadow-outline`}
                >
                  { props.value
                    ? props.selected(props.value)
                    : <span className="block truncate text-neutral-400">Select {props.label}</span>
                  }
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    { open
                      ? <ChevronUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      : <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    }
                    
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options
                    className="
                      absolute border z-10 mt-1 max-h-56
                      w-full overflow-auto rounded
                      bg-white py-1 text-base
                      focus:outline-none sm:text-sm
                  ">
                    {props.isLoading && (
                      <Listbox.Option value="Type">
                        <CgSpinner
                          className="animate-spin text-blue-500 my-1 m-auto"
                          size={22}
                        />
                      </Listbox.Option>
                    )}

                    {!props.isLoading && props.options.map((option, index: number) => {
                      return (
                        <Listbox.Option
                          key={index}
                          className={({ active }) => 
                            classNames(
                              active ? 'bg-blue-500 text-white' : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={option}
                        >
                          {({ selected, active }) => {
                            return (
                              <>
                                <div className="flex items-center">
                                  {props.option(option, active, selected)}
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-blue-500',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )
                          }}
                        </Listbox.Option>
                      )
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )
        }}
      </Listbox>
      {props.error && (
        <p className="mt-1 ml-1 text-xs text-red-500">
          {props.error.message}
        </p>
      )}
    </>
  )
}

export default Select