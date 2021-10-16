import { eventHandler } from "./modules/event-handler.mjs";

const init = () => {
   eventHandler.setupEventListeners();
};

window.onload = init;