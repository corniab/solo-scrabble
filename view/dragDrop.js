class DragAndDrop {
	constructor() {}
	/**
	 * Add Drag Events to each tile.
	 * @param {HTMLElement} tile
	 */
	addTileDrag(tile) {
		tile.addEventListener("dragstart", this.dragStart.bind(tile));
		tile.addEventListener("dragend", this.dragEnd.bind(tile));
	}

	/**
	 * Add Drop Event to element.
	 * @param {HTMLElement} cell
	 */
	addGridDrop(cell) {
		cell.addEventListener("dragenter", this.dragEnter.bind(cell));
		cell.addEventListener("dragover", this.dragOver.bind(cell));
		cell.addEventListener("dragleave", this.dragLeave.bind(cell));
		cell.addEventListener("drop", this.drop.bind(cell));
	}

	/**
	 * Callback function when element is dragged into boundary of cell.
	 * @param {Event} e
	 */
	dragEnter(e) {
		e.preventDefault();
		e.target.classList.add("dragOver");
	}

	/**
	 * Callback function when element is dragged over boundary of cell.
	 * @param {Event} e
	 */
	dragOver(e) {
		e.preventDefault();
		e.target.classList.add("dragOver");
	}

	/**
	 * Callback function when element is dragged out of boundary of cell.
	 * @param {Event} e
	 */
	dragLeave(e) {
		e.target.classList.remove("dragOver");
	}

	/**
	 * Callback function when element is dropped into boundary of cell.
	 * @param {Event} e
	 */
	drop(e) {
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
	dragEnd(e) {
		setTimeout(() => {
			e.target.classList.remove("hideTile");
		}, 0);
	}

	/**
	 * Callback for when the tile is dragged.
	 * @param {Event} e
	 */
	dragStart(e) {
		// NEED TO TRANSFER SOMETHING OTHER THAN ID
		e.dataTransfer.setData("text/plain", e.target.id);
		setTimeout(() => {
			e.target.classList.add("hide");
		}, 0);
		e.target.style.cursor = "move";
	}
}
