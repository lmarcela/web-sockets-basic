class Markers {
  constructor() {
    this.actives = {};
  }

  addMarker(marker) {
    this.actives[marker.id] = marker;
    return marker;
  }

  removeMarker(id) {
    delete this.actives[id];
  }

  updateMarker(marker) {
    this.actives[marker.id] = marker;
  }
}

module.exports = Markers;
