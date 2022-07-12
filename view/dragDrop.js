/**
 * Add Drag Events to each tile.
 * @param {HTMLElement} tileDiv
 */
export function addTileDrag(tileDiv) {
	tileDiv.addEventListener("dragstart", dragStart);
	tileDiv.addEventListener("dragend", dragEnd);
}

/**
 * Add Drop Event to element.
 * @param {HTMLElement} gridItem
 */
export function addGridDrop(gridItem) {
	gridItem.addEventListener("dragenter", dragEnter);
	gridItem.addEventListener("dragover", dragOver);
	gridItem.addEventListener("dragleave", dragLeave);
	gridItem.addEventListener("drop", drop);
}

/**
 * Remove all listeners on grid item.
 * @param {HTMLElement} gridItem
 */
function removeGridDrop(gridItem) {
	gridItem.removeEventListener("dragenter", dragEnter);
	gridItem.removeEventListener("dragleave", dragLeave);
	gridItem.removeEventListener("dragover", dragOver);
	gridItem.removeEventListener("drop", drop);
}

/**
 * Callback that fires when the user begins dragging an element.
 * @param {Event} e
 */
function dragStart(e) {
	// store id
	e.dataTransfer.setData("text/plain", e.target.id);
	setTimeout(() => {
		e.target.classList.add("hide");
	}, 0);
}

/**
 * Callback that fires when the user stops dragging an element.
 * @param {Event} e
 */
function dragEnd(e) {
	e.target.classList.remove("hide");
}

/**
 * Callback that fires when the user drags an element
 * into the boundary of another element.
 * @param {Event} e
 */
function dragEnter(e) {
	e.preventDefault();
	e.target.classList.add("dragOver");

	// Hide childNodes.
	e.target.childNodes[0].classList.add("hide");
}

/**
 * Callback that fires when the user drags over another element.
 * @param {Event} e
 */
function dragOver(e) {
	console.log("over");
	e.preventDefault();

	// Add event listeners.
	addGridDrop(e.target);
}

/**
 * Callback that fires when the user leaves the boundary of an element.
 * @param {Event} e
 */
function dragLeave(e) {
	e.target.classList.remove("dragOver");

	// Show childNodes.
	e.target.childNodes[0].classList.remove("hide");
}

/**
 * Callback that fires when the user drops an element.
 * @param {Event} e
 */
function drop(e) {
	// Remove dragover class.
	e.target.classList.remove("dragOver");

	// Get draggable element
	const id = e.dataTransfer.getData("text/plain");
	const draggable = document.getElementById(id);

	// Add it to the drop target.
	e.target.appendChild(draggable);

	// Remove drop listener
	removeGridDrop(e.target);
}
