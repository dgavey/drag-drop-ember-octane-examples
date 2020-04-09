import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SimpleDrag extends Component {

    @tracked statusText = "";
    @tracked overDropZone = false;

    @action dragHasStarted() {
        this.statusText = "Drag has started";
    }

    @action dropItem(dragEvent) {
        dragEvent.preventDefault();
        this.statusText = "Drop Has Completed";
        this.overDropZone = false;
    }
    @action dragOver(dragEvent) {
        dragEvent.preventDefault();
        dragEvent.dataTransfer.dropEffect = "move";
    }
    @action dropLeave() {
        this.statusText = "Drag has left drop zone";
        this.overDropZone = false;
    }
    @action dropEnter() {
        this.statusText = "Drag is entered Drop Zone";
        this.overDropZone = true;
    }
 }