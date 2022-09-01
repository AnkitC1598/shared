import { TrashIcon } from "@heroicons/react/24/solid";
import {
	useCallback,
	useEffect,
	useId,
	useMemo,
	useRef,
	useState
} from "react";
import { classNames } from "../../../utils";

const DragNDrop = ({ label, onFileChange, formats, formatType, maxSize }) => {
	const dropRef = useRef();
	const dragCounter = useRef(0);
	const dropHeight = useRef();
	const dragging = useRef();
	const [file, setFile] = useState();

	const fileLink = useMemo(
		() => (file ? URL.createObjectURL(file) : null),
		[file]
	);

	const inputLabel = useMemo(
		() => (label ? label.replace(" ", "-").toLowerCase() : useId()),
		[label]
	);

	const fileSizeValid = useCallback((fileSize) => {
		console.log(parseInt(fileSize / 1024));
		if (parseInt(fileSize / 1024) <= maxSize * 1000) return true;
		return false;
	});

	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const handleDragIn = (e) => {
		e.preventDefault();
		e.stopPropagation();
		dragCounter.current++;
		if (e.dataTransfer.items && e.dataTransfer.items.length > 0)
			dragging.current = true;
	};
	const handleDragOut = (e) => {
		e.preventDefault();
		e.stopPropagation();
		dragCounter.current--;
		if (dragCounter.current === 0) dragging.current = false;
	};
	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		dragging.current = false;
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			console.log(e.dataTransfer);
			const inputFile = e.dataTransfer.files[0];
			if (fileSizeValid(inputFile.size)) {
				setFile(inputFile);
				onFileChange(inputFile);
				e.dataTransfer.clearData();
				dragCounter.current = 0;
			}
		}
	};

	const handleFileInput = (e) => {
		alert(label);
		const inputFile = e.target.files[0];
		if (fileSizeValid(inputFile.size)) {
			setFile(inputFile);
			onFileChange(inputFile);
		}
	};

	const removeFile = () => {
		setFile();
	};

	useEffect(() => {
		const dropDiv = dropRef.current;
		dropHeight.current = dropDiv.offsetHeight;
		dropDiv.addEventListener("dragenter", handleDragIn);
		dropDiv.addEventListener("dragleave", handleDragOut);
		dropDiv.addEventListener("dragover", handleDrag);
		dropDiv.addEventListener("drop", handleDrop);
		return () => {
			dropDiv.removeEventListener("dragenter", handleDragIn);
			dropDiv.removeEventListener("dragleave", handleDragOut);
			dropDiv.removeEventListener("dragover", handleDrag);
			dropDiv.removeEventListener("drop", handleDrop);
		};
	}, []);

	useEffect(() => {});
	return (
		<>
			<div className="h-full flex flex-col">
				<label className="block text-sm font-medium text-gray-700">
					{label}
				</label>

				<div
					className={classNames(
						"mt-1 flex justify-center items-center rounded-md border-gray-300",
						file
							? "group relative border shadow"
							: "flex-grow border-2 border-dashed p-4"
					)}
					style={file ? { maxHeight: `${dropHeight.current}px` } : {}}
					ref={dropRef}
				>
					{!file ? (
						<div className="space-y-1 text-center">
							<svg
								className="mx-auto h-12 w-12 text-gray-400"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 48 48"
								aria-hidden="true"
							>
								<path
									d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="flex flex-col text-sm text-gray-600">
								<label
									htmlFor={`${inputLabel}-upload`}
									className="relative flex flex-col cursor-pointer rounded-md font-medium text-indigo-500 focus-within:outline-none focus-within:ring-0 hover:text-indigo-600"
								>
									<span>Upload a file</span>
									<input
										id={`${inputLabel}-upload`}
										name={`${inputLabel}-upload`}
										type="file"
										className="sr-only"
										onChange={handleFileInput}
										accept={formats
											.map(
												(format) =>
													`${formatType}/${format}`
											)
											.join(", ")}
									/>
								</label>
							</div>
							<p className="text-xs text-gray-500">
								<span className="uppercase">
									{formats.join(", ")}
								</span>{" "}
								up to {maxSize}MB
							</p>
						</div>
					) : fileLink ? (
						<>
							<img
								src={fileLink}
								alt={file.name}
								className="h-full group-hover:opacity-50"
							/>
							<div
								className="w-full h-full absolute group-hover:visible invisible flex items-center justify-center z-10 cursor-pointer"
								onClick={removeFile}
							>
								<TrashIcon className="h-8 w-8 text-red-500" />
							</div>
						</>
					) : null}
				</div>
			</div>
		</>
	);
};

DragNDrop.defaultProps = {
	formats: ["png", "jpg", "jpeg", "webp"],
	formatType: "image",
	label: "Upload a file",
	onFileChange: console.log,
	maxSize: 1,
};

export default DragNDrop;
