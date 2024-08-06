import { BreakItemSheet } from "./item-sheet.js";

export class BreakWayfindingSheet extends BreakItemSheet {

  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["break", "sheet", "wayfinding"],
      template: "systems/break/templates/items/wayfinding-sheet.hbs",
      width: 600,
      height: 480,
      dragDrop: [{dragSelector: null, dropSelector: null}]
    });
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  async getData(options) {
    const context = await super.getData(options);
    context.descriptionHTML = await TextEditor.enrichHTML(context.item.system.description, {
      secrets: this.document.isOwner,
      async: true
    });
    context.isCombustible = true;
    return context;
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  activateListeners(html) {
    super.activateListeners(html);

    if ( !this.isEditable ) return;
  }

  /** @inheritdoc */
  async _onDrop(event) {
    const data = TextEditor.getDragEventData(event);
    if (data.type !== "Item") return;
  }

  /* -------------------------------------------- */

  /** @override */
  _getSubmitData(updateData) {
    let formData = super._getSubmitData(updateData);
    return formData;
  }
}
