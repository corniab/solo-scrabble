import { TilesModel } from "../model/tilesModel.js";
import { TilesView } from "../view/tilesView.js";

export class TilesController {
	/**
	 * Creates an instance of the Tiles Controller.
	 */
	constructor() {
		this.model = new TilesModel();
		this.view = new TilesView();
	}

	createTiles() {
		const tiles = this.model.getTilesInPlay();
		this.view.renderTiles(tiles);
	}
}
