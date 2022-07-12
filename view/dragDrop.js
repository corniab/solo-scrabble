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
 * Callback function when element is dragged into boundary of cell.
 * @param {Event} e
 */
function dragEnter(e) {
	e.target.classList.add("dragOver");
}

/**
 * Callback function when element is dragged over boundary of cell.
 * @param {Event} e
 */
function dragOver(e) {
	e.target.classList.add("dragOver");
}

/**
 * Callback function when element is dragged out of boundary of cell.
 * @param {Event} e
 */
function dragLeave(e) {
	e.target.classList.remove("dragOver");
}

/**
 * Callback function when element is dropped into boundary of cell.
 * @param {Event} e
 */
function drop(e) {
	e.target.classList.remove("dragOver");

	// Get draggable element.
	const id = e.dataTransfer.getData("text/plain");

	// CREATE A UNIQUE ID FOR DRAGGABLE ELEMENT
	const draggable = document.getElementById(id);

	// Add it to the drop target.
	e.target.appendChild(draggable);

	// Display new element.
	draggable.classList.remove("hideTile");
}

/**
 * Callback that hides the tile after it is done dragging.
 * @param {Event} e
 */
function dragEnd(e) {
	setTimeout(() => {
		e.target.classList.remove("hideTile");
	}, 0);
}

/**
 * Callback for when the tile is dragged.
 * @param {Event} e
 */
function dragStart(e) {
	// NEED TO TRANSFER SOMETHING OTHER THAN ID
	e.dataTransfer.setData("text/plain", e.target.id);
	setTimeout(() => {
		e.target.classList.add("hideTile");
	}, 0);
	e.target.style.cursor = "move";
}
