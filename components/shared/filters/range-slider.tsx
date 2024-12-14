'use client'

import React, {
	forwardRef,
	Fragment,
	RefObject,
	useEffect,
	useState,
} from 'react'
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider'

type SliderProps = {
	min: number
	max: number
	step: number
	formatLabel?: (value: number) => string
	value?: number[] | readonly number[]
	onValueChange?: (values: number[]) => void
}

const RangeSlider = forwardRef(
	(
		{
			min,
			max,
			step,
			formatLabel,
			value,
			onValueChange,
			...props
		}: SliderProps,
		ref
	) => {
		const initialValue = Array.isArray(value) ? value : [min, max]
		const [localValues, setLocalValues] = useState(initialValue)

		useEffect(() => {
			setLocalValues(Array.isArray(value) ? value : [min, max])
		}, [min, max, value])

		const handleValueChange = (newValues: number[]) => {
			setLocalValues(newValues)
			if (onValueChange) {
				onValueChange(newValues)
			}
		}

		return (
			<Root
				ref={ref as RefObject<HTMLDivElement>}
				min={min}
				max={max}
				step={step}
				value={localValues}
				onValueChange={handleValueChange}
				className='relative flex w-full touch-none select-none mb-6 items-center'
				{...props}
			>
				<Track className='relative h-1 w-full grow overflow-hidden rounded-full bg-gray-50'>
					<Range className='absolute h-full bg-black' />
				</Track>
				{localValues.map((value, index) => (
					<Fragment key={index}>
						<div
							className='absolute text-center'
							style={{
								left: `calc(${((value - min) / (max - min)) * 100}% + 0px)`,
								top: `10px`,
							}}
						>
							<span className='text-sm'>
								{formatLabel ? formatLabel(value) : value}
							</span>
						</div>
						<Thumb className='block size-4 rounded-full border border-black/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50' />
					</Fragment>
				))}
			</Root>
		)
	}
)

RangeSlider.displayName = Root.displayName

export { RangeSlider }
