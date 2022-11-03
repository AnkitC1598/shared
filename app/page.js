"use client"

import { useState } from "react"
import {
	Avatar,
	Button,
	ButtonLink,
	DragNDrop,
	FormInput,
	Img,
	Input,
	Loader,
	Options,
	ProgressBar,
	Role,
	Search,
	Select,
	Subtitle,
	Title,
	Toggle,
	UserSearch,
} from "../components/atoms"

const Typography = () => {
	const [toggleState, setToggleState] = useState(false)

	return (
		<>
			<div className="flex h-screen flex-col items-center py-2">
				<Title text="Atoms" />
				<div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<Avatar size="h-28" />
						<div>Avatar</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<Button
							label="Button"
							action={() => alert("Button Clicked")}
						/>
						<div>Button</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<ButtonLink />
						<div>ButtonLink</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<DragNDrop />
						<div>DragNDrop</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<span className="w-full flex-1 flex items-center">
							<span className="w-full flex-1">
								<FormInput />
							</span>
						</span>
						<div>FormInput</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<Img className="h-28 aspect-square" />
						<div>Img</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<span className="flex flex-1 items-center w-full">
							<Input />
						</span>
						<div>Input</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<Loader />
						<div>Loader</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<span className="flex flex-1 items-center justify-center w-full">
							<Options
								options={[
									{
										label: "Option 1",
										action: () => console.log("Option 1"),
									},
								]}
							/>
						</span>
						<div>Options</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<span className="flex flex-1 flex-col space-y-2 items-center justify-center w-full">
							<ProgressBar progress={[50]} />
							<ProgressBar progress={[50, 20]} />
							<ProgressBar progress={[50, 20, 70]} />
						</span>
						<div>ProgressBar</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<span className="flex flex-1 space-x-2 items-center justify-center w-full">
							<Role role="admin" />
							<Role role="trainer" />
							<Role role="moderator" />
						</span>
						<div>Role</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<span className="flex flex-1 items-center w-full">
							<Search className="w-full" />
						</span>
						<div>Search</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<span className="flex flex-1 items-center w-full">
							<Select
								options={[
									{
										label: "Option 1",
										value: "option-1",
									},
									{
										label: "Option 1",
										value: "option-1",
									},
								]}
							/>
						</span>
						<div>Select</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<Subtitle text="Subtitle" />
						<div>Subtitle</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<Title text="Title" />
						<div>Title</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<Toggle
							value={toggleState}
							onChange={() => setToggleState(prev => !prev)}
						/>
						<div>Toggle</div>
					</div>
					<div className="flex flex-col items-center justify-center p-2 hover:shadow-lg rounded-md border space-y-2">
						<span className="flex flex-1 items-center w-full">
							<UserSearch className="w-full" />
						</span>
						<div>Search</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Typography
